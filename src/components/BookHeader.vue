<template>
<div class="header">
  <div class="header_image">
    <img :src="bookImage" alt="">
    <span>{{bookName}}</span>
  </div>
  <div class="menu">
    <div class="menu_read menu_item" @click="$emit('play')">
      <img src="../assets/read.png" alt="" class="icon">
      <span></span>
    </div>
    <div class="menu_listen menu_item" @click="$emit('listen')">
      <img src="../assets/listen.png" alt="" class="icon">
      <span></span>
    </div>
    <div class="menu_watch menu_item" @click="$emit('watch')">
      <img src="../assets/watch.png" alt="" class="icon">
      <span></span>
    </div>
    <div class="menu_download menu_item" @click="$emit('download')">
      <img src="../assets/download.png" alt="" class="icon">
      <span></span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'BookHeader',
  props: ['bookName', 'bookImage']
}
</script>

<style lang="sass">
.header
  width: 100%
  position: relative
  &_image
    background-color: #979797
    width: 100%
    height: 350px
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
.icon
  width: 60px
  height: 60px
  filter: invert(1)
  transition: all 0.3s
  &:hover
    transform: scale(1.3)
</style>
