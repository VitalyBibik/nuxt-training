<template>
  <footer class="footer">
    <section class="footer__container">
      <div class="footer__half">
        <h2 class="footer__title">
          {{ blockContent.title }}
        </h2>
        <div class="footer__navigation">
          <nuxt-link to="/" class="footer__link">
            Главная
          </nuxt-link>
          <nuxt-link to="/stories" class="footer__link">
            Истории
          </nuxt-link>
        </div>
        <div class="footer__links">
          <p class="footer__text footer__text_type_link">
            Мы в
            <a
              href="https://www.instagram.com/raklechitsa/"
              class="footer__link"
              target="_blank"
              >Инстаграме</a
            >
            и
            <a
              href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
              class="footer__link"
              target="_blank"
            >
              Youtube
            </a>
          </p>
          <a class="footer__link" @click.prevent="showPopup">
            Поделитесь &#8599;
          </a>
        </div>
      </div>

      <div class="footer__half">
        <small class="footer__text">{{
          blockContent.text.replace(/(<\/?p>)/g, '')
        }}</small>

        <p class="footer__text">Сделано студентами Яндекс&nbsp;Практикум</p>
      </div>
    </section>
  </footer>
</template>

<script>
import mixinBlockContent from '@/mixins/mixinBlockContent';
import SectionTitle from '@/components/ui/SectionTitle';
import Menu from '@/components/Menu';

export default {
  components: {
    'section-title': SectionTitle,
    'main-menu': Menu,
  },

  mixins: [mixinBlockContent],

  methods: {
    showPopup() {
      this.$store.commit('popup/openPopup');
      this.$store.dispatch('SocialMedia/showSocialMedia');
    },
  },
};
</script>

<style scoped>
.footer {
  min-height: 356px;
  margin: auto;
  padding: 60px;
  display: flex;
  align-items: stretch;
  background: #fbfbfb;
}

.footer__container {
  max-width: 1320px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.footer__half {
  display: flex;
  justify-content: space-between;
}

.footer__navigation {
  display: flex;
}

.footer__links {
  max-width: 300px;
  display: flex;
  flex-direction: column;
}

.footer__title {
  max-width: 310px;
  min-width: 228px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}

.footer__link {
  border: none;
  background: transparent;
  display: inline;
  color: #000000;
  cursor: pointer;
  font-size: 18px;
  font-weight: normal;
  text-decoration: none;
}

.footer__text:nth-child(1) .footer__link {
  border-bottom: solid 2px black;
}

.footer__link:hover {
  opacity: 0.8;
}

.footer__navigation .footer__link:first-child {
  margin-right: 40px;
}

.footer__text {
  font-size: 18px;
  color: #898989;
}

.footer__text_type_link {
  color: #000000;
  margin-bottom: 44px;
}

@media screen and (max-width: 1280px) {
  .footer {
    padding: 50px;
    min-height: 316px;
  }

  .footer__container {
    max-width: 1180px;
  }

  .footer__title {
    max-width: 280px;
    font-size: 28px;
    line-height: 32px;
  }
}

@media screen and (max-width: 1024px) {
  .footer {
    min-height: 292px;
  }

  .footer__links {
    max-width: 225px;
  }

  .footer__title {
    max-width: 230px;
    font-size: 24px;
    line-height: 28px;
  }

  .footer__link {
    font-size: 16px;
  }

  .footer__text {
    font-size: 16px;
  }

  .footer__text_type_link {
    margin-bottom: 30px;
  }
}

@media screen and (max-width: 768px) {
  .footer {
    padding: 40px;
  }

  .footer__navigation {
    flex-direction: column;
  }

  .footer__text_type_link {
    margin-bottom: 14px;
  }

  .footer__navigation .footer__link:first-child {
    margin-right: 0;
    margin-bottom: 14px;
  }
}

@media screen and (max-width: 640px) {
  .footer__half {
    flex-direction: column;
    margin-bottom: 50px;
  }

  .footer__half:last-of-type {
    margin-bottom: 0;
  }

  .footer__navigation {
    margin-bottom: 14px;
  }

  .footer__title {
    max-width: 290px;
    margin: 0;
    margin-bottom: 50px;
  }

  .footer__link {
    margin-bottom: 14px;
  }

  .footer__link:last-of-type {
    margin-bottom: 0;
  }

  .footer__half .footer__text:first-child {
    margin-bottom: 14px;
  }
}

@media screen and (max-width: 425px) {
  .footer__half {
    flex-direction: column;
  }

  .footer__title {
    font-size: 18px;
    line-height: 21px;
  }

  .footer__link {
    font-size: 13px;
  }

  .footer__text {
    font-size: 13px;
  }
}

@media screen and (max-width: 320px) {
  .footer {
    padding: 40px 15px;
  }
}
</style>
