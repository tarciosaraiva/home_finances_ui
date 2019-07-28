import * as types from '@/store/mutationTypes';
import { IHomeFinanceState, ICategory, IBucket } from '@/types';

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
  [types.ADD_CATEGORY_TO_LIST](state: IHomeFinanceState, category: ICategory) {
    state.entities.categories.push(category);
  },
  [types.SET_BUCKETS](state: IHomeFinanceState, buckets: IBucket[]) {
    state.entities.buckets = buckets;
  },
};
