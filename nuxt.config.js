import config from './config'


export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Телерадиокомпания "Гомель"',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'assets/styles/root.scss',
    'assets/styles/grid.scss',
    'assets/styles/ui.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '~plugins/nuxt-video-player-plugin.js', ssr: false }
    {src: '@/plugins/swiper', mode: 'client'},
    { src: '@/plugins/vue-plyr', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxt/image',
    'nuxt-svg-loader',
    'vue-social-sharing/nuxt',
    ['nuxt-gmaps', {
      key: 'AIzaSyDw-OnFKGZhozQ5RblsdK7ogE5PLJtS5pI',
    }],
    '@nuxtjs/i18n'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  styleResources: {
    scss: ['assets/styles/variables.scss']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  router: {
    middleware: ['class']
  },

  image: {
    provider: 'api',
    api: {
      baseURL: config.APIserver
    },
    presets: {
      postCard: {
        modifiers: {
          format: 'webp',
          quality: 85,
          width: 290,
          height: 195
        }
      }
    }
  },

  svgLoader: {
    svgoConfig: {
      plugins: [
        {
          addClassesToSVGElement: {
            className: "svg-inline"
          }
        }
      ]
    }
  },

  i18n: {
    locales: [
      {
        code: 'ru',
        name: 'Рус'
      },
      {
        code: 'by',
        name: 'Бел'
      },
    ],
    defaultLocale: 'ru',
    vueI18n: {
      fallbackLocale: 'ru',
    },
    vueI18nLoader: true
  }
}
