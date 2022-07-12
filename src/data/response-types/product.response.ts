import { Product } from '../../domain/models/product.model';

interface IProduct extends Product {
  createdAt: string;
  updatedAt: string;
}

export interface IProductResponse {
  products: IProduct[];
  count: number;
}
