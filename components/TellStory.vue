<template>
  <section class="tell-story">
    <SectionTitle class="tell-story__section-title">
      Расскажите свою историю
    </SectionTitle>

    <div class="tell-story__container">
      <SectionDescription class="tell-story__section-description">
        Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
        поделиться своей историей неизлечимых привычек, навязчивых идей и
        болезненных привязанностей.
      </SectionDescription>

      <div class="tell-story__container-options">
        <ul class="tell-story__options">
          <li
            :class="[
              'tell-story__option',
              option === 1 ? 'tell-story__option_active' : '',
            ]"
            @click="firstOption"
          >
            1-й вариант
          </li>
          <li
            :class="[
              'tell-story__option',
              option === 2 ? 'tell-story__option_active' : '',
            ]"
            @click="secondOption"
          >
            2-й вариант
          </li>
        </ul>
        <div class="tell-story__container-info">
          <p class="tell-story__description">
            {{ optionText }}
          </p>
          <MiddleButton
            class="tell-story__middle-button"
            @click="option === 1 ? showPopupQuiz() : showPopupContactMe()"
            :text="option === 1 ? 'Заполнить форму' : 'Оставить контакт'"
          >
          </MiddleButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';
import SectionDescription from '@/components/ui/SectionDescription';
import MiddleButton from '@/components/ui/MiddleButton';
export default {
  name: 'tell-story',
  components: {
    SectionTitle,
    SectionDescription,
    MiddleButton,
  },
  props: {},
  data() {
    return {};
  },
  methods: {
    showPopupQuiz() {
      this.$store.commit('popup/openPopup');
      this.$store.dispatch('quiz/showQuiz');
    },
    showPopupContactMe() {
      this.$store.commit('popup/openPopup');
      this.$store.dispatch('contactMe/showContactMe');
    },
    firstOption(event) {
      event.preventDefault();
      this.$store.dispatch('tellStory/chooseFirstOption');
    },
    secondOption(event) {
      event.preventDefault();
      this.$store.dispatch('tellStory/chooseSecondOption');
    },
  },
  computed: {
    option() {
      return this.$store.getters['tellStory/getStateOption'];
    },
    optionText() {
      return this.$store.getters['tellStory/getStateOptionText'];
    },
  },
};
</script>

<style scoped>
.tell-story {
  width: 100%;
  padding: 100px 0;
  background-color: #f7f7f7;
}

.tell-story__section-title {
  margin-bottom: 30px;
}

.tell-story__container {
  display: flex;
  justify-content: space-between;
}

.tell-story__container-options {
  max-width: 59.46969716%;
  display: flex;
  justify-content: space-between;
}

.tell-story__options {
  padding: 0;
  margin-right: 35px;
  list-style-type: none;
}

.tell-story__option {
  min-width: 110px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #a2a2a2;
  cursor: pointer;
}

.tell-story__option:not(:first-child) {
  margin-top: 10px;
}

.tell-story__option_active {
  color: #000000;
}

.tell-story__container-info {
  height: 218px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.tell-story__description {
  max-width: 640px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
}

.tell-story__middle-button {
  width: 280px;
}

@media screen and (max-width: 1280px) {
  .tell-story {
    padding: 90px 0;
  }

  .tell-story__container-options {
    max-width: 60.593220339%;
  }

  .tell-story__container-info {
    height: 214px;
  }
}

@media screen and (max-width: 1024px) {
  .tell-story {
    padding: 80px 0;
  }

  .tell-story__container-options {
    max-width: 61.255411255%;
  }

  .tell-story__options {
    font-size: 15px;
    margin-right: 30px;
  }

  .tell-story__option {
    min-width: 90px;
    font-size: 15px;
    line-height: 19px;
  }

  .tell-story__option:not(:first-child) {
    margin-top: 8px;
  }

  .tell-story__container-info {
    height: 200px;
  }

  .tell-story__description {
    font-size: 15px;
    line-height: 19px;
  }
}

@media screen and (max-width: 768px) {
  .tell-story__section-title {
    margin: auto;
    margin-bottom: 26px;
  }

  .tell-story__container {
    margin: auto;
    flex-direction: column;
  }

  .tell-story__container-options {
    max-width: 382px;
    margin: auto;
    flex-direction: column;
  }

  .tell-story__section-description {
    margin: auto;
    margin-bottom: 80px;
  }

  .tell-story__options {
    max-width: 210px;
    display: flex;
    margin-bottom: 24px;
    justify-content: space-between;
  }

  .tell-story__option:not(:first-child) {
    margin: 0;
  }

  .tell-story__container-info {
    align-items: center;
    height: 191px;
  }
}

@media screen and (max-width: 320px) {
  .tell-story__section-title {
    margin-bottom: 16px;
  }

  .tell-story__section-description {
    margin-bottom: 40px;
  }

  .tell-story__option {
    font-size: 13px;
  }

  .tell-story__container-info {
    height: 166px;
  }

  .tell-story__description {
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
