<template>
  <section class="all-stories" ref="allStories">
    <section-title class="all-stories__section-title">
      Истории неизлечимых привычек
    </section-title>

    <form class="all-stories__form" @submit.prevent="handleSubmit">
      <search-input
        class="all-stories__search"
        @input="handleInput"
        :placeholder="placeholder"
      />
      <middle-button
        class="all-stories__middle-button"
        text="Поиск"
        :type="'submit'"
        @click="handleSubmit"
      >
      </middle-button>
      <button class="all-stories__small-button"></button>
    </form>

    <div class="all-stories__container">
      <stories-card
        class="all-stories__stories-card"
        v-for="item in showStories"
        :key="item.id"
        :story="item"
        :url="`${apiURL}${getImageUrlBySize(item, 'small')}`"
        @click="goToDetail(item.id)"
      >
      </stories-card>
    </div>

    <pagination
      class="all-stories__pagination"
      :numberOfPages="getNumberOfPages()"
      @onPageChanged="changeCurrentIndex"
    />
  </section>
</template>

<script>
import StoriesCard from '@/components/ui/StoriesCard';
import SectionTitle from '@/components/ui/SectionTitle';
import MiddleButton from '@/components/ui/MiddleButton';
import Pagination from '@/components/ui/Pagination';
import SearchInput from '@/components/ui/SearchInput';

export default {
  components: {
    'stories-card': StoriesCard,
    'section-title': SectionTitle,
    'middle-button': MiddleButton,
    pagination: Pagination,
    'search-input': SearchInput,
  },

  data() {
    return {
      apiURL: process.env.apiURL,
      search: '',
      placeholder: '',
      pages: 5,
    };
  },

  beforeMount() {
    this.$store.dispatch('allStories/defineStoriesToShow');
    this.changeCurrentIndex(1);
    this.pages = this.getNumberOfPages();
  },

  methods: {
    goToDetail(id) {
      this.$router.push(`/stories/${id}`);
    },

    changeCurrentIndex(index) {
      const search = this.search.toLowerCase();
      this.$store.dispatch('allStories/changeCurrentIndex', { index, search });
    },

    getImageUrlBySize(item, size) {
      return this.$store.getters['allStories/getImageUrlBySize'](item, size);
    },

    handleInput(value) {
      this.search = value;
    },

    handleSubmit() {
      const search = this.search.toLowerCase();
      this.$store.dispatch('allStories/defineStoriesToShow', search);
      this.pages = this.getNumberOfPages();
      this.changeCurrentIndex(1);
    },

    getNumberOfPages() {
      return this.$store.getters['allStories/getNumberOfPages'];
    },
  },

  computed: {
    showStories() {
      return this.$store.getters['allStories/getStoriesToShow'];
    },

    // getNumberOfPages() {
    //   return this.$store.getters['allStories/getNumberOfPages'];
    // },
  },
};
</script>

<style scoped>
.all-stories {
  width: 100%;
}

.all-stories__container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* grid-template-rows: repeat(4, auto); */
  grid-column-gap: 3.0303%;
  grid-row-gap: 70px;
  margin-bottom: 140px;
}

.all-stories__section-title {
  margin-bottom: 60px;
}

.all-stories__form {
  width: 100%;
  display: flex;
  margin-bottom: 70px;
  justify-content: space-between;
}

.all-stories__small-button {
  display: none;
  width: 46px;
  height: 46px;
  border: none;
  cursor: pointer;
  color: #ffffff;
  background-size: 16px 16px;
  background-position: center;
  background-color: #613a93;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml,%3Csvg width='300' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='a'%3E%3Cstop stop-color='%23fff' offset='0'/%3E%3Cstop stop-color='%23d2d5d8' offset='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='%23fff' d='M37.939 39.086C-5.334 82.358-5.44 153.245 37.833 196.518c36.663 36.663 93.202 42.25 135.921 16.766l76.344 74.235c10.507 10.198 27.085 9.821 37.117-.844 10.033-10.665 9.77-27.446-.738-37.644l-75.183-72.864c26.361-42.847 21.008-100.045-16.028-137.081-43.273-43.273-114.055-43.273-157.327 0zm31.739 31.739c26.102-26.102 67.746-26.102 93.848 0 26.102 26.102 26.102 67.746 0 93.848-26.102 26.102-67.746 26.102-93.848 0-26.102-26.102-26.102-67.746 0-93.848z'/%3E%3C/svg%3E");
}

.all-stories__pagination {
  margin: 0 auto;
}

.all-stories__controls {
  display: flex;
  justify-content: center;
}

.all-stories__control {
  width: 58px;
  height: 58px;
  padding: 0;
  border: none;
  font-size: 18px;
  font-weight: 500;
  color: #181818;
  cursor: pointer;
  background-color: #fbfbfb;
}

@media screen and (max-width: 1280px) {
  .all-stories__container {
    grid-row-gap: 60px;
    margin-bottom: 130px;
  }

  .all-stories__section-title {
    margin-bottom: 50px;
  }

  .all-stories__form {
    margin-bottom: 60px;
  }

  .all-stories__control {
    width: 56px;
    height: 56px;
  }
}

@media screen and (max-width: 1024px) {
  .all-stories__container {
    grid-row-gap: 46px;
    margin-bottom: 110px;
  }

  .all-stories__section-title {
    margin-bottom: 40px;
  }

  .all-stories__form {
    margin-bottom: 40px;
  }

  .all-stories__control {
    width: 50px;
    height: 50px;
  }
}

@media screen and (max-width: 768px) {
  .all-stories__container {
    grid-template-columns: repeat(3, 1fr);
    /* grid-template-rows: repeat(4, auto); */
    grid-row-gap: 40px;
    margin-bottom: 146px;
  }

  .all-stories__section-title {
    margin: auto;
    margin-bottom: 50px;
  }

  .all-stories__form {
    margin-bottom: 60px;
  }
}

@media screen and (max-width: 600px) {
  .all-stories__form .all-stories__middle-button {
    display: none;
  }

  .all-stories__small-button {
    display: inline-block;
  }
}

@media screen and (max-width: 425px) {
  .all-stories__container {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 40px;
    margin-bottom: 146px;
  }
}

@media screen and (max-width: 320px) {
  .all-stories__container {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 30px;
    margin-bottom: 50px;
  }

  .all-stories__section-title {
    margin-bottom: 40px;
  }

  .all-stories__form {
    margin-bottom: 30px;
  }

  .all-stories__control_display_none {
    display: none;
  }
}
</style>
