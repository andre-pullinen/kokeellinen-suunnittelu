import VueI18n from 'vue-i18n'
import Vue from 'vue'

Vue.use(VueI18n)

// index.js
/**
 * Automatically imports all the modules and exports as a single module object
 */
const requireModule = require.context('.', true, /^\.\/[a-z]{2}$/i)
const modules = {}

function detectLanguage () {
  const lng = window.navigator.userLanguage || window.navigator.language
  const lang = requireModule
    .keys()
    .find((key) => lng.includes(key.replace(/(\.\/)/g, '')))
  return lang ? lang.replace(/(\.\/)/g, '') : null
}

requireModule.keys().forEach(filename => {
  console.log(filename)
  const moduleName = filename
    .replace(/(\.\/|\.locale\.json)/g, '')
    .replace(/^\w/, c => c)

  modules[moduleName] = requireModule(filename).default || requireModule(filename)
})

console.log(Object.assign(modules))

export const i18n = new VueI18n({
  locale:
    localStorage.getItem('lang') ||
    detectLanguage() ||
    'ru',
  fallbackLocale: 'ru',
  messages: Object.assign(modules)
})
