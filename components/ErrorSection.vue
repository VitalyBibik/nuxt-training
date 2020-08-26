<template>
  <section class="not-found">
    <div class="not-found__container">
      <h1 class="not-found__title">404</h1>
      <p class="not-found__text">Страница не найдена.</p>
      <nuxt-link class="not-found__text not-found__text_type_link" to="/"
        >Перейти на главную.</nuxt-link
      >
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.not-found {
  min-height: calc(100vh - 72px);
  display: flex;
  flex-direction: column;
}

.not-found__container {
  margin: 166px auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.not-found__title {
  margin: 0;
  margin-bottom: 20px; /* PP */
  padding: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 144px;
  line-height: 174px;
  color: #000000;
}

.not-found__text {
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
}

.not-found__text_type_link {
  text-decoration: underline;
}

.not-found__text_type_link:hover {
  opacity: 0.8;
}

@media screen and (max-width: 1280px) {
  .not-found__text {
    font-size: 16px;
    line-height: 20px;
  }
}

@media screen and (max-width: 768px) {
  .not-found__container {
    margin: 325px auto 0;
  }
}

@media screen and (max-width: 320px) {
  .not-found {
    min-height: calc(100vh - 64px);
  }

  .not-found__container {
    margin: 225px auto 0;
  }

  .not-found__title {
    font-size: 72px;
    line-height: 87px;
  }

  .not-found__text {
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
