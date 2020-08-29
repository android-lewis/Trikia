import axios from 'axios';

const state = {
  data: {},
  difficulty: {
    EASY: 'easy',
    MEDIUM: 'medium',
    HARD: 'hard',
  },
  status: 'WAIT',
  id: 0,
  question_id: [],
  questions: [],
  answer_list: [],
  correct_answer: [],
  isAnswerCorrect: false,
  category: {},
  options: {
    questionLimit: Number,
    diff: String,
    category: Number,
  },
};

const getters = {
  getDiff(state) { return state.difficulty; },
  getQuestions(state) { return state.questions; },
  getAnswers(state) { return state.answer_list; },
  getCategories(state) { return state.category; },
  getOptions(state) { return state.options; },
  getLimit(state) { return state.options.questionLimit; },
  getFetchStatus(state) { return state.status; },
  getAnswerIsCorrect(state) { return state.isAnswerCorrect; },
};

const actions = {
  async getTrivia({ commit, state }) {
    const api = `https://opentdb.com/api.php?amount=${state.options.questionLimit}&category=${state.options.category}&difficulty=${state.options.diff}&type=multiple&encode=url3986`;
    await axios.get(api)
      .then(({ data }) => {
        commit('alterStatus', 'WAIT');
        commit('score/resetScore', null, { root: true });
        commit('resetState');
        commit('setQuestions', data.results);
        commit('setAnswers', data.results);
        commit('shuffleArray');
      });
  },
  async fetchCategory({ commit }) {
    const { data } = await axios.get('https://opentdb.com/api_category.php', { crossdomain: true });
    commit('setCategory', data.trivia_categories);
  },
  optionsCategory({ commit }, e) {
    commit('setSelectedCategory', e);
  },
  optionsDiff({ commit }, e) {
    commit('setDiff', e);
  },
  optionsLimit({ commit }, e) {
    commit('setQuestionLimit', e);
  },
  answerCheck({ state, rootState }, payload) {
    if (encodeURIComponent(payload.event.target.innerHTML)
    === state.correct_answer[payload.id].correct_answer) {
      rootState.score.score += 1;
      rootState.score.count += 1;
      state.isAnswerCorrect = true;
    }
    rootState.score.count += 1;
  },
  setSuccess({ commit }) {
    commit('alterStatus', 'SUCCESS');
  },
};

const mutations = {
  resetState: (state) => {
    state.questions = [];
    state.question_id = [];
    state.id = 0;
    state.answer_list = [];
    state.correct_answer = [];
  },
  setQuestions: (state, questions) => {
    if (questions.length > 0 && questions.length !== undefined) {
      questions.forEach((q) => {
        state.question_id.push(state.id);
        state.questions.push(q.question);
        state.id += 1;
      });
    }
  },
  setAnswers: (state, answers) => {
    state.id = 0;
    if (answers.length > 0 && answers.length !== undefined) {
      answers.forEach((a) => {
        const tempAnswer = [];
        state.correct_answer.push({
          id: state.question_id[state.id],
          correct_answer: a.correct_answer,
        });
        tempAnswer.push(a.correct_answer);
        state.answer_list.push({
          id: state.question_id[state.id],
          answers: tempAnswer.concat(a.incorrect_answers),
        });
        state.id += 1;
      });
    }
  },
  shuffleArray: (state) => {
    for (let index = 0; index < state.answer_list.length; index += 1) {
      for (let i = state.answer_list[index].answers.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = state.answer_list[index].answers[i];
        state.answer_list[index].answers[i] = state.answer_list[index].answers[j];
        state.answer_list[index].answers[j] = temp;
      }
    }
  },
  setCategory: (state, category) => {
    state.category = category;
  },
  setSelectedCategory: (state, category) => {
    state.options.category = category;
  },
  setQuestionLimit: (state, limit) => {
    state.options.questionLimit = limit;
  },
  setDiff: (state, diff) => {
    state.options.diff = diff;
  },
  alterStatus: (state, e) => {
    state.status = e;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
