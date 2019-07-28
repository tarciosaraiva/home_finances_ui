import { defaults } from 'lodash';
import { ActionContext } from 'vuex';

import api from '@/api';
import { SET_BUCKETS, SET_CATEGORIES, ADD_CATEGORY_TO_LIST } from '@/store/mutationTypes';
import { IHomeFinanceState, ICategory, IBucket } from '@/types';

export default {
  retrieveCategory({ state, commit }: ActionContext<IHomeFinanceState, any>, id: number): Promise<ICategory> {
    const stateCategory = state.entities.categories.find((c) => c.id === id);
    if (stateCategory) {
      return Promise.resolve(defaults(Object.create({}), stateCategory));
    }

    return api.categories.get(id).then(({ data }) => data);
  },
  loadCategories({ commit }: ActionContext<IHomeFinanceState, any>) {
    api.categories.all().then(({ data }) => commit(SET_CATEGORIES, data));
  },
  deleteCategory({ dispatch }: ActionContext<IHomeFinanceState, any>, id: number) {
    api.categories.delete(id).then(() => dispatch('loadCategories'));
  },
  saveCategory({ dispatch }: ActionContext<IHomeFinanceState, any>, category: ICategory) {
    api.categories.save(category).then(() => dispatch('loadCategories'));
  },

  retrieveBucket({ state, commit }: ActionContext<IHomeFinanceState, any>, id: number): Promise<IBucket> {
    const stateBucket = state.entities.buckets.find((b) => b.id === id);
    if (stateBucket) {
      return Promise.resolve(defaults(Object.create({}), stateBucket));
    }

    return api.buckets.get(id).then(({ data }) => data);
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
