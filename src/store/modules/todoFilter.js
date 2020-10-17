const state = { selectedValue: '' };
// eslint-disable-next-line no-shadow
const getters = { selectedValue: (state) => state.selectedValue };
const mutations = {
  // eslint-disable-next-line no-shadow
  UPDATE_SELECTED_VALUE(state, payload) {
    state.selectedValue = payload.selectedValue;
  },
};
const actions = {
  updateSelectedValue({ commit }, payload) {
    commit('UPDATE_SELECTED_VALUE', payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
