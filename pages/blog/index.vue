<template>
  <div class="mario">
    <div class="mario__wrapper">
      <div class="mario__top-text hidden-sm-and-down" v-if="isMounted">
        <div class="mario__top-text--score top-text-column">
          <div class="top-text-column__row">MARIO</div>
          <div class="top-text-column__row">000000</div>
        </div>
        <div class="mario__top-text--coins top-text-column">
          <div class="top-text-column__row">&nbsp;</div>
          <div class="top-text-column__row">
            <img src="~/assets/images/mario_coin.png" class="mario-coin">X00
          </div>
        </div>
        <div class="mario__top-text--world top-text-column">
          <div class="top-text-column__row">WORLD</div>
          <div class="top-text-column__row">1-1</div>
        </div>
        <div class="mario__top-text--time top-text-column">
          <div class="top-text-column__row">TIME</div>
        </div>
      </div>
      <div
        class="mario__box-logo"
        :class="{'medium': (isMounted && $vuetify.breakpoint.md), 'small': (isMounted && $vuetify.breakpoint.sm), 'xsmall': (isMounted && $vuetify.breakpoint.xs)}"
        v-if="isMounted"
      >
        <div class="mario__box-logo--rivets top">
          <div>.</div>
          <div>.</div>
        </div>
        <div class="mario__box-logo--text-container">
          <div class="mario__box-logo--top-text logo-text">JOEY'S</div>
          <div class="mario__box-logo--bottom-text logo-text">SUPER BLOG.</div>
        </div>
        <div class="mario__box-logo--rivets bottom">
          <div>.</div>
          <div>.</div>
        </div>
      </div>
      <div class="mario__copyright hidden-sm-and-down" v-if="isMounted">&copy; 2019 Joey Gauthier</div>
      <div class="mario__blog-select" v-if="isMounted">
        <div @mouseover="active = 'gaming'" class="mario__blog-select--wrapper">
          <nuxt-link to="/blog/gaming" class="mario__blog-select--link">
            <img
              src="/images/mario_shroom.png"
              class="mario__blog-select--active"
              v-if="active === 'gaming'"
            >
            &nbsp; 1 GAMING BLOG
          </nuxt-link>
        </div>
        <div @mouseover="active = 'coding'" class="mario__blog-select--wrapper">
          <nuxt-link to="/blog/coding" class="mario__blog-select--link">
            <img
              src="/images/mario_shroom.png"
              class="mario__blog-select--active"
              v-if="active === 'coding'"
            >
            &nbsp; 2 CODING BLOG
          </nuxt-link>
        </div>
      </div>
      <img
        src="~/assets/images/mario_hill.png"
        class="mario__hill hidden-sm-and-down"
        :class="{'medium': (isMounted && $vuetify.breakpoint.md)}"
        v-if="isMounted"
      >
      <img
        src="~/assets/images/small-mario.png"
        class="mario__mario hidden-sm-and-down"
        :class="{'medium': (isMounted && $vuetify.breakpoint.md)}"
        v-if="isMounted"
      >
      <img
        src="~/assets/images/mario_bushes.png"
        class="mario__bushes hidden-sm-and-down"
        :class="{'medium': (isMounted && $vuetify.breakpoint.md)}"
        v-if="isMounted"
      >
      <div class="mario__ground"></div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `Joey G | Blog`,
      meta: [
        { hid: 'blog-desc', name: 'description', content: 'Joey Gauthier - blog select page' },
        {
          hid: 'blog-keywords',
          name: 'keywords',
          content: 'Joey Gauthier, Paul Gauthier, blog, coding, gaming'
        }
      ]
    };
  },
  data() {
    return {
      active: 'gaming',
      isMounted: false
    };
  },
  mounted() {
    this.isMounted = true;
  }
};
</script>

<style lang="scss" scoped>
@import '~/assets/style/theme.scss';
$mario-sky: #6185f8;
$mario-ground: #b72504;
$mario-letters: #eeaf36;
$mario-hill: #138200;
$mario-bush: #73f218;
$mario-bush-accent: #0c110c;

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

