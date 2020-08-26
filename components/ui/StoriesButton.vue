<template>
  <nuxt-link class="stories-button" to="/stories">
    <slot>Button name</slot>
  </nuxt-link>
</template>

<script>
export default {};
</script>

<style scoped>
.stories-button {
  width: 100%;
  min-height: 82px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  color: #000000;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  background-color: #fbfbfb;
}

@media screen and (max-width: 1280px) {
  .stories-button {
    min-height: 78px;
  }
}

@media screen and (max-width: 1024px) {
  .stories-button {
    min-height: 50px;
  }
}

@media screen and (max-width: 768px) {
  .stories-button {
    font-size: 13px;
    line-height: 20px;
  }
}

@media screen and (max-width: 320px) {
}
</style>
