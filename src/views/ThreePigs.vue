<template>
  <div>
    <book-header book-name="Три поросёнка" book-image="#" v-on:play="startBook" />
    <div class="book" ref="book">
      <img src="#" alt="" ref="bookImage">
      <div class="book__text" ref="bookText">
        <p v-for="(item, index) in bookText" :key="index">{{ item }}</p>
      </div>
      <div class="book-actions" ref="bookActions">
        <action-button :action="index" :text="item" v-for="(item, index) in bookActions" v-on:born="(action) => doAction(action)" :key="index"></action-button>
      </div>
    </div>
    <div>Icon by: <a href="https://www.flaticon.com/ru/authors/mansygraphics" title="MansyGraphics">MansyGraphics</a> from <a href="https://www.flaticon.com/ru/" title="Flaticon">www.flaticon.com</a></div>
  </div>
</template>

<script>
import BookHeader from '@/components/BookHeader'
import BookThreePigs from '@/bookThreePigs.js'
import ActionButton from '@/components/ActionButton'
export default {
  name: 'ThreePigs',
  data: () => ({
    bookText: [],
    bookActions: []
  }),
  components: { ActionButton, BookHeader },
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

<style lang="sass">
.book
  &__text
    text-align: left
    font-size: 1.2em
    padding: 1.5em 3em
    p
      margin: 0
      min-height: 1.2em
</style>
