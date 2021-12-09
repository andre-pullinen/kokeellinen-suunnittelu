<template>
<div class="header">
  <div class="header_name">Anastasiia Pullinen</div>
  <div class="header_logo">
    <img src="../assets/logo.png" alt="logo" class="logo_img">
    <p class="logo_text">Сказки на ночь</p>
  </div>
  <div class="header_lang">
    <div class="lang --lang-fi">
      <img src="../assets/fi.png" alt="" class="lang_img">
      <span>suomi</span>
    </div>
    <div class="lang --lang-ru">
      <img src="../assets/ru.png" alt="" class="lang_img">
      <span>русский</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="sass">
@keyframes rotation
  100%
    transform: rotate(360deg)
.header
  margin-top: 40px
  display: flex
  justify-content: space-around
  &_name
    color: #0C6291
    margin: 0
    flex: 1
  &_logo
    position: relative
    flex: 2
  &_lang
    display: flex
    color: #000004
    flex: 1
    align-items: flex-start
    justify-content: space-evenly
.logo
  &_img
    width: 484px
    height: 404px
    animation: rotation 40s linear infinite
  &_text
    transform: translate(-50%, -50%)
    left: 50%
    top: 50%
    position: absolute
    color: #0c6291
    font-size: 30px
    font-weight: bold
    text-transform: uppercase
    width: 130px
    margin: 0
.lang
  display: flex
  align-items: center
  &_img
    width: 30px
    height: 30px
    margin: 0 10px
</style>
