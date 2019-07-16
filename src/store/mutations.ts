import * as types from '@/store/mutationTypes';
import { IHomeFinanceState, ICategory } from '@/types';

export default {
  [types.REQUEST_PENDING](state: IHomeFinanceState) {
    state.loading = true;
    state.errors = [];
  },
  [types.REQUEST_SUCCEED](state: IHomeFinanceState) {
    state.loading = false;
  },
  [types.REQUEST_FAILED](state: IHomeFinanceState, errors: string[]) {
    state.loading = false;
    state.errors = errors;
  },
  [types.SET_CATEGORIES](state: IHomeFinanceState, categories: ICategory[]) {
    state.entities.categories = categories;
  },
};
