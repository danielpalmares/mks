import { ICollection } from '../../domain/models/collection';
import { Product } from '../../domain/models/product.model';
import { IProductResponse } from '../response-types/product.response';

export class ProductMapper {
  public static fromJson(json: IProductResponse): ICollection<Product> {
    return {
      data: json.products.map(product => {
        return {
          id: product.id,
          name: product.name,
          brand: product.brand,
          description: product.description,
          photo: product.photo,
          price: product.price,
        };
      }),
      count: json.count,
    };
  }
}
