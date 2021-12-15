<template>
<div class="header">
  <div class="header_name">
    <span v-wave class="header_name-text" @click="$router.push({ name: 'Home' })">Anastasiia Pullinen</span>
  </div>
  <div class="header_logo">
    <img src="../assets/logo.png" alt="logo" class="logo_img" v-if="$route.name === 'Home'">
    <p class="logo_text" v-if="$route.name === 'Home'">{{ $t('home.welcome') }}</p>
  </div>
  <language-switcher />
</div>
</template>

<script>
import LanguageSwitcher from '@/components/LanguageSwitcher'
export default {
  name: 'Header',
  components: { LanguageSwitcher }
}
</script>

<style lang="sass">
@keyframes rotation
  100%
    transform: rotate(360deg)
.header
  margin: 40px 0
  display: flex
  justify-content: space-around
  width: 80%
  &_name
    color: #0C6291
    flex: 1
    padding: 10px
    margin: -10px
    text-align: left
    vertical-align: middle
    &-text
      padding: 10px
      margin: 10px
      cursor: pointer
      display: inline-block
  &_logo
    position: relative
    flex: 2
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
</style>
