import axios from 'axios';

export const state = () => ({
  stories: [],
  CurrentIndex: 0,
  itemsPerPage: 16,
  numberOfItems: 0,
  numberOfPages: 0,
  storiesToShow: [],
  amountOfStoriesToShow: 0,
  currentStory: {},
});

export const mutations = {
  setStoriesToShow(state, value) {
    state.storiesToShow = value;
  },

  setItemsPerPage(state, value) {
    state.itemsPerPage = value;
  },

  setCurrentIndex(state, value) {
    state.CurrentIndex = value;
  },

  setNumberOfPages(state, value) {
    state.numberOfPages = value;
  },

  setStories(state, stories) {
    // не используется
    state.stories = stories;
  },

  setNumberOfItems(state, value) {
    state.numberOfItems = value;
  },

  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  countStories({ commit }, storiesList) {
    commit('setState', {
      name: 'amountOfStoriesToShow',
      value: storiesList.length,
    });
  },

  countNumberOfItems({ state, commit }) {
    const numberOfItems = state.stories.length + 1;
    commit('setNumberOfItems', numberOfItems);
  },

  defineStoriesToShow({ state, commit, dispatch }, search) {
    dispatch('changeItemsPerPage');

    let { stories } = state;

    if (search) {
      stories = stories.filter((item) => {
        //можно вынести в отдельную функцию
        if (item.author.toLowerCase().includes(search)) return true;
        if (item.title.toLowerCase().includes(search)) return true;
        //if (item.text.toLowerCase().includes(search)) return true; //Нужно ли искать в самом тексте?
      });
    }

    dispatch('countStories', stories);
    dispatch('calcNumberOfPages');

    const storiesToShow = stories.filter(
      //можно вынести в отдельную функцию
      (item, index) =>
        index >= state.CurrentIndex &&
        index <= state.CurrentIndex + state.itemsPerPage - 1
    );

    commit('setStoriesToShow', storiesToShow);
  },

  calcNumberOfPages({ state, commit }) {
    const numberOfPages = Math.ceil(
      state.amountOfStoriesToShow / state.itemsPerPage
    );

    commit('setNumberOfPages', numberOfPages);
  },

  changeItemsPerPage({ state, commit, dispatch }) {
    if (process.browser) {
      if (window.innerWidth <= 320) {
        commit('setItemsPerPage', 9);
        dispatch('calcNumberOfPages');
        return state.itemsPerPage;
      }

      if (window.innerWidth <= 768) {
        commit('setItemsPerPage', 12);
        dispatch('calcNumberOfPages');
        return state.itemsPerPage;
      }

      commit('setItemsPerPage', 16);
      dispatch('calcNumberOfPages');
      return state.itemsPerPage;
    }
  },

  changeCurrentIndex({ state, dispatch, commit }, { index, search }) {
    const { itemsPerPage } = state;
    const newCurrentIndex = (index - 1) * itemsPerPage;

    commit('setCurrentIndex', newCurrentIndex);
    dispatch('defineStoriesToShow', search);
  },

  fetchStories({ commit }) {
    return this.$axios
      .$get('/stories')
      .then((response) => {
        return commit('setState', {
          name: 'stories',
          value: response,
        });
      })
      .catch((error) => console.log(error));
  },

  fetchStoryWithId({ commit }, payload) {
    return this.$axios
      .$get(`/stories/${payload.id}`)
      .then((response) => {
        return commit('setState', {
          name: 'currentStory',
          value: response,
        });
      })
      .catch((error) => console.log(error));
  },
};

export const getters = {
  getStories(state) {
    return state.stories;
  },

  getStoriesToShow(state) {
    return state.storiesToShow;
  },

  getNumberOfPages(state) {
    return state.numberOfPages;
  },

  getItemsPerPage(state) {
    return state.itemsPerPage;
  },

  getTotalItems(state) {
    return state.stories.length;
  },

  getCurrentStory(state) {
    return state.currentStory;
  },

  getStoryById: (state) => (id) => {
    return state.stories.find((story) => story.id === id);
  },

  getImageUrlBySize: (state) => (item, size = 'medium') => {
    const formats = item.ImageUrl[0].formats;
    const sizes = ['large', 'medium', 'small', 'thumbnail'];

    if (formats[size]) return formats[size].url;

    const maxAvailableImgSize = sizes.find((size) => formats[size]);

    return formats[maxAvailableImgSize].url;
  },
};
