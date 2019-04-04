<template>
  <div
    class="nav-wrapper"
    :class="{'mario-wrapper': fullPath === '/blog', 'bond-wrapper': fullPath === '/about', 'scrolled': scrolled}"
  >
    <BlogScrollProgress
      v-if="currentSelectedRoute === '/blog' && fullPath !== '/blog/coding' && fullPath !== '/blog/gaming'"
      class="blog-scroll"
    ></BlogScrollProgress>
    <v-toolbar
      dark
      class="nav"
      :class="{'mario-theme': fullPath === '/blog', 'bond-theme': fullPath === '/about', 'scrolled': scrolled}"
    >
      <v-toolbar-title color="#000" class="nav__brand">
        <nuxt-link to="/">
          <img
            class="nav__brand--image"
            :src="jgLogo"
            alt="JG for Joey Gauthier in the Sega font"
            :class="{'scrolled': scrolled}"
          >
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <img
        :src="mobileButton"
        @click.stop="openMobileNav()"
        class="pacman-cherries hidden-md-and-up"
        :class="{'scrolled': scrolled}"
        alt="cherries from the pacman video game being used as a mobile navigation button"
      >
      <v-toolbar-items class="nav__items hidden-sm-and-down" v-if="isMounted">
        <div v-for="(link, index) in links" :key="link.title" class="nav-items__link-wrapper">
          <nuxt-link :to="link.to" class="nav-link">
            <img
              :src="fullPath === '/blog' ? link.mario : (fullPath === '/about' ? link.bond : link.icon)"
              :class="{'scrolled': scrolled}"
            >
            <label class="nav-link__tile">
              <div class="nav-link__tile--text-wrapper">
                <div
                  class="nav-link__tile--selected"
                  v-if="currentSelectedRoute === link.to"
                  :class="{'mario-selected': fullPath === '/blog', 'bond-selected': fullPath === '/about'}"
                ></div>
                <div
                  class="nav-link__tile--text"
                  :class="{'current': currentSelectedRoute === link.to, 'mario-text': fullPath === '/blog', 'bond-text': fullPath === '/about', 'scrolled': scrolled}"
                >{{link.title}}</div>
              </div>
            </label>
          </nuxt-link>
          <div class="nav__power-pellet" v-if="index < links.length - 1">
            <img
              :src="((fullPath === '/blog') ? pellets.mario : (fullPath === '/about' ? pellets.bond : pellets.pacman))"
              :class="{'scrolled': scrolled}"
              :alt="fullPath === '/blog' ? 'coin from Mario Bros game' : (fullPath === '/about' ? 'bullet hole' : 'power pellet from pacman game')"
            >
            <img
              :src="((fullPath === '/blog') ? pellets.mario : (fullPath === '/about' ? pellets.bond : pellets.pacman))"
              :class="{'scrolled': scrolled}"
              :alt="fullPath === '/blog' ? 'coin from Mario Bros game' : (fullPath === '/about' ? 'bullet hole' : 'power pellet from pacman game')"
            >
          </div>
        </div>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import BlogScrollProgress from '~/components/blogScrollProgress.vue';

export default {
  name: 'NavBar',
  components: { BlogScrollProgress },
  data() {
    return {
      scrolled: false,
      currentSelectedRoute: 'home',
      drawer: false,
      isMounted: false,
      fullPath: null,
      jgLogo: require('~/assets/images/navbar/JG.png'),
      mobileButtonObj: {
        pacman: require('~/assets/images/navbar/pacman_cherries.png'),
        mario: require('~/assets/images/mario/small-mario.png'),
        bond: require('~/assets/images/navbar/8bit_gun.png')
      },
      mobileButton: require('~/assets/images/navbar/pacman_cherries.png'),
      pellets: {
        pacman: require('~/assets/images/navbar/power-pellet.png'),
        mario: require('~/assets/images/mario/mario_coin.png'),
        bond: require('~/assets/images/navbar/bullet_hole.png')
      },
      links: [
        {
          title: 'Home',
          to: '/',
          icon: require('~/assets/images/navbar/pacman.png'),
          mario: require('~/assets/images/mario/small-mario.png'),
          bond: require('~/assets/images/navbar/8bit_gun.png')
        },
        {
          title: 'Blog',
          to: '/blog',
          icon: require('~/assets/images/navbar/ghost_red.png'),
          mario: require('~/assets/images/mario/mario_shroom.png'),
          bond: require('~/assets/images/navbar/goldeneye_watch.png')
        },
        {
          title: 'About',
          to: '/about',
          icon: require('~/assets/images/navbar/ghost_blue.png'),
          mario: require('~/assets/images/mario/mario_pipe.png'),
          bond: require('~/assets/images/navbar/n64.png')
        }
        // { title: 'VG', to: '/videogames' }
      ],
      jgLogos: {
        pacman: require('~/assets/images/navbar/JG.png'),
        mario: require('~/assets/images/navbar/JG_mario.png'),
        bond: require('~/assets/images/navbar/JG_bond.png')
      }
    };
  },
  created() {
    this.handleRouteChange(this.$route.path);
    this.$store.dispatch('resetNav');
  },
  mounted() {
    this.isMounted = true;
  },
  computed: {
    scrollPos() {
      return this.$store.getters.getScroll;
    }
  },
  methods: {
    openMobileNav() {
      this.drawer = !this.drawer;
      this.$store.commit('toggleMobileNav');
    },
    handleScroll() {
      this.scrolled = this.scrollPos > 0;
    },
    handleRouteChange(path) {
      this.drawer = false;
      this.$store.commit('navReset');
      this.fullPath = path;
      if (path === '/blog') {
        this.jgLogo = this.jgLogos.mario;
        this.mobileButton = this.mobileButtonObj.mario;
      } else if (path === '/about') {
        this.jgLogo = this.jgLogos.bond;
        this.mobileButton = this.mobileButtonObj.bond;
      } else {
        this.jgLogo = this.jgLogos.pacman;
        this.mobileButton = this.mobileButtonObj.pacman;
      }
      this.currentSelectedRoute = path;
      if (path.indexOf('/blog') >= 0) {
        this.currentSelectedRoute = '/blog';
      } else {
        this.currentSelectedRoute = path;
      }
    }
  },
  watch: {
    '$route.path': {
      handler(path) {
        this.handleRouteChange(path);
      },
      deep: true,
      immediate: true
    },
    scrollPos(state) {
      this.handleScroll();
    }
  }
};
</script>

