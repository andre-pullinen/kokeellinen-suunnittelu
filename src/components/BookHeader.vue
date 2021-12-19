<template>
<div class="book_header">
  <div class="book_header-image">
    <img :src="require(`../assets/book/${$props.bookImageRequire}.png`)" :alt="bookName" v-if="bookImage === '#'">
    <img :src="bookImage" :alt="bookName" v-if="bookImage !== '#'">
    <span class="book_header-name">{{bookName}}</span>
  </div>
  <div class="menu">
    <div class="menu_read menu_item" @click="$emit('play')">
      <img src="../assets/read.png" alt="" class="icon">
      <span>{{ $t('book-header.play') }}</span>
    </div>
    <div class="menu_listen menu_item" @click="$emit('listen')">
      <img src="../assets/listen.png" alt="" class="icon">
      <span>{{ $t('book-header.listen') }}</span>
    </div>
    <div class="menu_watch menu_item" @click="$emit('watch')">
      <img src="../assets/watch.png" alt="" class="icon">
      <span>{{ $t('book-header.watch') }}</span>
    </div>
    <div class="menu_download menu_item" @click="$emit('download')">
      <img src="../assets/download.png" alt="" class="icon">
      <span>{{ $t('book-header.download') }}</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'BookHeader',
  props: ['bookName', 'bookImage', 'bookImageRequire']
}
</script>

<style lang="sass">
.book_header
  width: 100%
  position: relative
  &-name
    font-size: 32px
    color: white
    transform: translate(-50%, -50%)
    top: 50%
    left: 50%
    position: absolute
    text-transform: uppercase
    text-shadow: 0 0 5px black
  &-image
    background-color: #979797
    width: 100%
    height: 350px
    position: relative
    overflow: hidden
    img
      width: 100%
      position: relative
      top: -280px
.menu
  background-image: linear-gradient(360deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))
  position: absolute
  bottom: 0
  left: 0
  padding-bottom: 20px
  padding-top: 20px
  width: 100%
  display: flex
  justify-content: space-around
  &_item
    align-items: center
    transition: all 0.3s
    cursor: pointer
    &:hover
      transform: scale(1.3)
    & span
      color: white
      display: inline-block
      vertical-align: middle
      margin-left: 10px
      font-size: 1.3em
.icon
  width: 60px
  height: 60px
  filter: invert(1)
  display: inline-block
  vertical-align: middle
</style>
