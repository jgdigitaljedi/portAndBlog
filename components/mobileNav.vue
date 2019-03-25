<template>
  <v-navigation-drawer v-model="open" absolute temporary class="mobile-nav">
    <div class="mobile-nav__title">
      <img
        class="nav__brand--image"
        src="~/assets/images/navbar/JG.png"
        alt="JG for Joey Gauthier in the Sega font"
      >
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
</template>

<script>
export default {
  name: 'MobileNav',
  computed: {
    navOpen() {
      return this.$store.state.mobileNav;
    }
  },
  data() {
    return {
      open: false,
      currentSelectedRoute: null,
      links: [
        {
          title: 'Home',
          to: '/',
          icon: require('~/assets/images/navbar/pacman.png')
        },
        {
          title: 'Blog',
          to: '/blog',
          icon: require('~/assets/images/navbar/ghost_red.png')
        },
        {
          title: 'About',
          to: '/about',
          icon: require('~/assets/images/navbar/ghost_blue.png')
        }
        // { title: 'VG', to: '/videogames' }
      ]
    };
  },
  methods: {
    handleRouteChange(path) {
      if (path.indexOf('/blog') >= 0) {
        this.currentSelectedRoute = '/blog';
      } else {
        this.currentSelectedRoute = path;
      }
    }
  },
  watch: {
    navOpen(newState) {
      if (this.$route.path.indexOf('/blog') >= 0) {
        this.currentSelectedRoute = '/blog';
      } else {
        this.currentSelectedRoute = this.$route.path;
      }
      this.open = newState;
    },
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

<style lang="scss" scoped>
@import '~/assets/style/theme.scss';
.mobile-nav {
  z-index: 700;
  position: fixed;
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
</style>