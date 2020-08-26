<template>
  <header class="header">
    <nuxt-link to="/" class="header__logo">
      {{ blockContent.title }}
    </nuxt-link>
    <main-menu :isLastButtonShown="true" />
  </header>
</template>

<script>
import mixinBlockContent from '@/mixins/mixinBlockContent';
import Menu from '@/components/Menu';
export default {
  components: {
    'main-menu': Menu,
  },
  mixins: [mixinBlockContent],
};
</script>

<style scoped>
.header {
  max-width: 1440px;
  min-height: 76px;
  margin: auto;
  display: flex;
  align-items: center;
  background: #ffffff;
  justify-content: space-between;
  font-weight: 600;
  font-size: 16px;
}

.header__logo {
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  max-width: 388px;
  color: #000000;
  letter-spacing: 0.85px;
}

@media screen and (max-width: 1280px) {
  .header__logo {
    line-height: 18px;
  }
}

@media screen and (max-width: 768px) {
  .header {
    min-height: 72px;
    border-top: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
  }
}

@media screen and (max-width: 425px) {
  .header {
    min-height: 64px;
  }

  .header__logo {
    max-width: 220px;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0;
  }
}
</style>
