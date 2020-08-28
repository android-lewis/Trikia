// Initial state
const state = {
  count: 0,
  score: 0,
};

// Getters
const getters = {
  getCount: (state) => state.count,
  getScore: (state) => state.score,
};

// Actions
const actions = {};

// Mutations
const mutations = {
  increment(state) {
    state.count += 1;
  },
  resetScore(state) {
    state.score = 0;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
