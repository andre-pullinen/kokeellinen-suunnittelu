<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<style lang="sass">
body
  color: #000004
  background-color: #fbfef9
#app
  font-family: 'Roboto', sans-serif
  text-align: center
</style>
<script>
import Header from './components/Header'
export default {
  components: { Header }
}
</script>
