export default {
  addItem({ commit }) {
    commit('ADD_ITEM');
  },
  deleteItem({ commit }, payload) {
    commit('DELETE_ITEM', payload);
  },
  deleteAll({ commit }) {
    // eslint-disable-next-line no-alert
    if (window.confirm('本当に全て削除してよろしいですか')) commit('DELETE_ALL');
  },
  checkAll({ commit }) {
    commit('CHECK_ALL');
  },
  uncheckAll({ commit }) {
    commit('UNCHECK_ALL');
  },
  changeTodoText({ commit }, payload) {
    commit('CHANGE_TODO_TEXT', payload);
  },
  save({ commit }) {
    commit('SAVE');
  },
  load({ commit }) {
    commit('LOAD');
  },
};
