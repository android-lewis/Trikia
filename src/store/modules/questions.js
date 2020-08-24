import axios from 'axios';

const state = {
  difficulty: {
    HARD: 'hard',
    MEDIUM: 'medium',
    EASY: 'easy',
  },
  id: 0,
  question_id: [],
  questions: [],
  answer_list: [],
  correct_answer: [],
  category: {},
  options: {
    questionLimit: 0,
    diff: 'easy',
    category: 1,
  },
};

const getters = {
  getDiff: (state) => state.difficulty,
  getQuestions: (state) => state.questions,
  getAnswers: (state) => state.answer_list,
  getCategories: (state) => state.category,
  getOptions: (state) => state.options,
};

const actions = {
  async getTrivia({ commit, state }) {
    const { data } = await axios.get(`https://opentdb.com/api.php?amount=${state.options.questionLimit}&category=${state.options.category}&difficulty=${state.options.diff}&type=multiple&encode=url3986`, { crossdomain: true });
    // console.log(`https://opentdb.com/api.php?amount=${state.options.questionLimit}&category=${state.options.category}&difficulty=${state.options.diff}&type=multiple&encode=url3986`);
    commit('resetState');
    commit('setQuestions', data.results);
    commit('setAnswers', data.results);
  },
  async fetchCategory({ commit }) {
    const { data } = await axios.get('https://opentdb.com/api_category.php', { crossdomain: true });
    commit('setCategory', data.trivia_categories);
  },
  Options({ commit }, e) {
    commit('setOptions', e);
  },
  answerCheck({ state, rootState }, payload) {
    if (encodeURIComponent(payload.event.target.innerHTML) == state.correct_answer[payload.id].correct_answer) {
      console.log('correct');
      rootState.score.score++;
      rootState.score.count++;
    } else {
      console.log(`incorrect: ${payload.event.target.innerHTML} : ${payload.id}`);
    }
  },

};

const mutations = {
  resetState: (state) => {
    state.questions = [],
    state.question_id = [],
    state.id = 0,
    state.answer_list = [],
    state.correct_answer = [];
  },
  setQuestions: (state, questions) => (

    questions.forEach((q) => {
      state.question_id.push(state.id);
      state.questions.push(q.question);
      state.id++;
    })
  ),
  setAnswers: (state, answers) => (
    state.id = 0,
    answers.forEach((a) => {
      const tempAnswer = [];
      state.correct_answer.push({
        id: state.question_id[state.id],
        correct_answer: a.correct_answer,
      });
      // console.log(state.correct_answer);
      tempAnswer.push(a.correct_answer);

      console.log(tempAnswer);
      // Shuffling array

      /*
            } */

      // console.log(tempAnswer);
      state.answer_list.push({
        id: state.question_id[state.id],
        answers: tempAnswer.concat(a.incorrect_answers),
      });
      state.id++;
    })
  ),
  shuffleArray: (state) => {
    for (let i = tempAnswer.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = tempAnswer[i];
      tempAnswer[i] = tempAnswer[j];
      tempAnswer[j] = temp;
    }
  },
  setCategory: (state, category) => (
    state.category = category
  ),
  setOptions(state, options) {
    state.options.questionLimit = options.questionLimit;
    state.options.diff = options.difficulty;
    state.options.category = options.category;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
