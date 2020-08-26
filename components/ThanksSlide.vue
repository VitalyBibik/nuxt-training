<template>
  <div class="thanks-slide">
    <h2 class="thanks-slide__title">Спасибо что приняли участие!</h2>
    <form class="thanks-slide__form">
      <middle-button @click="closePopup" text="Закрыть"></middle-button>
    </form>
  </div>
</template>

<script>
import MiddleButton from '@/components/ui/MiddleButton';

export default {
  components: {
    'middle-button': MiddleButton,
  },
  methods: {
    closePopup() {
      this.$store.commit('popup/closePopup');
      this.$store.dispatch('thanksSlide/hideThanksSlide');
    },
  },
};
</script>

<style scoped>
.thanks-slide {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.thanks-slide__title {
  text-align: center;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}
@media screen and (max-width: 1440px) {
  .thanks-slide__title {
    font-size: 28px;
    line-height: 32px;
  }
}

@media screen and (max-width: 1280px) {
  .thanks-slide__title {
    font-size: 26px;
    line-height: 30px;
  }
}

@media screen and (max-width: 768px) {
  .thanks-slide__title {
    font-size: 18px;
    line-height: 21px;
  }
}
</style>
