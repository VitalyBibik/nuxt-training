<template>
  <p class="section-text">
    <slot>Text</slot>
  </p>
</template>

<script>
export default {};
</script>

<style scoped>
.section-text {
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  line-height: 22px;

  color: #666666;
}

@media screen and (max-width: 1024px) {
  .section-text {
    font-size: 15px;
    line-height: 19px;
  }
}
</style>
