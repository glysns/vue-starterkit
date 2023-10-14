const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
<<<<<<< HEAD
  transpileDependencies: true
=======
  transpileDependencies: true,

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true
    }
  }
>>>>>>> 41492f8d62535e2cd11c379ab1f6214403cd94ff
})
