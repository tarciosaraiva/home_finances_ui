import { ActionContext } from 'vuex';

import api from '@/api';
import { SET_CATEGORIES } from '@/store/mutationTypes';
import { IHomeFinanceState } from '@/types';

export default {
  loadCategories({ commit }: ActionContext<IHomeFinanceState, any>) {
    api.categories.all().then(({ data }) => commit(SET_CATEGORIES, data));
  },
  deleteCategory({ dispatch }: ActionContext<IHomeFinanceState, any>, id: number) {
    api.categories.delete(id).then(() => dispatch('loadCategories'));
  },
};
