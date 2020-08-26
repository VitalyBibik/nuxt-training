<template>
  <div class="social-media">
    <h2 class="social-media__title">Поделитесь</h2>
    <ul class="social-media__items">
      <li
        v-for="link in getSocialMediaLinks"
        :key="link.id"
        class="social-media__item"
      >
        <a :href="link.url" target="_blank" class="social-media__link">
          <img
            :src="
              require(`@/static/images/icon_${link.name.toLowerCase()}.svg`)
            "
            :alt="`${link.name} logo`"
            class="social-media__image"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import CloseButton from '@/components/ui/CloseButton';

export default {
  components: {
    'close-button': CloseButton,
  },
  computed: {
    getSocialMediaLinks() {
      return this.$store.getters['SocialMedia/getSocialMediaLinks'];
    },
  },
  methods: {},
};
</script>

<style scoped>
.social-media {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.social-media__title {
  margin: 0 auto;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
}

.social-media__items {
  padding: 0;
  margin: 100px auto 0;
  display: flex;
  max-width: 388px;
  width: 100%;
  justify-content: space-between;
}

.social-media__item {
  padding: 0;
  margin: 0;
  list-style: none;
  width: 48px;
  height: 48px;
}

.social-media__link {
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.social-media__image {
  width: 100%;
  height: 100%;
}

/*.quiz {*/
/*position: relative;*/
/*height: 100%;*/
/*width: 100%;*/
/*}*/
/*.quiz__question {*/
/*position: absolute;*/
/*top: 76px;*/
/*font-style: normal;*/
/*font-weight: 500;*/
/*font-size: 18px;*/
/*line-height: 24px;*/
/*color: #000000;*/
/*}*/

/*.quiz__explanation-question {*/
/*color: #666666;*/
/*}*/
/*.quiz__form {*/
/*position: absolute;*/
/*top: 234px;*/
/*width: 100%;*/
/*display: flex;*/
/*flex-direction: column;*/
/*justify-content: space-between;*/
/*}*/

/*.quiz__answer {*/
/*width: 100%;*/
/*font-style: normal;*/
/*font-weight: normal;*/
/*font-size: 18px;*/
/*line-height: 24px;*/
/*color: #000000;*/
/*border: none;*/
/*padding-bottom: 5px;*/
/*border-bottom: 1px solid #e7e7e7;*/
/*outline: none;*/
/*}*/
/*.quiz__answer::placeholder {*/
/*color: #666666;*/
/*}*/
/*.quiz__button-container {*/
/*margin-top: 200px;*/
/*display: flex;*/
/*}*/
/*.quiz__middle-button {*/
/*margin-left: 30px;*/
/*}*/

/*.quiz__personal-data-processing {*/
/*margin-left: 30px;*/
/*width: 380px;*/
/*font-style: normal;*/
/*font-weight: normal;*/
/*font-size: 14px;*/
/*line-height: 17px;*/
/*color: #666666;*/
/*}*/

/*.quiz__personal-data-processing-url {*/
/*text-decoration: underline;*/
/*color: inherit;*/
/*}*/
</style>
