<template>
  <div>
    <h1>Score: {{getScore}}</h1>
    <Question />
    <Answers />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Question from '../components/Question.vue';
import Answers from '../components/Answers.vue';

export default {
  components: {
    Question,
    Answers,
  },
  computed: mapGetters(['getScore']),
};
</script>
