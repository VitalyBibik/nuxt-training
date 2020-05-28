import axios from 'axios';

export const state = () => ({
  blocks: [],
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  fetchBlocks({ commit }) {
    return this.$axios
      .$get('blocks')
      .then((response) => {
        console.log(response);
        return commit('setState', {
          name: 'blocks',
          value: response,
        });
      })
      .catch((error) => console.log(error));
  },
};

export const getters = {
  getBlocks(state) {
    return state.blocks;
  },
};
