<template>
<div class="header">
  <div class="header_image">
    <img :src="bookImage" alt="">
    <span>{{bookName}}</span>
  </div>
  <div class="menu">
    <div class="menu_read menu_item">
      <img src="../assets/read.png" alt="" class="icon">
      <span></span>
    </div>
    <div class="menu_listen menu_item">
      <img src="../assets/listen.png" alt="" class="icon">
      <span></span>
    </div>
    <div class="menu_watch menu_item">
      <img src="../assets/watch.png" alt="" class="icon">
      <span></span>
    </div>
    <div class="menu_download menu_item">
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
  &_image
    width: 1300px
    height: 350px
.menu
  width: 1300px
  display: flex
  justify-content: space-around
  &_item
    align-items: center
.icon
  width: 60px
  height: 60px
</style>
