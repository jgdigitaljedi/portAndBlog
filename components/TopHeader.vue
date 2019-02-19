<template>
  <div class="nav-wrapper">
    <div class="nav nes-container is-dark">
      <div class="nav__brand">
        <nuxt-link to="/">
          <img class="nav__brand--image" src="~/assets/images/mario_block.png">
        </nuxt-link>
      </div>
      <i @click.stop="drawer = !drawer" class="nes-logo hidden-md-and-up mobile-hamburger"></i>
      <div class="nav__items hidden-sm-and-down">
        <nuxt-link v-for="link in links" :key="link.title" :to="link.to" class="nav-link">
          <label class="nav-link__tile">
            <input
              type="radio"
              name="home"
              class="nes-radio"
              :checked="currentSelectedRoute === link.to"
            >
            <span class="nav-link__tile--text">{{link.title}}</span>
          </label>
        </nuxt-link>
      </div>
    </div>
    <v-navigation-drawer v-model="drawer" absolute temporary class="mobile-nav">
      <div class="mobile-nav__title">
        <h2>Joey</h2>
        <h2>Gauthier</h2>
      </div>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.title">
          <nuxt-link :to="link.to" class="nav-link">
            <label class="nav-link__tile">
              <input
                type="radio"
                name="mobile"
                class="nes-radio"
                :checked="currentSelectedRoute === link.to"
              >
              <span class="nav-link__tile--text">{{link.title}}</span>
            </label>
          </nuxt-link>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'TopHeader',
  data() {
    return {
      currentSelectedRoute: 'home',
      drawer: false,
      links: [
        { title: 'Home', to: '/' },
        { title: 'Blog', to: '/blog' },
        { title: 'Work', to: '/work' },
        { title: 'About', to: '/about' },
        { title: 'VG', to: '/videogames' }
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
.nav-wrapper {
  .nav {
    // display: flex;
    // width: 100%;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .nav__brand {
      flex: 1;
      align-items: center;
      .nav__brand--image {
        height: 5rem;
        width: 5rem;
        margin-top: 4px;
      }
    }
    .nav__items {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      height: 100%;
    }
    .mobile-hamburger {
      z-index: 4;
    }
  }
  .nav .nav__items,
  .mobile-nav {
    .nav-link {
      z-index: 3;
      color: $white;
      text-decoration: none;
      display: flex;
      align-items: center;
      margin: auto 1em;
      &:visited {
        .nav-link__tile .nav-link__tile--icon,
        .nav-link__tile .nav-link__tile--text {
          color: $warning;
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
        .nav-link__tile--text {
          font-size: 1.1em;
          font-family: $game-font;
          margin-left: 1.2em;
          &::before {
            color: $danger;
            top: 2px;
            z-index: 10;
          }
        }
      }
    }
  }
  .mobile-nav {
    padding: 1em;
    .mobile-nav__title {
      display: flex;
      width: 100%;
      justify-content: center;
      flex-direction: column;
      h2 {
        text-align: center;
      }
    }
  }
}
</style>