import { ActionContext } from 'vuex';

import api from '@/api';
import { SET_BUCKETS, SET_CATEGORIES } from '@/store/mutationTypes';
import { IHomeFinanceState, ICategory } from '@/types';

export default {
  loadCategories({ commit }: ActionContext<IHomeFinanceState, any>) {
    api.categories.all().then(({ data }) => commit(SET_CATEGORIES, data));
  },
  deleteCategory({ dispatch }: ActionContext<IHomeFinanceState, any>, id: number) {
    api.categories.delete(id).then(() => dispatch('loadCategories'));
  },
  saveCategory({ dispatch }: ActionContext<IHomeFinanceState, any>, category: ICategory) {
    api.categories.save(category).then(() => dispatch('loadCategories'));
  },

  loadBuckets({ commit }: ActionContext<IHomeFinanceState, any>) {
    api.buckets.all().then(({ data }) => commit(SET_BUCKETS, data));
  },
  deleteBucket({ dispatch }: ActionContext<IHomeFinanceState, any>, id: number) {
    api.buckets.delete(id).then(() => dispatch('loadBuckets'));
  },
  saveBucket({ dispatch }: ActionContext<IHomeFinanceState, any>, category: ICategory) {
    api.buckets.save(category).then(() => dispatch('loadBuckets'));
  },
};
