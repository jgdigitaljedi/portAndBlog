<template>
  <div
    class="nav-wrapper"
    :class="{'mario-wrapper': fullPath === '/blog', 'bond-wrapper': fullPath === '/about'}"
  >
    <v-toolbar
      dark
      class="nav"
      :class="{'mario-theme': fullPath === '/blog', 'bond-theme': fullPath === '/about'}"
    >
      <v-toolbar-title color="#000" class="nav__brand">
        <nuxt-link to="/">
          <img class="nav__brand--image" :src="jgLogo" alt="JG for Joey Gauthier in the Sega font">
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <img
        src="~/assets/images/navbar/pacman_cherries.png"
        @click.stop="drawer = !drawer"
        class="pacman-cherries hidden-md-and-up"
        alt="cherries from the Pacman game"
      >
      <v-toolbar-items class="nav__items hidden-sm-and-down" v-if="isMounted">
        <div v-for="(link, index) in links" :key="link.title" class="nav-items__link-wrapper">
          <nuxt-link :to="link.to" class="nav-link">
            <img
              :src="fullPath === '/blog' ? link.mario : (fullPath === '/about' ? link.bond : link.icon)"
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
                  :class="{'current': currentSelectedRoute === link.to, 'mario-text': fullPath === '/blog', 'bond-text': fullPath === '/about'}"
                >{{link.title}}</div>
              </div>
            </label>
          </nuxt-link>
          <div class="nav__power-pellet" v-if="index < links.length - 1">
            <img
              :src="((fullPath === '/blog') ? pellets.mario : (fullPath === '/about' ? pellets.bond : pellets.pacman))"
            >
            <img
              :src="((fullPath === '/blog') ? pellets.mario : (fullPath === '/about' ? pellets.bond : pellets.pacman))"
            >
            <!-- <img :src="((fullPath === '/blog') ? pellets.mario : pellets.pacman)"> -->
            <!-- <img src="~/assets/images/navbar/power-pellet.png" alt="Pacman power pellet"> -->
          </div>
        </div>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute temporary class="mobile-nav">
      <div class="mobile-nav__title">
        <img class="nav__brand--image" :src="jgLogo" alt="JG for Joey Gauthier in the Sega font">
      </div>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.title" class="mobile-nav__link-wrapper">
          <img :src="link.icon" alt>
          <nuxt-link :to="link.to" class="nav-link">
            <label class="nav-link__tile">
              <div class="nav-link__tile--text-wrapper">
                <div class="nav-link__tile--selected" v-if="currentSelectedRoute === link.to"></div>
                <div
                  class="nav-link__tile--text"
                  :class="{'current': currentSelectedRoute === link.to}"
                >{{link.title}}</div>
              </div>
            </label>
          </nuxt-link>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      currentSelectedRoute: 'home',
      drawer: false,
      isMounted: false,
      fullPath: null,
      jgLogo: require('~/assets/images/navbar/JG.png'),
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
          bond: require('~/assets/images/navbar/golden_gun.png')
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
  },
  mounted() {
    this.isMounted = true;
  },
  methods: {
    handleRouteChange(path) {
      this.fullPath = path;
      if (path === '/blog') {
        this.jgLogo = this.jgLogos.mario;
      } else if (path === '/about') {
        this.jgLogo = this.jgLogos.bond;
      } else {
        this.jgLogo = this.jgLogos.pacman;
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
  &.mario-wrapper {
    border: none;
    background-color: $mario-ground;
  }
  &.bond-wrapper {
    border: none;
    background-color: $bond-dossier;
  }
  .nav {
    width: calc(100% - 1rem);
    height: 6rem;
    border: 2px solid $pacman-purple;
    border-radius: 4px;
    background-color: #000 !important;
    background: #000;
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
      max-height: 5rem;
      width: auto;
      z-index: 4;
    }
    .v-toolbar__content {
      height: 6rem !important;
    }
    .nav__brand {
      .nav__brand--image {
        height: 5rem;
        width: 7rem;
        animation: 0.5s ease-out 0s 1 fade-in;
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
            width: 1rem;
            height: 1rem;
            margin-right: 1rem;
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
  .mobile-nav {
    z-index: 50;
    .v-list.theme--dark {
      background: transparent;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: center;
    }
    .mobile-nav__link-wrapper {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      img {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
    .nav-link {
      z-index: 3;
      color: $white;
      text-decoration: none;
      margin-right: 1rem;
      margin-bottom: -0.6rem;
      .nav-link__tile {
        margin-bottom: 0;
      }
      &:visited {
        .nav-link__tile .nav-link__tile--icon,
        .nav-link__tile .nav-link__tile--text {
          color: $yellow;
        }
      }
      &:active {
        .nav-link__tile .nav-link__tile--icon,
        .nav-link__tile .nav-link__tile--text {
          color: $danger;
        }
      }
      &:hover .nav-link__tile {
        transform: scale(1.2);
      }
      .nav-link__tile {
        transition: all 0.3s;
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
            left: 1rem;
            top: 0.3rem;
          }
          .nav-link__tile--text {
            font-size: 1.5rem;
            font-family: $game-font;
            margin-left: 2rem;
            &.current {
              color: $light;
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
  .mobile-nav {
    padding: 1em;
    border-right: 2px solid $pacman-purple;
    .mobile-nav__title {
      display: flex;
      width: 100%;
      align-items: center;
      flex-direction: column;
      padding: 1rem;
      border: 2px solid $pacman-purple;
      background-color: black;
      img {
        width: 7rem;
        height: 5rem;
      }
    }
  }
}
</style>