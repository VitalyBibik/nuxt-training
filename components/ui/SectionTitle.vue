<template>
  <h2 class="section-title">
    <slot>Text</slot>
  </h2>
</template>

<script>
export default {};
</script>

<style scoped>
.section-title {
  max-width: 373px;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
}

@media screen and (max-width: 1280px) {
  .section-title {
    max-width: 335px;
    font-size: 28px;
    line-height: 32px;
  }
}

@media screen and (max-width: 1024px) {
  .section-title {
    max-width: 288px;
    font-size: 24px;
    line-height: 28px;
  }
}

@media screen and (max-width: 768px) {
  .section-title {
    max-width: 380px;
    font-size: 24px;
    text-align: center;
  }
}

@media screen and (max-width: 320px) {
  .section-title {
    max-width: 290px;
    font-size: 18px;
    line-height: 21px;
    text-align: left;
  }
}
</style>
