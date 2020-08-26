<template>
  <div class="layout">
    <container>
      <mobile-menu></mobile-menu>
      <main-header :blockContent="getBlockByName('header')" />
    </container>
    <nuxt />
    <popup v-if="isShowPopup"> </popup>
    <main-footer :blockContent="getBlockByName('footer')" />
  </div>
</template>

<script>
import MobileMenu from '@/components/MobileMenu';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Popup from '@/components/Popup';
import Container from '@/components/Container';

export default {
  components: {
    'mobile-menu': MobileMenu,
    'main-header': Header,
    'main-footer': Footer,
    popup: Popup,
    container: Container,
  },

  computed: {
    isShowPopup() {
      return this.$store.getters['popup/getPopupShown'];
    },
  },

  methods: {
    getBlockByName(blockName) {
      const blocks = this.$store.getters['default/getBlocks'];
      return blocks.find((block) => block.block === blockName);
    },
  },

  async fetch() {
    await this.$store.dispatch('default/fetchBlocks');
    await this.$store.dispatch('allStories/fetchStories');
    await this.$store.dispatch('statistics/fetchStatistics');
    //this.$store.dispatch('allStories/countNumberOfItems'); // вот это на самом деле, наверное, и не нужно
  },
};
</script>

<style>
html {
  font-family: 'Inter', monospace;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.layout {
  position: relative;
}
</style>
