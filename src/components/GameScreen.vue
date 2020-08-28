<template>
  <div>
    <div v-if="getLimit > getScore">
      <h1>Score: {{getScore}}</h1>
      <Question />
      <Answers />
    </div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex';
import Question from '@/components/Question.vue';
import Answers from '@/components/Answers.vue';

export default {
  components: {
    Question,
    Answers,
  },
  computed: mapGetters({
    getScore: 'score/getScore',
    getLimit: 'questions/getLimit',
    getFetchStatus: 'questions/getFetchStatus',
  }),
};
</script>
