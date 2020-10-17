import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import todoInput from './modules/todoInput';
import todoFilter from './modules/todoFilter';

Vue.use(Vuex);
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    todoInput,
    todoFilter,
  },
});
