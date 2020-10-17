const state = { inputText: '' };
// eslint-disable-next-line no-shadow
const getters = { inputText: (state) => state.inputText };
const mutations = {
  // eslint-disable-next-line no-shadow
  UPDATE_INPUT_TEXT(state, payload) {
    state.inputText = payload.inputText;
  },
};
const actions = {
  updateInputText({ commit }, payload) {
    commit('UPDATE_INPUT_TEXT', payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
