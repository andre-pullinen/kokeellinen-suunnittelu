// index.js
/**
 * Automatically imports all the modules and exports as a single module object
 */
const requireModule = require.context('.', false, /\.module\.json$/)
const modules = {}

requireModule.keys().forEach(filename => {
  const moduleName = filename
    .replace(/(\.\/|\.module\.json)/g, '')

  modules[moduleName] = requireModule(filename).default || requireModule(filename)
})

export default Object.assign(modules)
