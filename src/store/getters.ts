import { IHomeFinanceState } from '@/types';

export default {
  getCategoryById(state: IHomeFinanceState) {
    return (id: number) => state.entities.categories.find((category) => category.id === id);
  },
};
