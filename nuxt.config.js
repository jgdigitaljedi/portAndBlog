const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
const pkg = require('./package');

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "Joey Gauthier's Portfolio",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'Joey Gauthier, Paul Gauthier, JGDigitalJedi, front end portfolio, Austin developers'
      },
      { hid: 'image', name: 'image', content: '' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: "Joey Gauthier's Portfolio"
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: pkg.description
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@JGDigitalJedi' },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@JGDigitalJedi'
      },
      { hid: 'twitter:image', name: 'twitter:image', content: '' },
      {
        hid: 'og:title',
        name: 'og:title',
        content: "Joey Gauthier's Portfolio"
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: pkg.description
      },
      { hid: 'og:image', name: 'og:image', content: '' },
      { hid: 'og:url', name: 'og:url', content: 'https://joeyg.me' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'JoeyG.me' },
      { hid: 'og:type', name: 'og:type', content: 'website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' }
      // {
      //   rel: 'stylesheet',
      //   href:
      //     'https://fonts.googleapis.com/css?family=Lato:400,900|Raleway:400,800|family=Press+Start+2P'
      // },
      // {
      //   rel: 'stylesheet',
      //   href: 'https://unpkg.com/nes.css@1.0.0/css/nes.min.css'
      // }
    ]
  },

  manifest: {
    name: `Joey Gauthier's Portfolio & Blog`,
    short_name: `Joey G P&B`,
    background_color: '#1f5673'
  },

  icon: {
    iconSrc: 'static/mario_block_full.png'
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#f0a202' },

  // generate: {
  //   routes: ['/blog/coding/test-coding-blog', '/blog/gaming/test-gaming-blog']
  // },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl',
    { src: '~/node_modules/nes.css/scss/nes', lang: 'sass' },
    { src: '~/node_modules/highlight.js/styles/solarized-dark', lang: 'css' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['@/plugins/vuetify', '~/plugins/blog'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/markdownit',
    'nuxt-webfontloader',
    '@nuxtjs/dotenv',
    '@nuxtjs/sitemap'
    // [ // setup GA online and put ID here when done; not worried about it ATM
    //   '@nuxtjs/google-analytics',
    //   {
    //     id: 'UA-12301-2'
    //   }
    // ]
  ],
  markdownit: {
    injected: true,
    use: ['markdown-it-highlightjs']
  },
  webfontloader: {
    google: {
      families: ['Lato:400,900', 'Raleway:400,800', 'Press+Start+2P']
    }
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
      config.module.rules.push({
        test: /\.mp3$/,
        loader: 'file-loader'
      });
    }
  }
};
