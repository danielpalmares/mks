import { call, put } from '@redux-saga/core/effects';
import { ICollection } from '../../domain/models/collection';
import { Product } from '../../domain/models/product.model';
import { ProductRepository } from '../../data/repositories/product.repository';
import { AxiosError } from 'axios';
import { SetProductsSagaAction } from './actionTypes';
import * as actions from '../products/actions';

export function* setProducts(action: SetProductsSagaAction) {
  const { getProducts } = new ProductRepository();

  try {
    const products: ICollection<Product> = yield call(
      getProducts,
      action.payload
    );
    yield put(actions.setProductsAction(products));
  } catch (error) {
    if (error instanceof AxiosError) {
      yield put(
        actions.setRequestFailure(
          error.response ? error.response.data.message : error.message
        )
      );
    } else {
      yield put(
        actions.setRequestFailure('💣 Houve um erro ao listar os produtos...')
      );
    }
  }
}
