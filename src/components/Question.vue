<template>
    <div class="container" v-if="getQuestions">
        <h1 class="question">{{decodeURIComponent(getQuestions[getCount])}}</h1>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Question',
  computed: mapGetters({
    getQuestions: 'questions/getQuestions',
    getCount: 'score/getCount',
  }),
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

    .question {
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        flex-basis: auto;
        background-color: #95A2AB;
        width: 100%;
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
