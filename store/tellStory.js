export const state = () => ({
  option: 1,
  optionsText: {
    1: {
      text:
        'Заполнить подробную форму прямо на сайте и мы опубликуем вашу историю после проверки. Пожалуйста, заполняйте все пункты корректно, если вы испытаете какие-то сложности, воспользуйтесь 2-м вариантом.',
    },
    2: {
      text:
        'Оставить контакт (почту или номер телефона) и мы свяжемся с вами, зададим вопросы, уточним детали вашей истории.',
    },
  },
});

export const mutations = {
  setStateOption(state, value) {
    state.option = value;
  },
};

export const actions = {
  chooseFirstOption({ commit }) {
    commit('setStateOption', 1);
  },
  chooseSecondOption({ commit }) {
    commit('setStateOption', 2);
  },
};

export const getters = {
  getStateOption(state) {
    return state.option;
  },
  getStateOptionText(state) {
    return state.optionsText[state.option].text;
  },
};
