<template>
  <button class="middle-button" @click="handleClick" :type="type">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'middle-button',
  props: {
    text: String,
    type: {
      default: 'button',
      type: String,
    },
  },
  methods: {
    handleClick(event) {
      event.preventDefault();
      this.$emit('click');
    },
  },
};
</script>

<style scoped>
.middle-button {
  width: 226px;
  height: 52px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  background-color: #613a93;
}

.middle-button:hover {
  opacity: 0.9;
}

@media screen and (max-width: 1280px) {
  .middle-button {
    width: 200px;
    height: 48px;
  }
}

@media screen and (max-width: 1024px) {
  .middle-button {
    height: 46px;
    font-size: 15px;
    line-height: 18px;
  }
}

@media screen and (max-width: 320px) {
  .middle-button {
    width: 206px;
    height: 40px;
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
