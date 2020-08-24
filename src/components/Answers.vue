<template>
    <div class="container">
        <div class="answer" v-for="(answers, index) in getAnswers[getCount].answers" :key="index" @click="answerCheck({event: $event, id: getAnswers[getCount].id})">
            <h1>{{decodeURIComponent(answers)}}</h1>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Answers',
  methods: {
    ...mapActions(['getTrivia', 'answerCheck']),
    randomList(rand) {
      return console.log(rand.sort(() => 0.5 - Math.random()));
    },
  },
  computed: mapGetters(['getAnswers', 'getCount']),
  async created() {
    await this.getTrivia();
  },
};
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap');
    .container {
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        color: #ffffff;
        font-family: Montserrat;
        margin: 5em;
    }

    h1 {
        font-weight: 700;
        text-align: center;
        text-transform: uppercase;
    }

    h2 {
        font-weight: 500;
        text-align: center;
        text-transform: uppercase;
    }

    .answers {
        padding: 2em;
        flex-grow: 1;
        flex-basis: auto;
        justify-content: center;
        align-items: center;
        background-color: #41B985;
        width: 100%;
    }

    .correct {
        background-color: #067847;
    }

    </style>
