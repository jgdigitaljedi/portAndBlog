const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
import PurgeCssPlugin from 'purgecss-webpack-plugin';
const pkg = require('./package');
const fs = require('fs');
const path = require('path');
const glob = require('glob-all');
const autoprefixer = require('autoprefixer');
const marked = require('marked');
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
    title: 'Joey Gauthier | Portfolio, Video Game Blog, & Coding Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `The portfolio, retro gaming blog, and coding blog of Joey Gauthier`
      },
      { hid: 'author', name: 'author', content: `Joey Gauthier` },
      {
        hid: 'keywords',
        name: 'keywords',
        content: `Joey Gauthier,Paul Gauthier,JGDigitalJedi,retro games,web developer portfolio examples,Austin developers,JavaScript,Vue,Angular,Nintendo,Playstation,Xbox,retro collecting`
      },
      {
        hid: 'image',
        name: 'image',
        content:
          'https://res.cloudinary.com/https-joeyg-me/image/upload/v1552518203/me_8bit_scanlines.jpg'
      },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Joey Gauthier | Portfolio, Video Game Blog, & Coding Blog'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: `The portfolio, gaming blog, and coding blog of Joey Gauthier`
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@JGDigitalJedi' },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@JGDigitalJedi'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content:
          'https://res.cloudinary.com/https-joeyg-me/image/upload/v1552518203/me_8bit_scanlines.jpg'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Joey Gauthier | Portfolio, Video Game Blog, & Coding Blog'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: `The portfolio, gaming blog, and coding blog of Joey Gauthier`
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content:
          'https://res.cloudinary.com/https-joeyg-me/image/upload/v1552518203/me_8bit_scanlines.jpg'
      },
      { hid: 'og:url', name: 'og:url', content: 'https://joeyg.me' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'JoeyG.me' },
      { hid: 'og:type', name: 'og:type', content: 'website' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' }]
  },

  /** PWA manifest */
  manifest: {
    name: 'Joey Gauthier | Portfolio, Video Game Blog, & Coding Blog',
    short_name: `Joey G | P&B`,
    background_color: '#000'
  },

  /** Icon path for multiple icon generation */
  icon: {
    iconSrc: 'static/mario_block_full.png'
  },

  /** Generate routes for blog posts so they load on refresh and have direct routes */
  generate: {
    routes: [...codingArr, ...gamingArr]
  },

  /** forcing scroll to top on route change */
  router: {
    scrollBehavior: function(to, from, savedPosition) {
      return { x: 0, y: 0 };
    }
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#4d00b9' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl',
    { src: '~/node_modules/highlight.js/styles/solarized-dark', lang: 'css' },
    '~/assets/style/fonts.css',
    '~/assets/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['@/plugins/vuetify', '~/plugins/blog', '~/plugins/SocialSharing'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // '@nuxtjs/onesignal',
    '@nuxtjs/pwa',
    '@nuxtjs/markdownit',
    'nuxt-webfontloader',
    '@nuxtjs/dotenv',
    '@nuxtjs/feed',
    'cookie-universal-nuxt',
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
          { path: '_nuxt/img/**.jpg', as: 'image' },
          { path: '_nuxt/img/**.png', as: 'image' },
          { path: '_nuxt/img/**.svg', as: 'image' },
          { path: '_nuxt/img/**.gif', as: 'image' },
          { path: 'images/cursors/**.png', as: 'image' },
          { path: '**.png', as: 'image' },
          { path: '**.jpg', as: 'image' },
          { path: '**.svg', as: 'image' },
          { path: '**.gif', as: 'image' },
          { path: 'fonts/*.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
          { path: 'fonts/*.woff', as: 'font', type: 'font/woff', crossorigin: 'anonymous' },
          { path: '_nuxt/fonts/*.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
          { path: '_nuxt/fonts/*.woff', as: 'font', type: 'font/woff', crossorigin: 'anonymous' }
        ]
      }
    ],
    '@nuxtjs/sitemap'
  ],

  workbox: {
    runtimeCaching: [{ urlPattern: 'https://res.cloudinary.com/https-joeyg-me/*' }]
  },

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
      families: ['Lato:400,900', 'Press+Start+2P', 'Raleway:800']
    }
  },

  /** RSS, ATOM, and JSON feed config */
  feed: async () => {
    const gCopy = Gaming();
    const cCopy = Coding();
    return [
      {
        path: '/RSSfeed_gaming.xml',
        async create(feed) {
          feed.options = {
            title: `Gaming Blog of the Digital Jedi`,
            link: `https://joeyg.me/blog/gaming`,
            description: `The documented gaming journey of an old school gamer and newbie retro game collector learning the ways of the Jedi`
          };

          feed.addCategory('Video Games');

          feed.addContributor({
            name: 'Joey Gauthier',
            email: 'joey@joeg.me',
            link: 'https://joeyg.me'
          });

          gCopy.forEach(post => {
            const postMd = fs.readFileSync(
              path.resolve(__dirname, `content/posts/gaming/${post.id}.md`),
              'utf8'
            );
            const content = marked(postMd, {
              breaks: true,
              gfm: true,
              smartypants: true
            });
            feed.addItem({
              title: post.title,
              id: post.id,
              date: new Date(post.created_at),
              link: `https://joeyg.me/blog/gaming/${post.slug}`,
              description: post.intro,
              content
            });
          });
        },
        cacheTime: 1000 * 60 * 15,
        type: 'rss2'
      },
      {
        path: '/RSSfeed_coding.xml',
        async create(feed) {
          feed.options = {
            title: `Coding Blog of the Digital Jedi`,
            link: `https://joeyg.me/blog/coding`,
            description: `Personal programming ramblings of a JavaScript Jedi covering topics ranging from application architecture to his hatred for CSS`
          };

          feed.addCategory('Programming');

          feed.addContributor({
            name: 'Joey Gauthier',
            email: 'joey@joeg.me',
            link: 'https://joeyg.me'
          });

          cCopy.forEach(post => {
            const postMd = fs.readFileSync(
              path.resolve(__dirname, `content/posts/coding/${post.id}.md`),
              'utf8'
            );
            const content = marked(postMd, {
              breaks: true,
              gfm: true,
              smartypants: true
            });
            feed.addItem({
              title: post.title,
              id: post.id,
              date: new Date(post.created_at),
              link: `https://joeyg.me/blog/coding/${post.slug}`,
              description: post.intro,
              content
            });
          });
        },
        cacheTime: 1000 * 60 * 15,
        type: 'rss2'
      }
    ];
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
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    postcss: [autoprefixer],

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
      } else {
        config.plugins.push(
          new PurgeCssPlugin({
            paths: glob.sync([
              path.join(__dirname, 'components/**/*.vue'),
              path.join(__dirname, 'layouts/**/*.vue'),
              path.join(__dirname, 'pages/**/*.vue'),
              path.join(__dirname, 'pages/**/**/*.vue'),
              path.join(__dirname, 'pages/**/**/**/*.vue'),
              path.join(__dirname, 'plugins/**/*.vue'),
              path.join(__dirname, '../node_modules/vuetify/dist/**.min.js'),
              path.join(__dirname, '../node_modules/vuetify/dist/**.min.css')
            ]),
            styleExtensions: ['.css'],
            whitelist: ['body', 'html', 'nuxt-progress'],
            whitelistPatterns: [
              /cookie-consent/,
              /(v_).*/,
              /(v-).*/,
              /(util__).*/,
              /(theme--dark).*/,
              /(spacer).*/,
              /(application).*/,
              /(app-wrapper).*/,
              /(hljs).*/,
              /(page-enter).*/,
              /(page-leave).*/,
              /(image-dialog).*/
            ],
            extractors: [
              {
                extractor: class {
                  static extract(content) {
                    return content.match(/[A-z0-9-:\\/]+/g);
                  }
                },
                extensions: ['vue', 'js']
              }
            ]
          })
        );
      }
      // bit if I want lazy load tags to work; experiment I may come back to
      // const vueLoader = config.module.rules.find(rule => rule.loader === 'vue-loader');
      // vueLoader.options.transformToRequire = {
      //   video: 'src',
      //   source: 'src',
      //   img: ['src', 'data-src']
      // };
      config.module.rules.push({
        test: /\.mp3$/,
        loader: 'file-loader'
      });
    }
  }
};
