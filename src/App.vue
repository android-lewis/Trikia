<template>
  <div class="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

  body {
    background: #212426;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
  }
  .App {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
</style>