<style lang="scss">
@import '~/assets/style/theme.scss';
$mario-ground: #b72504;
$mario-sky: #6185f8;
$mario-letters: #eeaf36;
$bond-dossier: rgb(209, 210, 165);

@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.nav-wrapper {
  background-color: transparent;
  width: 100%;
  height: 7rem;
  border: 2px solid $pacman-purple;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  transition: all 0.4s ease-in 0.4s;
  &.scrolled {
    height: 3.5rem;
    border: none;
  }
  &.mario-wrapper {
    border: none;
    background-color: $mario-ground;
  }
  &.bond-wrapper {
    border: none;
    background-color: $bond-dossier;
  }
  .blog-scroll {
    position: absolute;
    bottom: -4px;
    left: 0;
    z-index: 800;
  }
  .nav {
    width: calc(100% - 1rem);
    height: 6rem;
    border: 2px solid $pacman-purple;
    border-radius: 4px;
    background-color: #000 !important;
    background: #000;
    transition: all 0.4s ease-in 0.4s;
    &.scrolled {
      height: 3.5rem !important;
      border: none;
      .v-toolbar__content {
        height: 3.5rem !important;
      }
    }
    &.mario-theme {
      border: none;
      border-radius: 0;
      background-color: $mario-ground !important;
      box-shadow: none;
    }
    &.bond-theme {
      border: none;
      border-radius: 0;
      background-color: $bond-dossier !important;
      box-shadow: none;
    }
    .pacman-cherries {
      height: 5rem;
      width: auto;
      z-index: 4;
      transition: all 0.4s ease-out 0.8s;
      &.scrolled {
        transition: height 0.4s ease-out;
        height: 3.5rem;
      }
    }
    .v-toolbar__content {
      height: 6rem !important;
      transition: height 0.4s ease-in 0.4s;
    }
    .nav__brand {
      .nav__brand--image {
        height: 5rem;
        width: 7rem;
        animation: 0.5s ease-out 0s 1 fade-in;
        transition: all 0.4s ease-out 0.8s;
        &.scrolled {
          transition: all 0.4s ease-out;
          height: 2.5rem;
          width: 3.5rem;
          margin-top: 0.3rem;
        }
      }
    }
    .nav__items {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      animation: 0.5s ease-out 0s 1 fade-in;
      .nav-items__link-wrapper {
        display: flex;
        .nav__power-pellet {
          display: flex;
          align-items: center;
          img {
            transition: all 0.4s ease-out 0.8s;
            width: 1rem;
            height: 1rem;
            margin-right: 1rem;
            &.scrolled {
              transition: all 0.4s ease-out;
              height: 0;
              opacity: 0;
            }
          }
        }
        .nav-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 3;
          color: $white;
          text-decoration: none;
          font-family: $game-font;
          margin-right: 1rem;
          &:visited {
            color: $yellow;
          }
          &:active {
            color: $danger;
          }
          img {
            height: 3rem;
            width: 3rem;
            opacity: 1;
            transition: all 0.4s ease-out 0.8s;
            &.scrolled {
              transition: all 0.4s ease-out;
              height: 0;
              width: 0;
              opacity: 0;
            }
          }
          .nav-link__tile {
            margin-bottom: -0.75rem;
            .nav-link__tile--text-wrapper {
              display: flex;
              position: relative;
              .nav-link__tile--selected {
                width: 0;
                height: 0;
                border-top: 0.65rem solid transparent;
                border-bottom: 0.65rem solid transparent;
                border-left: 0.75rem solid $light;
                margin-right: 2rem;
                position: absolute;
                left: -1rem;
                top: 0.2rem;
                &.mario-selected,
                &.bond-selected {
                  border-left: 0.75rem solid #fff;
                }
              }
              .nav-link__tile--text {
                font-family: $game-font;
                transition: all 0.6s ease-out;
                &.current {
                  color: $light;
                }
                &.mario-text {
                  color: $mario-letters;
                }
                &.mario-text.current {
                  color: #fff;
                }
                &.bond-text {
                  color: lighten($black, 15%);
                }
                &.bond-text.current {
                  color: #fff;
                }
              }
              &:hover {
                .nav-link__tile--selected {
                  animation: blink normal 1s infinite;
                }
              }
            }
          }
        }
      }
    }
    .mobile-hamburger {
      z-index: 4;
    }
  }
}
</style>