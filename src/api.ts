import axios from 'axios';
import uuid from 'uuid';

const BASE_API_URL = `//localhost:5000`;

export const request = axios.create({
  baseURL: `${BASE_API_URL}/api`,
});

request.interceptors.request.use(
  (config) => {
    config.headers['X-RequestId'] = uuid.v1();
//   store.commit({ type: types.REQUEST_PENDING })
    return config;
  },
  (err) => Promise.reject(err),
);

export default {
  categories: {
    all() {
      return request.get('admin/categories');
    },
  },
};
