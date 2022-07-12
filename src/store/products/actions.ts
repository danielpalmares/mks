import { action } from 'typesafe-actions';
import { IParams } from '../../data/utils/params';
import { ProductState, ProductTypes } from './types';

export const setProductsAction = (data: ProductState) =>
  action(ProductTypes.SET_PRODUCTS, data);

export const setProductsSaga = (params: IParams) =>
  action(ProductTypes.SET_PRODUCTS_SAGA, params);

export const setRequestFailure = (message: string) =>
  action(ProductTypes.SET_REQUEST_FAILURE, message);
