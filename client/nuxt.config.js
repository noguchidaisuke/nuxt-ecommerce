import colors from 'vuetify/es5/util/colors'

const URL = process.env.NODE_ENV !== 'production' ? 'http://localhost:4000' : "https://server-89jy2g3yo.now.sh"

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    script: [{ src: "https://js.stripe.com/v3" }],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'image/x-icon', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css' },
      { rel: 'stylesheet',  href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],

  plugins: [
    { src: "~/plugins/localStorage.js", ssr: false}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],

  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // 'nuxt-material-design-icons',
    '@nuxtjs/auth',
    '@nuxtjs/toast'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: URL
  },


  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            propertyName: "token"
          }
        }
      },
      logout: false
    }
  },

  toast: {
    // 右上にtoastを表示
    position: 'top-right',
    // 特に指定しなくても5秒で消えるように設定
    duration: 3000
  },
  /*
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.lightGreen.accent3
        }
      }
    }
  },

  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}