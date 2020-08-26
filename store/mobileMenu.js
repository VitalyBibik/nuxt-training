export const state = () => ({
  mobileOpened: false,
});

export const mutations = {
  toggleMobile(state) {
    state.mobileOpened = !state.mobileOpened;
  },

  closeMobile(state) {
    state.mobileOpened = false;
  },
};

export const getters = {
  getMobileMenuState(state) {
    return state.mobileOpened;
  },
};
