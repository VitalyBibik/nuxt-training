export const state = () => ({
  isShow: false,
});

export const mutations = {
  openPopup(state) {
    state.isShow = true;
  },
  closePopup(state) {
    state.isShow = false;
  },
};

export const getters = {
  getPopupShown(state) {
    return state.isShow;
  },
};
