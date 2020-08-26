<template>
  <section class="instagram">
    <div class="instagram__container">
      <div class="instagram__side">
        <section-title class="instagram__section-title">{{
          blockContent.title
        }}</section-title>

        <section-description class="instagram__section-description">
          {{ blockContent.text.replace(/(<\/?p>)/g, '') }}
        </section-description>
      </div>
      <!-- 
      <ul class="instagram__items">
        <li class="instagram__item">
          <a
            href="https://www.instagram.com/raklechitsa/"
            class="instagram__link"
            target="_blank"
          ></a>
        </li>
        <li class="instagram__item">
          <a
            href="https://www.instagram.com/raklechitsa/"
            class="instagram__link"
            target="_blank"
          ></a>
        </li>
        <li class="instagram__item">
          <a
            href="https://www.instagram.com/raklechitsa/"
            class="instagram__link"
            target="_blank"
          ></a>
        </li>
        <li class="instagram__item">
          <a
            href="https://www.instagram.com/raklechitsa/"
            class="instagram__link"
            target="_blank"
          ></a>
        </li>
        <li class="instagram__item">
          <a
            href="https://www.instagram.com/raklechitsa/"
            class="instagram__link"
            target="_blank"
          ></a>
        </li>
        <li class="instagram__item">
          <a
            href="https://www.instagram.com/raklechitsa/"
            class="instagram__link"
            target="_blank"
          ></a>
        </li>
        <li class="instagram__item">
          <a
            href="https://www.instagram.com/raklechitsa/"
            class="instagram__link"
            target="_blank"
          ></a>
        </li>
        <li class="instagram__item">
          <a
            href="https://www.instagram.com/raklechitsa/"
            class="instagram__link"
            target="_blank"
          ></a>
        </li>
      </ul> -->

      <ul class="instagram__items">
        <li
          class="instagram__item"
          v-for="(photo, index) in instagram"
          :key="index"
        >
          <a class="instagram__link" :href="photo.url" target="_blank">
            <img
              class="instagram__img"
              :src="photo.display_url"
              :alt="photo.accessibility_caption"
            />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import mixinBlockContent from '@/mixins/mixinBlockContent';

import SectionTitle from '@/components/ui/SectionTitle';
import SectionDescription from '@/components/ui/SectionDescription';

export default {
  components: {
    'section-title': SectionTitle,
    'section-description': SectionDescription,
  },

  mixins: [mixinBlockContent],

  computed: {
    instagram() {
      const { instagram } = this.$store.state;
      return instagram.photos.slice(0, 8);
    },
  },

  async fetch() {
    await this.$store.dispatch('instagram/GET_PHOTOS');
  },
};
</script>

<style scoped>
.instagram {
  width: 100%;
}

.instagram__container {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 65%;
}

.instagram__side {
  display: flex;
  flex-direction: column;
}

.instagram__section-title {
  text-decoration-line: underline;
}

.instagram__section-description {
  margin-top: 32px; /* PP */
}

.instagram__items {
  padding: 0;
  margin: 0;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 30px;
}

.instagram__item {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  position: relative;

  background-color: #ededed;
}

.instagram__item:before {
  content: '';
  display: block;
  padding-top: 100%;
}

.instagram__link {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #00000070;
}

.instagram__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media screen and (max-width: 1280px) {
  .instagram__section-description {
    margin-top: 30px; /* PP */
    margin-right: 27px;
  }

  .instagram__items {
    grid-gap: 27px;
  }
}

@media screen and (max-width: 1024px) {
  .instagram__section-description {
    margin-right: 20px;
  }

  .instagram__items {
    grid-gap: 20px;
  }
}

@media screen and (max-width: 768px) {
  .instagram__container {
    display: flex;
    flex-direction: column;
  }

  .instagram__side {
    margin: 0 auto;
  }

  .instagram__section-title {
    max-width: unset;
  }

  .instagram__section-description {
    margin-right: 0;
    margin-bottom: 60px;
  }

  .instagram__items {
    grid-gap: 20px;
  }
}

@media screen and (max-width: 425px) {
  .instagram__items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
}

@media screen and (max-width: 320px) {
  .instagram__section-description {
    margin-bottom: 15px;
    margin-bottom: 40px;
  }
}
</style>
