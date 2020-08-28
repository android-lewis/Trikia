<template>
  <div class="container">
    <HomePage />
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from '@/components/Home.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    HomePage,
  },
  methods: {
    ...mapActions({
      getTrivia: 'questions/getTrivia',
      setSuccess: 'questions/setSuccess',
    }),
  },
  async beforeRouteLeave(to, from, next) {
    await this.getTrivia();
    await this.setSuccess();
    next();
  },
};
</script>

<style lang="scss">
  // Import Bulma's core
  @import "~bulma/sass/utilities/_all";

  // Set your colors
  $primary: #221673;
  $secondary: #85F2E7;
  $dark: #131240;
  $blue: #0A6AA6;
  $purple: #F088F2;
  $white: #f2f2f2;

  // Setup $colors to use as bulma classes (e.g. 'is-primary')
  $colors: (
      "primary": ($primary, $purple),
      "secondary": ($secondary, $white),
      "dark": ($blue, $purple),
      "purple": ($purple, $white),
      "white": ($white, $dark),
  );

  // Links
  $link: $primary;
  $link-invert: $primary-invert;
  $link-focus-border: $primary;

  // Import Bulma and Buefy styles
  @import "~bulma";
  @import "~buefy/src/scss/buefy";
</style>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap');

    .title {
        font-weight: 700;
        text-transform: uppercase;
        font-family: Montserrat;
    }
</style>
