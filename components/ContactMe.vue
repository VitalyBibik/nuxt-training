<template>
  <div class="contact-me">
    <h2 class="contact-me__title">!!!Нужна верстка!!!</h2>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    closePopup() {
      this.$store.commit('popup/closePopup');
      this.$store.dispatch('contactMe/hideContactMe');
    },
  },
};
</script>

<style scoped>
.contact-me {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.contact-me__title {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}

@media screen and (max-width: 1280px) {
}

@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 768px) {
}
</style>
