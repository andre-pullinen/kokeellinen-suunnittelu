<template>
  <div>
    <book-header book-name="Три поросёнка" book-image="#"/>
    <div @click="startBook">start</div>
    <div class="book" ref="book">
      <img src="#" alt="" ref="bookImage">
      <div class="book-text" ref="bookText">
        <p v-for="(item, index) in bookText" :key="index">{{ item }}</p>
      </div>
      <div class="book-actions" ref="bookActions">
        <button v-for="(item, index) in bookActions" @click.prevent="() => doAction(index)" :key="index">{{ item }}</button>
      </div>
    </div>
    <div>Icon by: <a href="https://www.flaticon.com/ru/authors/mansygraphics" title="MansyGraphics">MansyGraphics</a> from <a href="https://www.flaticon.com/ru/" title="Flaticon">www.flaticon.com</a></div>
  </div>
</template>

<script>
import BookHeader from '../components/BookHeader'
import BookThreePigs from '@/bookThreePigs.js'
export default {
  name: 'ThreePigs',
  data: () => ({
    bookText: [],
    bookActions: []
  }),
  components: { BookHeader },
  methods: {
    startBook () {
      const data = BookThreePigs.init()
      this.bookText = data.text
      this.bookActions = data.actions
    },
    doAction (index) {
      const data = BookThreePigs.doAction(index)
      this.bookText = data.text
      this.bookActions = data.actions
    }
  }
}
</script>

<style scoped>

</style>
