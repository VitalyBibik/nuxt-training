<template>
  <button class="return-button" @click="handleClick" type="button">
    <slot>text</slot>
  </button>
</template>

<script>
export default {
  name: '',
  props: '',
  methods: {
    handleClick(event) {
      event.preventDefault();
      this.$emit('click');
    },
  },
};
</script>

<style scoped>
.return-button {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #666666;
  border: none;
  background-color: unset;
  outline: none;
  cursor: pointer;
  padding: 0;
}
</style>
