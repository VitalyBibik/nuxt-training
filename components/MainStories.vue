<template>
  <section class="main-stories">
    <section-title class="main-stories__section-title">
      {{ blockContent.title }}
    </section-title>
    <div class="main-stories__container">
      <stories-card
        v-for="item in showStories"
        :person="item"
        :key="item.id"
        :story="item"
        :url="`${apiURL}${getImageUrlBySize(item, 'small')}`"
        @click="goToDetail(item.id)"
      >
      </stories-card>
    </div>
    <stories-button class="main-stories__stories-button">
      Больше статей
    </stories-button>
  </section>
</template>

<script>
import mixinBlockContent from '@/mixins/mixinBlockContent';
import StoriesCard from '@/components/ui/StoriesCard';
import SectionTitle from '@/components/ui/SectionTitle';
import StoriesButton from '@/components/ui/StoriesButton.vue';

export default {
  components: {
    'stories-card': StoriesCard,
    'section-title': SectionTitle,
    'stories-button': StoriesButton,
  },

  mixins: [mixinBlockContent],

  data() {
    return {
      apiURL: process.env.apiURL,
    };
  },

  computed: {
    defineStoriesToShow() {
      if (process.browser) {
        if (window.innerWidth <= 570) return 6;
        if (window.innerWidth <= 768) return 9;
      }

      return 8;
    },

    showStories() {
      return this.$store.getters['allStories/getStories'].slice(
        0,
        this.defineStoriesToShow
      );
    },
  },

  methods: {
    goToDetail(id) {
      this.$router.push(`/stories/${id}`);
    },

    getImageUrlBySize(item, size) {
      return this.$store.getters['allStories/getImageUrlBySize'](item, size);
    },
  },
};
</script>

<style scoped>
.main-stories {
  width: 100%;
}

.main-stories__container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto;
  grid-column-gap: 3.0303%;
  grid-row-gap: 70px;
  margin-bottom: 70px;
}

.main-stories__section-title {
  margin-bottom: 70px;
}

@media screen and (max-width: 1280px) {
  .main-stories__container {
    grid-row-gap: 60px;
    margin-bottom: 60px;
  }

  .main-stories__section-title {
    margin-bottom: 60px;
  }
}

@media screen and (max-width: 1024px) {
  .main-stories__container {
    grid-row-gap: 46px;
    margin-bottom: 46px;
  }

  .main-stories__section-title {
    margin-bottom: 46px;
  }
}

@media screen and (max-width: 768px) {
  .main-stories__container {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto auto;
    grid-row-gap: 40px;
    margin-bottom: 60px;
  }

  .main-stories__section-title {
    margin: auto;
    margin-bottom: 60px;
  }
}

@media screen and (max-width: 425px) {
  .main-stories__container {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 30px;
    margin-bottom: 60px;
  }
}

@media screen and (max-width: 320px) {
  .main-stories__container {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 30px;
    margin-bottom: 60px;
  }

  .main-stories__section-title {
    margin-bottom: 40px;
  }

  .main-stories__stories-button {
    font-size: 13px;
  }
}
</style>
