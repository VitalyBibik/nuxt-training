<template>
  <div class="popup">
    <div
      :class="['popup-content', isShowSocialMedia ? 'popup-content_share' : '']"
    >
      <close-button
        class="popup__close-button"
        v-if="!isShowThanksSlide"
        @click="closePopup"
      ></close-button>
      <quiz v-if="isShowQuiz"></quiz>
      <social-media v-if="isShowSocialMedia"></social-media>
      <thanks-slide v-if="isShowThanksSlide"></thanks-slide>
      <contact-me v-if="isShowContactMe"></contact-me>
    </div>
  </div>
</template>

<script>
import Quiz from '@/components/Quiz';
import CloseButton from '@/components/ui/CloseButton';
import SocialMedia from '@/components/SocialMedia';
import ThanksSlide from '@/components/ThanksSlide';
import ContactMe from '@/components/ContactMe';

export default {
  components: {
    'close-button': CloseButton,
    quiz: Quiz,
    'social-media': SocialMedia,
    'thanks-slide': ThanksSlide,
    'contact-me': ContactMe,
  },
  props: {},
  methods: {
    closePopup() {
      this.$store.commit('popup/closePopup');
      this.$store.dispatch('SocialMedia/hideSocialMedia');
      this.$store.dispatch('quiz/hideQuiz');
      this.$store.dispatch('quiz/resetNumberCurrentQuestion');
      this.$store.dispatch('contactMe/hideContactMe');
      this.$store.dispatch('quiz/resetAnswers');
    },
  },
  computed: {
    isShowQuiz() {
      return this.$store.getters['quiz/getStateShown'];
    },
    isShowSocialMedia() {
      return this.$store.getters['SocialMedia/getStateShown'];
    },
    isShowThanksSlide() {
      return this.$store.getters['thanksSlide/getStateShown'];
    },
    isShowContactMe() {
      return this.$store.getters['contactMe/getStateShown'];
    },
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 63.888888889%;
  max-width: 920px;
  height: 600px;
  background-color: #ffffff;
  position: relative;
  padding: 40px;
}

.popup-content_share {
  height: 324px;
}

.popup__close-button {
  position: absolute;
  top: 35px;
  right: 35px;
  z-index: 2;
}

@media screen and (max-width: 1280px) {
  .popup-content {
    height: 520px;
  }

  .popup__close-button {
    top: 31px;
    right: 31px;
  }
}

@media screen and (max-width: 1024px) {
  .popup-content {
    width: 78.125%;
  }
}

@media screen and (max-width: 768px) {
  .popup-content {
    width: 80.555555556%;
    padding: 4.68%;
  }
  .popup__close-button {
    top: 13px;
    right: 13px;
  }
}

@media screen and (max-width: 425px) {
  .popup-content {
    width: 90.625%;
    min-width: 290px;
  }
}

@media screen and (max-width: 320px) {
  .popup-content {
    padding: 15px;
  }
}
</style>
