<template>
  <div id="app">
    <Header/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  components: { Header }
}
</script>

<style lang="sass">
body
  margin: 0
  color: #000004
  background-color: #fbfef9
#app
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  font-family: 'Roboto', sans-serif
  text-align: center
.container
  width: 80%
</style>
