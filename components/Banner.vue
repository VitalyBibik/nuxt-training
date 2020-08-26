<template>
  <section class="banner">
    <h2 class="banner__title">
      {{ blockContent.title }}
      <span class="banner__hashtag">{{ blockContent.hashtag }}</span>
    </h2>
  </section>
</template>

<script>
import mixinBlockContent from '@/mixins/mixinBlockContent';
export default {
  mixins: [mixinBlockContent],
};
</script>

<style scoped>
.banner {
  max-width: 1440px;
  min-height: 86px;
  margin: auto;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #613a93;
}

.banner__title {
  max-width: 750px;
  color: #ffffff;
  font-size: 30px;
  line-height: 46px;
  font-weight: normal;
  text-align: center;
  text-transform: uppercase;
}

.banner__hashtag {
  margin: 0;
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
}

.banner__hashtag_type_new-line {
  display: block;
}

@media screen and (max-width: 1280px) {
  .banner {
    padding: 0 50px;
  }

  .banner__title {
    font-size: 28px;
    line-height: 46px;
  }

  .banner__hashtag {
    font-size: 38px;
  }
}

@media screen and (max-width: 1024px) {
  .banner {
    min-height: 80px;
  }

  .banner__title {
    font-size: 24px;
    line-height: 40px;
  }

  .banner__hashtag {
    font-size: 34px;
  }
}

@media screen and (max-width: 768px) {
  .banner {
    padding: 0 40px;
  }

  .banner__title {
    font-size: 22px;
    line-height: 36px;
  }

  .banner__hashtag {
    font-size: 32px;
  }
}

@media screen and (max-width: 460px) {
  .banner__title {
    font-size: 16px;
    line-height: 18px;
  }

  .banner__hashtag {
    font-size: 22px;
  }
}
</style>
