<template>
  <button class="close-button" @click="click">
    <img
      class="close-button__image"
      src="@/assets/icon-close-button.svg"
      alt="close"
    />
  </button>
</template>

<script>
export default {
  methods: {
    click(event) {
      event.preventDefault();
      this.$emit('click');
    },
  },
};
</script>

<style scoped>
.close-button {
  padding: 0;
  border: none;
  background: unset;
  outline: none;
  cursor: pointer;
  object-fit: contain;
}
.close-button__image {
  height: 28px;
  width: 28px;
}

@media screen and (max-width: 1280px) {
  .close-button__image {
    height: 24px;
    width: 24px;
  }
}
</style>
