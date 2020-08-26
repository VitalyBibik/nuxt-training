export const state = () => ({
  isShowThanksSlide: false,
});

export const mutations = {
  setStateShown(state, value) {
    state.isShowThanksSlide = value;
  },
};

export const actions = {
  showThanksSlide({ commit }) {
    commit('setStateShown', true);
  },
  hideThanksSlide({ commit }) {
    commit('setStateShown', false);
  },
};

export const getters = {
  getStateShown(state) {
    return state.isShowThanksSlide;
  },
};
