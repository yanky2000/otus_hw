<template>
  <div id="app">
    <Settings/>
    <Playground/>
  </div>
</template>

<script>
import Settings from './components/Settings.vue'
import Playground from './components/Playground.vue'

export default {
  name: 'app',
  components: {
    Settings,
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
