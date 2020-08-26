import axios from 'axios';

export const state = () => ({
  photos: [],
});

export const mutations = {
  addPhotos(state, value) {
    return (state.photos = value);
  },
};

export const actions = {
  async GET_PHOTOS({ commit }) {
    const data = await this.$axios.$get(
      'https://www.instagram.com/raklechitsa/?__a=1'
    );
    const formatData = getPosts(data);
    commit('addPhotos', formatData);
  },
};

const getPosts = (data) => {
  return data.graphql.user.edge_owner_to_timeline_media.edges.map((post) => {
    const {
      node: { display_url, accessibility_caption, shortcode },
    } = post;
    return {
      display_url,
      accessibility_caption,
      url: `https://www.instagram.com/p/${shortcode}`,
    };
  });
};

export const getters = {
  getBlocks(state) {
    return state.blocks;
  },

  getBlockByName: (state) => (blockName) => {
    return state.blocks.find((block) => {
      block.block === blockName;
    });
  },
};
