export interface ICategory {
  id: number;
  name: string;
}

export interface IBucket {
  id: number;
  name: string;
  threshold: number;
}

export interface IAccount {
  id: number;
  name: string;
}

export interface IEntities {
  categories: ICategory[];
  buckets: IBucket[];
  accounts: IAccount[];
}

export interface IHomeFinanceState {
    loading: boolean;
    errors: string[];
    entities: IEntities;
}