.mario {
  height: 100%;
  width: 100%;
  min-height: calc(100vh - 6rem - 8px);
  background-color: $mario-sky;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  .mario__wrapper {
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    flex-direction: column;
    .mario__top-text {
      width: 100%;
      padding: 0.5rem;
      display: flex;
      justify-content: space-around;
      .top-text-column {
        font-size: 1.5rem;
        display: flex;
        flex-direction: column;
        div {
          font-family: $game-font;
        }
        .mario-coin {
          height: 1.5rem;
          width: auto;
          margin: -8px 0.5rem 0;
        }
      }
    }
    .mario__hill {
      width: 28rem;
      height: 12rem;
      position: absolute;
      bottom: 5rem;
      left: 4rem;
      &.medium {
        left: 2rem;
      }
    }
    .mario__mario {
      width: 4rem;
      height: 4rem;
      position: absolute;
      bottom: 5rem;
      left: 32rem;
      &.medium {
        left: 30rem;
      }
    }
    .mario__bushes {
      width: 25rem;
      height: 7rem;
      position: absolute;
      bottom: 5rem;
      right: 20rem;
      &.medium {
        right: 8rem;
      }
    }
    .mario__ground {
      position: absolute;
      bottom: 0;
      left: 0;
      min-height: 5rem;
      width: 100%;
      background-image: url('/images/mario_ground_block.png');
      background-repeat: repeat;
      background-size: 5rem 5rem;
    }
    .mario__blog-select {
      width: 100%;
      text-align: center;
      margin-top: 3rem;
      z-index: 4;
      .mario__blog-select--wrapper {
        &:hover {
          .mario__blog-select--active {
            animation: blink normal 1s infinite;
          }
        }
        .mario__blog-select--link {
          color: $white;
          font-family: $game-font;
          font-size: 1.5rem;
          text-decoration: none;
          .mario__blog-select--active {
            width: 2rem;
            height: 2rem;
            position: absolute;
          }
        }
      }
    }
    .mario__copyright {
      text-align: right;
      width: 75%;
      font-family: $game-font;
      font-size: 1.5rem;
      color: $mario-letters;
      z-index: 3;
    }
    .mario__box-logo {
      width: 75%;
      background-color: $mario-ground;
      border-top: 3px solid $mario-letters;
      border-left: 3px solid $mario-letters;
      border-right: 3px solid $mario-bush-accent;
      border-bottom: 3px solid $mario-bush-accent;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: flex-start;
      z-index: 3;
      .mario__box-logo--rivets {
        display: flex;
        justify-content: space-between;
        width: 100%;
        left: 0;
        line-height: 1rem;
        &.top {
          margin-top: -1.75rem;
          margin-bottom: -1rem;
        }
        &.bottom {
          margin-bottom: 1rem;
          margin-top: -5rem;
        }
        div {
          font-size: 5rem;
          color: $mario-letters;
          text-shadow: 3px 3px $mario-bush-accent;
          padding: 1rem 0.5rem;
        }
      }
      .mario__box-logo--text-container {
        text-align: left;
        .logo-text {
          color: $mario-letters;
          font-family: mario_font;
          &.mario__box-logo--top-text {
            font-size: 7rem;
            text-shadow: 7px 7px $mario-bush-accent;
            margin-bottom: -3rem;
          }
          &.mario__box-logo--bottom-text {
            font-size: 14rem;
            text-shadow: 10px 10px $mario-bush-accent;
          }
        }
      }
      &.medium {
        padding: 1rem;
        .mario__box-logo--text-container .mario__box-logo--top-text {
          font-size: 6rem;
          margin-bottom: -1rem;
        }
        .mario__box-logo--text-container .mario__box-logo--bottom-text {
          font-size: 12rem;
        }
      }
      &.small {
        padding: 1rem;
        margin-top: 8rem;
        margin-bottom: 4rem;
        .mario__box-logo--text-container .mario__box-logo--top-text {
          font-size: 4rem;
          margin-bottom: -1rem;
        }
        .mario__box-logo--text-container .mario__box-logo--bottom-text {
          font-size: 8rem;
        }
      }
      &.xsmall {
        padding: 0.5rem;
        margin-top: 6rem;
        margin-bottom: 6rem;
        .mario__box-logo--text-container .mario__box-logo--top-text {
          font-size: 2rem;
          margin-bottom: 0;
        }
        .mario__box-logo--text-container .mario__box-logo--bottom-text {
          font-size: 4rem;
        }
      }
    }
  }
}
</style>