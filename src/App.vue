<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
      <Playground/>
  </div>
</template>

<script>
import Playground from './components/playground/Playground.vue'

export default {
  name: 'app',
  components: {
    Playground
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
