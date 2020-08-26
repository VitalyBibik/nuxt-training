<template>
  <main class="content">
    <container>
      <section class="story">
        <div class="story__person">
          <div class="story__copyright story__copyright_mobile">
            <button
              type="button"
              class="story__share"
              @click.prevent="showPopup"
            >
              Поделитесь ↗
            </button>
            <time class="story__date">20 апреля 2018</time>
          </div>

          <div class="story__photo-container">
            <img
              class="story__photo"
              :src="`${apiURL}${getImageUrlBySize(story, 'large')}`"
              :alt="`Фото ${story.author}`"
            />
          </div>

          <div class="story__box">
            <h1 class="story__title">
              <span class="story__person-name">{{ story.author }}:</span>
              «{{ story.title }}»
            </h1>

            <div class="story__copyright story__copyright_desctop">
              <button
                type="button"
                class="story__share"
                @click.prevent="showPopup"
              >
                Поделитесь ↗
              </button>
              <time class="story__date">{{ getLocalizedDate }}</time>
            </div>
          </div>
        </div>

        <article
          class="story__article"
          v-html="getStoryTextWithClasses"
        ></article>

        <button
          type="button"
          class="story__share story__share_long"
          @click.prevent="showPopup"
        >
          Поделитесь этой статьей в своих социальных&nbsp;сетях ↗
        </button>

        <div class="story__container">
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

        <stories-button class="story__stories-button">
          Больше статей
        </stories-button>
      </section>
    </container>
  </main>
</template>

<script>
import Container from '@/components/Container';
import StoriesCard from '@/components/ui/StoriesCard';
import StoriesButton from '@/components/ui/StoriesButton.vue';

export default {
  data() {
    return {
      storiesToShow: 0,
      apiURL: process.env.apiURL,
    };
  },

  components: {
    container: Container,
    'stories-card': StoriesCard,
    'stories-button': StoriesButton,
  },

  async fetch({ store, route }) {
    await store.dispatch('allStories/fetchStoryWithId', {
      id: route.params.id,
    });
  },

  methods: {
    goToDetail(id) {
      this.$router.push(`/stories/${id}`);
    },

    getImageUrlBySize(item, size) {
      return this.$store.getters['allStories/getImageUrlBySize'](item, size);
    },

    showPopup() {
      this.$store.commit('popup/openPopup');
      this.$store.dispatch('SocialMedia/showSocialMedia');
    },
  },

  computed: {
    defineStoriesToShow() {
      if (process.browser) {
        if (window.innerWidth <= 570) return 2;
        if (window.innerWidth <= 768) return 3;
      }

      return 4;
    },

    showStories() {
      return this.$store.getters['allStories/getStories'].slice(
        0,
        this.defineStoriesToShow
      );
    },

    story() {
      return this.$store.getters['allStories/getCurrentStory'];
    },

    getLocalizedDate() {
      const date = new Date(this.story.date);
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      const localizedDate = date
        .toLocaleString('ru', options)
        .replace(/\s*г\./, '');

      return localizedDate;
    },

    getStoryTextWithClasses() {
      let storyText = this.story.text;
      const regexDoubleBr = /(<br>){2,}/g;
      const regexBQ = /<blockquote><p>/g;
      const regexP = /<p>/g;
      storyText = storyText.replace(regexDoubleBr, '</p><p>');
      storyText = storyText.replace(
        regexBQ,
        '<blockquote><p class="story__text story__text_style_bold">'
      );
      storyText = storyText.replace(regexP, '<p class="story__text">');

      return storyText;
    },
  },
};
</script>

<style scoped>
.content {
  padding: 100px 0;
}

.story {
  width: 100%;
}

.story__person {
  width: 100%;
  display: flex;
  margin-bottom: 130px;
  justify-content: space-between;
}

.story__photo-container {
  position: relative;
  width: 43.939393939%;
}

.story__photo-container::before {
  content: '';
  display: block;
  width: 100%;
  padding-bottom: 100%;
}

