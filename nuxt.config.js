const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
const pkg = require('./package');
import Coding from './content/directory/coding';
import Gaming from './content/directory/gaming';

const codingArr = Coding().map(item => `/blog/coding/${item.slug}`);
const gamingArr = Gaming().map(item => `/blog/gaming/${item.slug}`);

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
          'Joey Gauthier, Paul Gauthier, JGDigitalJedi, front end portfolio, Austin developers, JavaScript, Vue, Angular, Nintendo, Sega, Playstation, Xbox'
      },
      { hid: 'image', name: 'image', content: '/images/me_8bit_scanlines.jpg' },
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
      { hid: 'twitter:image', name: 'twitter:image', content: '/images/me_8bit_scanlines.jpg' },
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
      { hid: 'og:image', name: 'og:image', content: '/images/me_8bit_scanlines.jpg' },
      { hid: 'og:url', name: 'og:url', content: 'https://joeyg.me' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'JoeyG.me' },
      { hid: 'og:type', name: 'og:type', content: 'website' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' }]
  },

  /** PWA manifest */
  manifest: {
    name: `Joey Gauthier's Portfolio & Blog`,
    short_name: `Joey G P&B`,
    background_color: '#1f5673'
  },

  /** Icon path for multiple icon generation */
  icon: {
    iconSrc: 'static/mario_block_full.png'
  },

  /** Generate routes for blog posts so they load on refresh and have direct routes */
  generate: {
    routes: [...codingArr, ...gamingArr]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#f0a202' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl',
    { src: '~/node_modules/nes.css/scss/nes', lang: 'sass' },
    { src: '~/node_modules/highlight.js/styles/solarized-dark', lang: 'css' },
    '~/assets/style/fonts.css'
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
    'nuxt-purgecss',
    [
      'nuxt-imagemin',
      {
        optipng: { optimizationLevel: 3 },
        gifsicle: { optimizationLevel: 2 },
        jpegtran: { progressive: false },
        svgo: {}
      }
    ],
    [
      '@nuxtjs/google-analytics',
      {
        id: process.env.PORT_GA_KEY
      }
    ],
    [
      'nuxt-netlify-http2-server-push',
      {
        // Specify relative path to the dist directory and its content type
        resources: [
          { path: '**/*.js', as: 'script' },
          { path: 'images/**.jpg', as: 'image' },
          { path: 'images/**.png', as: 'image' },
          { path: 'images/**.svg', as: 'image' },
          { path: 'images/**.gif', as: 'image' },
          { path: '**.png', as: 'image' },
          { path: '**.jpg', as: 'image' },
          { path: '**.svg', as: 'image' },
          { path: '**.gif', as: 'image' },
          { path: 'fonts/*.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }
        ]
      }
    ],
    '@nuxtjs/sitemap'
  ],

  /** Sitemap generation */
  sitemap: {
    path: '/sitemap.xml',
    generate: true,
    hostname: 'https://joeyg.me',
    routes: [...codingArr, ...gamingArr]
  },

  /** Markdownit config for processing blogs */
  markdownit: {
    injected: true,
    use: ['markdown-it-highlightjs']
  },

  /** Web font loader to asynchronously load web fonts */
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
