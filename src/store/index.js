import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import questions from './modules/questions';
import score from './modules/score';

Vue.use(Vuex);
Vue.use(VueRouter);

export default new Vuex.Store({
  modules: {
    questions,
    score,
  },
});
