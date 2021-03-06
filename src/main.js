import Vue from 'vue';
import Buefy from 'buefy';
import App from './App.vue';
import store from './store';
import router from './router';
import 'buefy/dist/buefy.css';

Vue.use(Buefy, {
  defaultIconPack: 'fas',
  defaultContainerElement: '#content',
});
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
