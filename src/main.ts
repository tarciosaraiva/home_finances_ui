import Vue from 'vue';
import VueGridStyled from 'vue-grid-styled';
import VModal from 'vue-js-modal';

import App from './App.vue';
import router from './router';
import store from '@/store';
import './registerServiceWorker';

Vue.config.productionTip = false;

const theme = {};

Vue.use(VModal, { dynamic: true });
Vue.use(VueGridStyled, { theme });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
