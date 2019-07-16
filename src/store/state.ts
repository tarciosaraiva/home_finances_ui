import { IHomeFinanceState } from '@/types';

const appState: IHomeFinanceState = {
  loading: false,
  errors: [],
  entities: {
    accounts: [],
    buckets: [],
    categories: [],
  },
};

export default appState;
