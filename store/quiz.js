export const state = () => ({
  isShowQuiz: false,
  numberCurrentQuestion: 1,
  answer: {},
  dataQuestion: [
    {
      title: 'Шаг 1 из 12',
      question: 'Как вас зовут?',
      explanationQuestion: '',
    },
    {
      title: 'Шаг 2 из 12',
      question: 'Было ли у вас онкологическое заболевание?',
      explanationQuestion:
        'Если да – расскажите, пожалуйста, кратко, какой диагноз и текущий статус. Если нет — приглашаем Вас поделиться своей историей неизлечимых привычек в Инстаграм с хештегами #раклечится и #этонелечится.',
    },
    {
      title: 'Шаг 3 из 12',
      question: 'Какие занятия приносят Вам наибольшее удовольствие?',
      explanationQuestion:
        'Расскажите о ваших неизлечимых привычках, чего Вы боитесь или без чего не можете жить.',
    },
    {
      title: 'Шаг 4 из 12',
      question: 'На что, кроме семьи, быта и работы, Вы тратите свое время?',
      explanationQuestion: '',
    },
    {
      title: 'Шаг 5 из 12',
      question: 'Какие сильные увлечения у Вас есть?',
      explanationQuestion:
        'Расскажите о занятии, хобби или спорте, которые увлекают Вас с головой.',
    },
    {
      title: 'Шаг 6 из 12',
      question:
        'Ваши близкие, друзья или коллеги замечали за вами какие-нибудь необычные привычки или особенности?',
      explanationQuestion: '',
    },
    {
      title: 'Шаг 7 из 12',
      question:
        'Существуют ли какие-то ритуалы/действия, которые Вы совершаете регулярно?',
      explanationQuestion: 'Кроме необходимых, таких, как чистка зубов.',
    },
    {
      title: 'Шаг 8 из 12',
      question:
        'Если вам выдался свободный день/вечер в одиночестве, чем вы займетесь?',
      explanationQuestion: '',
    },
    {
      title: 'Шаг 9 из 12',
      question: 'Что Вас успокаивает/умиротворяет лучше всего?',
      explanationQuestion: '',
    },
    {
      title: 'Шаг 10 из 12',
      question:
        'Какие события/ситуации или действия других людей обычно выводят Вас из себя?',
      explanationQuestion: '',
    },
    {
      title: 'Шаг 11 из 12',
      question: 'Как вы обычно проводите выходные',
      explanationQuestion: '',
    },
    {
      title: 'Шаг 12 из 12',
      question: 'Почта или телефон для связи.',
      explanationQuestion:
        'Укажите удобный для вас формат связи. После обработки анкеты координатор проекта свяжется с Вами для размещения Вашей истории на сайте.',
    },
  ],
});

export const mutations = {
  setStateCurrentQuestion(state, { numberCurrentQuestion }) {
    state.numberCurrentQuestion = numberCurrentQuestion;
  },
  setStateShown(state, value) {
    state.isShowQuiz = value;
  },
  saveAnswer(state, { answer, numberCurrentQuestion }) {
    state.answer[numberCurrentQuestion] = answer;
  },
  setInitialStateAnswers(state) {
    state.answer = {};
  },
};

export const actions = {
  incrementNumberCurrentQuestion({ state, commit }, { answer }) {
    const { numberCurrentQuestion, dataQuestion } = state;
    if (numberCurrentQuestion > dataQuestion.length - 1) {
      return null;
    } else {
      commit('setStateCurrentQuestion', {
        numberCurrentQuestion: numberCurrentQuestion + 1,
      });
      commit('saveAnswer', { answer, numberCurrentQuestion });
    }
  },
  decrementNumberCurrentQuestion({ state, commit }) {
    const { numberCurrentQuestion } = state;
    if (numberCurrentQuestion === 1) {
      return null;
    } else {
      commit('setStateCurrentQuestion', {
        numberCurrentQuestion: numberCurrentQuestion - 1,
      });
    }
  },
  resetNumberCurrentQuestion({ state, commit }) {
    commit('setStateCurrentQuestion', {
      numberCurrentQuestion: 1,
    });
  },
  resetAnswers({ commit }) {
    commit('setInitialStateAnswers');
  },
  showQuiz({ commit }) {
    commit('setStateShown', true);
  },
  hideQuiz({ commit }) {
    commit('setStateShown', false);
  },
};

export const getters = {
  getStateShown(state) {
    return state.isShowQuiz;
  },
  getNumberCurrentQuestion(state) {
    return state.numberCurrentQuestion;
  },
  getQuestion(state) {
    return state.dataQuestion[state.numberCurrentQuestion - 1];
  },
  getLengthDataQuestion(state) {
    return state.dataQuestion.length;
  },
  getAnswer(state) {
    return state.answer[state.numberCurrentQuestion];
  },
};
