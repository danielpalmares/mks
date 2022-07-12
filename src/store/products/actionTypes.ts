import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type ProductActionsType = ActionType<typeof actions>;
export type SetProductsSagaAction = ActionType<typeof actions.setProductsSaga>;
