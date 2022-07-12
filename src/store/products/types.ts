import { ICollection } from '../../domain/models/collection';
import { Product } from '../../domain/models/product.model';

export enum ProductTypes {
  SET_PRODUCTS = '@products/SET_PRODUCTS',
  SET_PRODUCTS_SAGA = '@products/SET_PRODUCTS_SAGA',
  SET_REQUEST_FAILURE = '@products/SET_REQUEST_FAILURE',
}

export interface ProductState extends ICollection<Product> {
  loading?: boolean;
  errorMessage?: string;
}
