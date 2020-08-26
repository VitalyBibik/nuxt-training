<template>
  <div :class="['mobile-menu', { 'mobile-menu_opened': isMobileMenuOpened }]">
    <nuxt-link to="/" class="mobile-menu_link">Главная</nuxt-link>
    <nuxt-link to="/stories" class="mobile-menu_link">Истории</nuxt-link>
    <a class="mobile-menu_link" @click.prevent="showPopup"
      >Рассказать историю</a
    >
  </div>
</template>

<script>
export default {
  methods: {
    showPopup(event) {
      event.preventDefault();
      this.$store.commit('popup/openPopup');
      this.$store.dispatch('quiz/showQuiz');
    },
  },

  computed: {
    isMobileMenuOpened() {
      return this.$store.getters['mobileMenu/getMobileMenuState'];
    },
  },
};
</script>

<style scoped>
.mobile-menu {
  visibility: hidden;
  height: 0;
  padding: 0;
  opacity: 0;
  transition: 0.2s;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.mobile-menu_opened {
  visibility: visible;
  padding-top: 18px;
  padding-bottom: 18px;
  height: 120px;
  opacity: 1;
}

.mobile-menu_link {
  color: #000000;
  font-size: 18px;
  font-weight: normal;
  text-decoration: none;
  font-size: 13px;
  line-height: 16px;
  color: #000000;
  cursor: pointer;
}

.mobile-menu_link.nuxt-link-exact-active {
  border-bottom: solid 1px black;
}
</style>
