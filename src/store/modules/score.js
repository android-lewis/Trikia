import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  count: 0,
  score: 0,
};

const getters = {
  getCount: (state) => state.count,
  getScore: (state) => state.score,
};

const actions = {};

// Mutations
const mutations = {
  increment(state) {
    state.count += 1;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
