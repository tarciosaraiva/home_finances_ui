import Vue from 'vue';
import VueGridStyled from 'vue-grid-styled';

import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

const theme = {};

Vue.use(VueGridStyled, { theme });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
