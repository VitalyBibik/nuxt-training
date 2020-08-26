<template>
  <p class="section-description">
    <slot>Text</slot>
  </p>
</template>

<script>
export default {};
</script>

<style scoped>
.section-description {
  max-width: 343px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
}

@media screen and (max-width: 1280px) {
  .section-description {
    font-size: 16px;
    line-height: 20px;

    max-width: 305px;
    font-size: 16px;
    line-height: 20px;
  }
}

@media screen and (max-width: 1024px) {
  .section-description {
    max-width: 260px;
    font-size: 13px;
    line-height: 16px;
  }
}

@media screen and (max-width: 768px) {
  .section-description {
    max-width: 390px;
  }
}
</style>
