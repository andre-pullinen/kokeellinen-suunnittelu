<template>
  <div class="locales">
    <div v-wave
         :class="`locale --lang-${lang.key} ${$i18n.locale === lang.key ? '--current' : ''}`"
         v-for="(lang, i) in langs" :key="`lang-${i}`"
         @click="() => switchLocale(lang)"
    >
      <img :src="require(`../assets/${lang.key}.png`)" alt="" class="locale_img">
      <span class="locale_name">{{ lang.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
  data () {
    return { langs: [{ key: 'ru', name: 'русский' }, { key: 'fi', name: 'suomi' }] }
  },
  methods: {
    switchLocale (lang) {
      localStorage.setItem('lang', lang.key)
      this.$i18n.locale = lang.key
    }
  }
}
</script>

<style lang="sass">
.locales
  display: flex
  color: #000004
  flex: 1
  align-items: flex-start
  justify-content: space-evenly
.locale
  display: flex
  align-items: center
  cursor: pointer
  padding: 10px 20px
  border-radius: 5px
  &_img
    width: 30px
    height: 30px
    margin: 0 10px 0 0
.--current span
  font-weight: bold
</style>
