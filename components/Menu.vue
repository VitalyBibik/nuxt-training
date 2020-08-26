<template>
  <nav class="menu">
    <nuxt-link to="/" class="menu__link">Главная</nuxt-link>
    <nuxt-link to="/stories" class="menu__link">Истории</nuxt-link>
    <button class="menu__button" v-if="isLastButtonShown" @click="showPopup">
      Рассказать историю
    </button>
    <button
      :class="['menu__bar', { menu__bar_type_closed: isMobileMenuOpened }]"
      @click="toggleMobile"
    ></button>
  </nav>
</template>

<script>
export default {
  props: {
    isLastButtonShown: Boolean,
    isMenuOpend: Boolean,
  },

  computed: {
    isMobileMenuOpened() {
      return this.$store.getters['mobileMenu/getMobileMenuState'];
    },
  },

  methods: {
    showPopup(event) {
      event.preventDefault();
      this.$store.commit('popup/openPopup');
      this.$store.dispatch('quiz/showQuiz');
    },

    toggleMobile() {
      this.$store.commit('mobileMenu/toggleMobile');
    },
  },
};
</script>

<style scoped>
.menu {
  width: 410px;
  display: flex;
  justify-content: space-between;
}

.menu__link {
  color: #000000;
  font-size: 18px;
  font-weight: normal;
  text-decoration: none;
}

.menu__button {
  color: #000000;
  font-size: 18px;
  font-weight: normal;
  text-decoration: none;
  padding: 0;
  border: none;
  outline: none;
  background: none;
}

.menu__link.nuxt-link-exact-active {
  border-bottom: solid 2px black;
}

.menu__bar {
  width: 32px;
  height: 32px;
  margin: 0;
  padding: 0;
  border: none;
  display: none;
  cursor: pointer;
  background-color: transparent;
  background-size: cover;
  background-position: center;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='612' height='612'%3E%3Cpath d='M604.267 194.727c4.257 0 7.733-3.644 7.733-7.733v-40.169c0-4.256-3.283-7.733-7.733-7.733H7.733c-4.256 0-7.733 3.644-7.733 7.733v40.169c0 4.256 3.283 7.733 7.733 7.733h596.534zM0 326.084c0 4.256 3.283 7.733 7.733 7.733h596.533c4.256 0 7.733-3.645 7.733-7.733v-40.169c0-4.284-3.283-7.733-7.733-7.733H7.733c-4.256 0-7.733 3.645-7.733 7.733v40.169zM0 465.175c0 4.256 3.283 7.733 7.733 7.733h596.533c4.256 0 7.733-3.645 7.733-7.733v-40.169c0-4.256-3.283-7.732-7.733-7.732H7.733c-4.256 0-7.733 3.644-7.733 7.732v40.169z'/%3E%3C/svg%3E");
}

.menu__bar_type_closed {
  background-image: url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='1.93934' y1='24.5668' x2='24.5668' y2='1.93936' stroke='black' stroke-width='3'/%3E%3Cline x1='24.5682' y1='24.6881' x2='1.94083' y2='2.06068' stroke='black' stroke-width='3'/%3E%3C/svg%3E%0A");
}

@media screen and (max-width: 1280px) {
  .menu {
    width: 374px;
  }

  .menu__link {
    font-size: 16px;
  }
}

@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 768px) {
  .menu {
    width: auto;
    justify-content: flex-end;
  }

  .menu__link {
    display: none;
  }

  .menu__button {
    display: none;
  }

  .menu__bar {
    display: inline-block;
  }
}

@media screen and (max-width: 320px) {
  .menu__bar {
    width: 26px;
    height: 26px;
  }
}
</style>
