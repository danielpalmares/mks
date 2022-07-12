import { ICollection } from '../../domain/models/collection';
import { Product } from '../../domain/models/product.model';
import { IProductRepository } from '../../domain/repositories/product.repository';
import { ProductMapper } from '../mappers/ProductMapper';
import { http } from '../utils/Http';
import { IParams } from '../utils/params';

export class ProductRepository implements IProductRepository {
  async getProducts(params: IParams): Promise<ICollection<Product>> {
    const response = await http.get('/products', { params });
    return ProductMapper.fromJson(response.data);
  }
}
