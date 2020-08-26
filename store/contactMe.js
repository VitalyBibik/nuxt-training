export const state = () => ({
  isShowContactMe: false,
});

export const mutations = {
  setStateShown(state, value) {
    state.isShowContactMe = value;
  },
};

export const actions = {
  showContactMe({ commit }) {
    commit('setStateShown', true);
  },
  hideContactMe({ commit }) {
    commit('setStateShown', false);
  },
};

export const getters = {
  getStateShown(state) {
    return state.isShowContactMe;
  },
};
