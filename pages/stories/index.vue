<template>
  <main class="content">
    <container>
      <all-stories class="content__all-stories"> </all-stories>
    </container>
  </main>
</template>

<script>
import Container from '@/components/Container';
import AllStories from '@/components/AllStories';

export default {
  components: {
    container: Container,
    'all-stories': AllStories,
  },
};
</script>

<style scoped>
.content {
  padding: 100px 0;
}

@media screen and (max-width: 1280px) {
  .content {
    padding: 90px 0;
  }
}

@media screen and (max-width: 1024px) {
  .content {
    padding: 80px 0;
  }
}

@media screen and (max-width: 320px) {
  .content {
    padding: 50px 0;
  }
}
</style>
