export const state = () => ({
  statistics: [],
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  fetchStatistics({ commit }) {
    return this.$axios
      .$get('/statistics')
      .then((response) => {
        return commit('setState', {
          name: 'statistics',
          value: response,
        });
      })
      .catch((error) => console.log(error));
  },
};

export const getters = {
  getStatistics(state) {
    return state.statistics;
  },
};
