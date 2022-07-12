import { all, takeLatest } from '@redux-saga/core/effects';
import { ProductTypes } from './products/types';
import * as products from './products/sagas';

export function* rootSaga() {
  yield all([takeLatest(ProductTypes.SET_PRODUCTS_SAGA, products.setProducts)]);
}
