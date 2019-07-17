import axios from 'axios';
import uuid from 'uuid';

import store from '@/store';
import { REQUEST_PENDING, REQUEST_FAILED, REQUEST_SUCCEED } from '@/store/mutationTypes';
import { ICategory } from './types';

const BASE_API_URL = `//localhost:5000`;

export const request = axios.create({
  baseURL: `${BASE_API_URL}/api`,
  timeout: 2000,
  maxRedirects: 1,
});

request.interceptors.request.use(
  (config) => {
    config.headers['X-RequestId'] = uuid.v1();
    store.commit(REQUEST_PENDING);
    return config;
  },
  (err) => {
    store.commit(REQUEST_FAILED, err.message);
    return Promise.reject(err);
  },
);

request.interceptors.response.use(
  (response) => {
    store.commit(REQUEST_SUCCEED);
    return response;
  },
  (err) => {
    store.commit(REQUEST_FAILED, err.message);
    return Promise.reject(err);
  },
);

export default {
  categories: {
    all() {
      return request.get('admin/categories');
    },
    delete(id: number) {
      return request.delete(`admin/categories/${id}`);
    },
    save(category: ICategory) {
      if (category.id) {
        return request.put(`admin/categories/${category.id}`, category);
      }

      return request.post('admin/categories', category);
    },
  },
  buckets: {
    all() {
      return request.get('admin/buckets');
    },
    delete(id: number) {
      return request.delete(`admin/buckets/${id}`);
    },
    save(category: ICategory) {
      if (category.id) {
        return request.put(`admin/buckets/${category.id}`, category);
      }

      return request.post('admin/buckets', category);
    },
  },
};
