export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/mariposas-madrid/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Las mariposas de Madrid',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Especies de mariposas diurnas que podemos encontrar en Madrid, y datos sobre su distribución en los parques de la ciudad.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      Cabin: [400, 600]
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    standalone: true
  }
}
