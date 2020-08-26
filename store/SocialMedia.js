export const state = () => ({
  isShowSocialMedia: false,
  links: [
    {
      id: 1,
      name: 'Facebook',
      url:
        'https://www.facebook.com/sharer.php?src=sp&u=https%3A%2F%2Fraklechitsa.ru%2F&title=РАКЛЕЧИТСЯ.РФ%20—%20истории%20людей%2C%20победивших%20рак%2C%20но%20не%20свои%20привычки&utm_source=share2',
    },
    {
      id: 2,
      name: 'Twitter',
      url:
        'https://twitter.com/intent/tweet?text=РАКЛЕЧИТСЯ.РФ%20—%20истории%20людей%2C%20победивших%20рак%2C%20но%20не%20свои%20привычки&url=https%3A%2F%2Fraklechitsa.ru%2F&utm_source=share2',
    },
    {
      id: 3,
      name: 'Vkontakte',
      url:
        'https://vk.com/share.php?url=https%3A%2F%2Fraklechitsa.ru%2F&title=РАКЛЕЧИТСЯ.РФ%20—%20истории%20людей%2C%20победивших%20рак%2C%20но%20не%20свои%20привычки&utm_source=share2',
    },
    {
      id: 4,
      name: 'Odnoklassniki',
      url:
        'https://connect.ok.ru/offer?url=https%3A%2F%2Fraklechitsa.ru%2F&title=РАКЛЕЧИТСЯ.РФ%20—%20истории%20людей%2C%20победивших%20рак%2C%20но%20не%20свои%20привычки&utm_source=share2',
    },
    {
      id: 5,
      name: 'Instagram',
      url: 'https://www.instagram.com/raklechitsa/',
    },
    {
      id: 6,
      name: 'YouTube',
      url:
        'https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F',
    },
  ],
});

export const mutations = {
  setStateShown(state, value) {
    state.isShowSocialMedia = value;
  },
};

export const actions = {
  showSocialMedia({ commit }) {
    commit('setStateShown', true);
  },
  hideSocialMedia({ commit }) {
    commit('setStateShown', false);
  },
};

export const getters = {
  getStateShown(state) {
    return state.isShowSocialMedia;
  },
  getSocialMediaLinks(state) {
    return state.links;
  },
};
