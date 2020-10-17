import '../scss/base.scss';
import Vue from 'vue';
import store from '../store'
import App from '../vue/components/pages/App.vue';

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