.story__photo {
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.story__box {
  width: 51.51515168%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  padding: 30px 0;
}

.story__title {
  width: 100%;
  font-weight: 500;
  font-size: 38px;
  line-height: 48px;
  letter-spacing: -0.5px;
}

.story__person-name {
  font-weight: bold;
}

.story__copyright {
  width: 100%;
  display: flex;
  color: #121212;
  justify-content: space-between;
}

.story__copyright_mobile {
  display: none;
}

.story__share {
  padding: 0;
  font-size: 18px;
  border: none;
  cursor: pointer;
  background-color: transparent;
}

.story__share_long {
  width: 100%;
  text-align: center;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  margin: 70px 0 60px;
  padding: 30px 0;
}

.story__date {
  font-size: 18px;
}

.story__article {
  max-width: 780px;
  margin: auto;
}

.story__article >>> .story__text {
  font-size: 22px;
  line-height: 30px;
  margin-bottom: 40px;
}

/* .story__article >>> .story__text:last-of-type {
  margin-bottom: 100px;
} */

.story__article >>> .story__text_style_bold {
  font-weight: 600;
}

.story__container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-column-gap: 3.0303%;
  margin-bottom: 70px;
}

@media screen and (max-width: 1280px) {
  .content {
    padding: 100px 0 90px 0;
  }

  .story__container {
    margin-bottom: 60px;
  }

  .story__person {
    margin-bottom: 120px;
  }

  .story__article {
    max-width: 720px;
  }

  .story__title {
    font-size: 34px;
    line-height: 44px;
  }

  .story__article >>> .story__text {
    font-size: 20px;
    line-height: 28px;
  }

  /* .story__article >>> .story__text:last-of-type {
    margin-bottom: 90px;
  } */

  .story__share_long {
    margin: 60px 0 150px;
  }
}

@media screen and (max-width: 1024px) {
  .content {
    padding: 100px 0 80px 0;
  }

  .story__container {
    margin-bottom: 46px;
  }

  .story__article {
    max-width: 640px;
  }

  .story__box {
    padding: 20px 0;
  }

  .story__title {
    font-size: 30px;
    line-height: 38px;
  }

  .story__article >>> .story__text {
    font-size: 18px;
    line-height: 27px;
  }

  .story__share_long {
    margin: 46px 0 120px;
    padding: 24px 0;
  }

  .story__share {
    font-size: 16px;
  }

  .story__date {
    font-size: 16px;
  }

  /* .story__article >>> .story__text:last-of-type {
    margin-bottom: 70px;
  } */
}

@media screen and (max-width: 768px) {
  .story__container {
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 60px;
  }

  .story__person {
    align-items: center;
    margin-bottom: 120px;
    flex-direction: column-reverse;
  }

  .story__box {
    width: 100%;
  }

  .story__title {
    margin: auto;
    margin-bottom: 40px;
    text-align: center;
  }

  .story__photo-container {
    width: 61.046511628%;
  }

  .story__share_long {
    margin: 80px 0 120px;
    padding: 24px 0;
  }

  .story__copyright_desctop {
    display: none;
  }

  .story__copyright_mobile {
    margin-top: 30px;
    max-width: 640px;
    display: flex;
    margin-bottom: 0;
  }
}

@media screen and (max-width: 570px) {
  .story__photo-container {
    width: 100%;
  }

  .story__article {
    margin-bottom: 60px;
  }

  .story__title {
    font-size: 25px;
    line-height: 28px;
    margin-bottom: 28px;
  }

  .story__share {
    font-size: 13px;
    line-height: 16px;
  }

  .story__date {
    font-size: 13px;
    line-height: 16px;
  }

  .story__article >>> .story__text {
    font-size: 13px;
    line-height: 16px;
    margin-bottom: 15px;
  }

  /* .story__article >>> .story__text:last-of-type {
    margin-bottom: 60px;
  } */

  .story__person {
    margin-bottom: 60px;
  }

  .story__container {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 30px;
    margin-bottom: 40px;
  }
}

@media screen and (max-width: 320px) {
  .content {
    padding: 70px 0 50px 0;
  }

  .story__title {
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 30px;
  }

  .story__share_long {
    margin: 40px 0 100px;
    padding: 20px 0;
  }
}
</style>
