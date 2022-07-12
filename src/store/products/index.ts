import { Reducer } from 'redux';
import { ProductActionsType } from './actionTypes';
import { ProductState, ProductTypes } from './types';

const INITIAL_STATE: ProductState = {
  data: [],
  count: 0,
  loading: false,
};

const products: Reducer<ProductState, ProductActionsType> = (
  state: ProductState = INITIAL_STATE,
  action: ProductActionsType
) => {
  switch (action.type) {
    case ProductTypes.SET_PRODUCTS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        errorMessage: undefined,
      };
    case ProductTypes.SET_PRODUCTS_SAGA:
      return {
        ...state,
        loading: true,
        errorMessage: undefined,
      };
    case ProductTypes.SET_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    default:
      return INITIAL_STATE;
  }
};

export { products };
