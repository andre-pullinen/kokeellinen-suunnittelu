<template>
  <div>
    <book-header
      :book-name="$t('books.three-pigs.name')"
      book-image="#"
      book-image-require="ThreePigs/full-preview"
      v-on:play="startBook"
      v-on:listen="listenBook"
      v-on:watch="watchBook"
      v-on:download="downloadBook"
    />
    <div class="book" ref="book">
      <img src="#" alt="" ref="bookImage">
      <div class="book__text" ref="bookText">
        <p v-for="(item, index) in bookText" :key="index">
          <span v-if="isText(item)">{{ item }}</span>
          <img v-if="isImage(item)"  alt="" :src="require(`../assets/book/ThreePigs/story/${getImagePath(item)}`)"/>
        </p>
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
    listenBook () {
      window.open(this.$t('three-pigs.urls.listen'))
    },
    watchBook () {
      window.open(this.$t('three-pigs.urls.watch'))
    },
    downloadBook () {
      window.open(this.$t('three-pigs.urls.download'))
    },
    doAction (index) {
      const data = BookThreePigs.doAction(index)
      this.bookText = data.text
      this.bookActions = data.actions
    },
    isText (thing) {
      return !thing.startsWith('image:')
    },
    isImage (thing) {
      return !this.isText(thing)
    },
    getImagePath (thing) {
      return thing.slice(6)
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
