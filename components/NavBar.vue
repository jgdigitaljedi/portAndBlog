<template>
  <div class="nav-wrapper">
    <v-toolbar dark class="nav">
      <v-toolbar-title color="#000" class="nav__brand">
        <nuxt-link to="/">
          <img class="nav__brand--image" src="~/assets/images/navbar/JG.png">
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <img
        src="~/assets/images/navbar/pacman_cherries.png"
        @click.stop="drawer = !drawer"
        class="pacman-cherries hidden-md-and-up"
      >
      <v-toolbar-items class="nav__items hidden-sm-and-down">
        <div v-for="(link, index) in links" :key="link.title" class="nav-items__link-wrapper">
          <nuxt-link :to="link.to" class="nav-link">
            <img :src="link.icon">
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
          <div class="nav__power-pellet" v-if="index < links.length - 1">
            <img src="~/assets/images/navbar/power-pellet.png">
            <img src="~/assets/images/navbar/power-pellet.png">
          </div>
        </div>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute temporary class="mobile-nav">
      <div class="mobile-nav__title">
        <img class="nav__brand--image" src="~/assets/images/navbar/JG.png">
      </div>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.title" class="mobile-nav__link-wrapper">
          <img :src="link.icon">
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
      links: [
        { title: 'Home', to: '/', icon: require('~/assets/images/navbar/pacman.png') },
        { title: 'Blog', to: '/blog', icon: require('~/assets/images/navbar/ghost_red.png') }
        // { title: 'About', to: '/about' },
        // { title: 'Work', to: '/work' },
        // { title: 'VG', to: '/videogames' }
      ]
    };
  },
  created() {
    this.handleRouteChange(this.$route.path);
  },
  methods: {
    handleRouteChange(path) {
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

.nav-wrapper {
  background-color: transparent;
  width: 100%;
  height: 7rem;
  border: 2px solid $pacman-purple;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  .nav {
    width: calc(100% - 1rem);
    height: 6rem;
    border: 2px solid $pacman-purple;
    border-radius: 4px;
    background-color: #000 !important;
    background: #000;
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
      }
    }
    .nav__items {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
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
              }
              .nav-link__tile--text {
                font-family: $game-font;
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
    }
    .mobile-hamburger {
      z-index: 4;
    }
  }
  .mobile-nav {
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