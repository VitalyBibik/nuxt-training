<template>
  <div class="quiz">
    <h2 class="quiz__title">{{ question.title }}</h2>
    <p class="quiz__question">
      {{ question.question }}
      <span class="quiz__explanation-question">{{
        question.explanationQuestion
      }}</span>
    </p>
    <form class="quiz__form">
      <input
        class="quiz__answer"
        placeholder="Напишите тут"
        @input="handleInput"
        v-model="answer"
      />
      <!--Заменить на компонент Input-->
      <div class="quiz__button-container">
        <div class="quiz__button-box">
          <return-button @click="prevQuestion">Назад</return-button>
          <middle-button
            class="quiz__middle-button"
            @click="nextQuestion"
            :text="
              dataQuestionLength !== numberQuestion ? 'Далее' : 'Отправить'
            "
            type="submit"
          ></middle-button>
        </div>
        <p
          v-if="dataQuestionLength === numberQuestion"
          class="quiz__personal-data-processing"
        >
          Нажимая на кнопку «отправить», вы даете согласие на
          <nuxt-link to="/privacy" class="quiz__personal-data-processing-url"
            >обработку персональных данных</nuxt-link
          >
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';
import MiddleButton from '@/components/ui/MiddleButton';
import ReturnButton from '@/components/ui/ReturnButton';

export default {
  components: {
    'section-title': SectionTitle,
    'middle-button': MiddleButton,
    'return-button': ReturnButton,
  },
  props: {},
  methods: {
    handleInput() {
      this.$emit('input', this.answer);
    },
    nextQuestion() {
      if (this.dataQuestionLength !== this.numberQuestion) {
        if (this.answer === '') {
          return null;
        } else {
          this.$store.dispatch('quiz/incrementNumberCurrentQuestion', {
            answer: this.answer,
          });
          this.answer = this.initialAnswer || '';
        }
      } else {
        this.$store.dispatch('quiz/hideQuiz');
        this.$store.dispatch('quiz/resetNumberCurrentQuestion');
        this.$store.dispatch('thanksSlide/showThanksSlide');
        this.sendAnswer();
      }
    },
    sendAnswer() {
      //Вызвать метод из store, который будет отправлять данные
      this.$store.dispatch('quiz/resetAnswers');
    },
    prevQuestion() {
      this.$store.dispatch('quiz/decrementNumberCurrentQuestion');
      this.answer = this.initialAnswer || '';
    },
  },
  computed: {
    question() {
      return this.$store.getters['quiz/getQuestion'];
    },
    dataQuestionLength() {
      return this.$store.getters['quiz/getLengthDataQuestion'];
    },
    numberQuestion() {
      return this.$store.getters['quiz/getNumberCurrentQuestion'];
    },
    initialAnswer() {
      return this.$store.getters['quiz/getAnswer'];
    },
  },
  data() {
    return {
      answer: '',
    };
  },
};
</script>

<style scoped>
.quiz {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.quiz__title {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}

.quiz__question {
  margin-top: 40px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
}

.quiz__explanation-question {
  color: #666666;
}
.quiz__form {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  margin-top: 100px;
}

.quiz__answer {
  width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  border: none;
  padding-bottom: 5px;
  border-bottom: 1px solid #e7e7e7;
  outline: none;
}
.quiz__answer::placeholder {
  color: #666666;
}

.quiz__button-container {
  display: flex;
}

.quiz__button-box {
  display: flex;
}

.quiz__middle-button {
  margin-left: 30px;
  margin-right: 30px;
}

.quiz__personal-data-processing {
  width: 380px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #666666;
}

.quiz__personal-data-processing-url {
  text-decoration: underline;
  color: inherit;
}

@media screen and (max-width: 1440px) {
  .quiz__title {
    font-size: 28px;
    line-height: 32px;
  }

  .quiz__question {
    font-size: 16px;
    line-height: 22px;
  }

  .quiz__form {
    margin-top: 134px;
  }

  .quiz__answer {
    font-size: 16px;
    line-height: 22px;
  }
}

@media screen and (max-width: 1280px) {
  .quiz__title {
    font-size: 26px;
    line-height: 30px;
  }

  .quiz__question {
    font-size: 15px;
    line-height: 19px;
  }

  .quiz__answer {
    font-size: 15px;
    line-height: 19px;
  }
}

@media screen and (max-width: 800px) {
  .quiz__personal-data-processing {
    margin: 10px 0px;
  }

  .quiz__button-container {
    flex-wrap: wrap;
  }

  .quiz__middle-button {
    margin: 0 0 0 30px;
  }

  .quiz__button-box {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .quiz__title {
    font-size: 18px;
    line-height: 21px;
  }

  .quiz__question {
    margin-top: 30px;
    font-size: 13px;
    line-height: 16px;
  }

  .quiz__answer {
    font-size: 13px;
    line-height: 16px;
  }
}

@media screen and (max-width: 425px) {
  .quiz__middle-button {
    margin: 0 0 0 15px;
  }
}
</style>
