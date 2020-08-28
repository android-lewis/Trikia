<template>
    <section class="section">
            <div class="block">
        <b-field label="Pick a catagory"
            custom-class="is-large
            has-text-white
            title"
            position="is-centered">
        <b-select v-model="category" size="is-medium"
        @input="optionsCategory(category.id)" expanded>
            <option v-for="cat in getCategories"
            :key="cat.id" :value="{id: cat.id}">{{cat.name}}</option>
        </b-select>
        </b-field>

        <b-field label="Difficulty"
        custom-class="is-large
        has-text-white
        title"
        position="is-centered">
            <b-select v-model="diff" size="is-medium"
            @input="optionsDiff(diff.diff)" expanded>
                <option v-for="diffs in getDiff"
                :key="diffs" :value="{diff: diffs}">{{diffs.toUpperCase()}}</option>
            </b-select>
        </b-field>

        <b-field label="Number of Questions"
        custom-class="is-large
        has-text-white
        title"
        position="is-centered">
            <b-numberinput v-model="questionLimit" size="is-medium" min="1" max="50"
            @input="optionsLimit(questionLimit)" expanded/>
        </b-field>

        <div class="has-text-centered has-text-white">
            <b-button tag="router-link" to="/question" size="is-large" type="is-purple">
                Let's Play
            </b-button>
        </div>
<!--
        <transition appear
            name="custom-classes-transition"
            appear-to-class="rotateIn"
        >
            <svg width="135" height="509" viewBox="0 0 135 509" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M67 5.25C72 5.25001
                82.5 4.25 89 6.25C92.3333 9.25
                96 24.75 96 24.75L92 27.75L96
                47.25L92 53.75C95.6667 90.0833
                101 186.75 101 186.75C101.167
                191.917 113.5 217.25 113.5
                217.25C118.833 223.25 129.5
                252.25 129.5 252.25V484.75C127.667
                490.417 120 502.05 104 503.25C88 504.45
                73 503.75 67 503.75C62 503.75 46.5
                504.45 30.5 503.25C14.5 502.05
                6.83333 490.417 5 484.75V252.25C5
                252.25 15.6667 223.25 21 217.25C21
                217.25 33.3333 191.917 33.5 186.75C33.5
                186.75 38.8333 90.0833 42.5 53.75L38.5
                47.25L42.5 27.75L38.5 24.75C38.5 24.75
                42.1667 9.25 45.5 6.25C51.1
                4.25 62 5.25 67.5 5.25"
                stroke="#57F7B2" stroke-width="10"/>
            </svg>
        </transition>    -->
        </div>
    </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

require('vue2-animate/dist/vue2-animate.min.css');

export default {
  name: 'HomePage',
  data() {
    return {
      category: '',
      diff: '',
      questionLimit: 0,
    };
  },
  methods: {
    ...mapActions({
      fetchCategory: 'questions/fetchCategory',
      changeCategory: 'questions/changeCategory',
      changeDiff: 'questions/changeDiff',
      changeNumOfQuestions: 'questions/changeNumOfQuestions',
      optionsCategory: 'questions/optionsCategory',
      optionsLimit: 'questions/optionsLimit',
      optionsDiff: 'questions/optionsDiff',
    }),
  },
  computed: mapGetters({
    getCategories: 'questions/getCategories',
    getDiff: 'questions/getDiff',
  }),
  created() {
    this.fetchCategory();
  },
};
</script>
