import { IParams } from '../../data/utils/params';
import { ICollection } from '../models/collection';
import { Product } from '../models/product.model';

export interface IProductRepository {
  getProducts(params: IParams): Promise<ICollection<Product>>;
}
