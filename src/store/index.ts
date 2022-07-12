import { applyMiddleware, configureStore, Store } from '@reduxjs/toolkit';
import { ProductState } from './products/types';
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';
import createSagaMiddleware from 'redux-saga';

export interface ApplicationState {
  products: ProductState;
}

const sagaMiddleware = createSagaMiddleware();
const sagaEnhancer = applyMiddleware(sagaMiddleware);

export const store: Store<ApplicationState> = configureStore({
  reducer: rootReducer,
  enhancers: [sagaEnhancer],
});

sagaMiddleware.run(rootSaga);
