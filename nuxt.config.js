export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'web-portfolio-nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/index.css', '~/assets/css/fonts.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/fontawesome',
    '@nuxtjs/google-fonts',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/axios',
    [
      'storyblok-nuxt',
      {
        accessToken: process.env.STORYBLOK_API_TOKEN,
        cacheProvider: 'memory',
      },
    ],
    [
      '@nuxtjs/markdownit',
      {
        html: true,
        runtime: true,
        injected: true,
        linkify: true,
        breaks: true,
      },
    ],
  ],

  svgSprite: {
    input: '~/assets/sprite/svg/',
  },

  googleFonts: {
    download: true,
    families: {
      Poppins: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        ital: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
  },

  fontawesome: {
    icons: {
      brands: ['faInstagram', 'faTwitter', 'faLinkedin'],
      solid: ['faFileDownload', 'faMoon'],
      regular: ['faEnvelope', 'faSun'],
    },
  },

  robots: {
    UserAgent: '*',
    Disallow: '',
  },

  sitemap: {
    hostname: 'https://nickypangers.com',
    gzip: true,
    exclude: [],
  },

  publicRuntimeConfig: {
    storyblokApiToken: process.env.STORYBLOK_API_TOKEN,
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
