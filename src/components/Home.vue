<template>
    <div class="container">
        <h1>Pick a Catagory</h1>
        <select v-model="category" class="select-css">
            <option v-for="cat in getCategories" :key="cat.id" :value="{id: cat.id}">{{cat.name}}</option>
        </select>

        <h1>Difficulty</h1>
        <select v-model="diff" class="select-css">
            <option v-for="diffs in getDiff" :key="diffs" :value="{diff: diffs}">{{diffs}}</option>
        </select>

        <h1>Number of Questions</h1>
        <input type="number" v-model="questionLimit" min="1" max="50">

        <button @click="Options(convert(questionLimit, diff.diff, category.id))">
           Press Me
        </button>

        <router-link to="/question">Lets Play</router-link>
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
    ...mapActions(['fetchCategory', 'changeCategory', 'changeDiff', 'changeNumOfQuestions', 'Options']),
    convert(a, b, c) {
      const options = {
        questionLimit: a,
        difficulty: b,
        category: c,
      };
      return options;
    },
  },
  computed: mapGetters(['getCategories', 'getDiff']),
  created() {
    this.fetchCategory();
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

    .select-css {
    display: block;
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 700;
    text-transform: uppercase;
    color: #ffffff;
    line-height: 1.3;
    padding: .6em 1.4em .5em .8em;
    width: 100%;
    max-width: 100%; /* useful when width is set to anything other than 100% */
    box-sizing: border-box;
    margin: 0;
    border: 1px solid #41B985;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
    border-radius: .5em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #3C4043;
    /* note: bg image below uses 2 urls. The first is an svg data uri for the arrow icon, and the second is the gradient.
        for the icon, if you want to change the color, be sure to use `%23` instead of `#`, since it's a url. You can also swap in a different svg icon or an external image reference

    */
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
      linear-gradient(to bottom, #212426 0%,#3C4043 100%);
    background-repeat: no-repeat, repeat;
    /* arrow icon position (1em from the right, 50% vertical) , then gradient position*/
    background-position: right .7em top 50%, 0 0;
    /* icon size, then gradient */
    background-size: .65em auto, 100%;
    }
    /* Hide arrow icon in IE browsers */
    .select-css::-ms-expand {
        display: none;
    }
    /* Hover style */
    .select-css:hover {
        border-color: #067847;
    }
    /* Focus style */
    .select-css:focus {
        border-color: #41B985;
        /* It'd be nice to use -webkit-focus-ring-color here but it doesn't work on box-shadow */
        box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
        box-shadow: 0 0 0 3px -moz-mac-focusring;
        color: #ffffff;
        outline: none;
    }

    /* Set options to normal weight */
    .select-css option {
        font-weight:normal;
    }

    /* Support for rtl text, explicit support for Arabic and Hebrew */
    *[dir="rtl"] .select-css, :root:lang(ar) .select-css, :root:lang(iw) .select-css {
        background-position: left .7em top 50%, 0 0;
        padding: .6em .8em .5em 1.4em;
    }

    /* Disabled styles */
    .select-css:disabled, .select-css[aria-disabled=true] {
        color: graytext;
        background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22graytext%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
        linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
    }

    .select-css:disabled:hover, .select-css[aria-disabled=true] {
        border-color: #41B985;
    }
</style>
