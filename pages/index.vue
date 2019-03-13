<template>
  <section class="home">
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <div
      class="social-container"
      v-if="isMounted"
      :class="{'mobile': isMounted && $vuetify.breakpoint.smAndDown}"
    >
      <social></social>
    </div>
    <div class="home__image-title-container" :class="{'add-margin': $vuetify.breakpoint.smAndDown}">
      <img
        src="~/assets/images/me/me_8bit_scanlines.jpg"
        alt="image of Joey Gauthier made to look 8 bit with scanlines"
      >
      <h1 :class="{'mobile': $vuetify.breakpoint.smAndDown}">Joey Gauthier</h1>
    </div>
    <div class="home__about--wrapper">
      <div class="home__about">
        <p>I'm a software engineer, retro game collector, guitarist, and all around geek. Welcome to my site!</p>
      </div>
    </div>
  </section>
</template>

<script>
import Social from '~/components/Social';

export default {
  name: 'Home',
  components: { Social },
  data() {
    return {
      timer: null,
      isMounted: false
    };
  },
  mounted() {
    this.isMounted = true;
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/style/theme.scss';
// n is number of stars required
@function multiple-box-shadow($n) {
  $value: '#{random(2000)}px #{random(2000)}px #FFF';
  @for $i from 2 through $n {
    $value: '#{$value} , #{random(2000)}px #{random(2000)}px #FFF';
  }

  @return unquote($value);
}

@keyframes animStar {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
}

@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes hideShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes hideAbout {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.85;
  }
}

$shadows-small: multiple-box-shadow(700);
$shadows-medium: multiple-box-shadow(200);
$shadows-big: multiple-box-shadow(100);

.home {
  background-color: $black;
  min-height: calc(100vh - 7rem);
  height: 100%;
  padding: 3em 2em;
  overflow: hidden;
  width: 100%;
  .social-container {
    position: absolute;
    left: 0;
    top: 7.1em;
    z-index: 3;
    &.mobile {
      top: 6rem;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
  .home__image-title-container {
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    align-items: center;
    flex-direction: column;
    z-index: 1000;
    animation: 4s ease-out 0s 1 slideInFromRight, hideShow 0.1s linear 4s forwards;
    &.add-margin {
      margin-top: 1.5rem;
    }
    img {
      max-height: 400px;
      width: auto;
      position: relative;
    }
    h1 {
      font-size: 2em;
      color: $light;
      &.mobile {
        width: 100%;
        text-align: center;
      }
    }
  }
  .home__about--wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    .home__about {
      max-width: 400px;
      opacity: 0;
      animation: hideAbout 0.1s linear 4s forwards;
      background-color: #222;
      text-align: center;
      padding: 1.5rem 2rem;
      p {
        font-family: $game-font;
      }
      &:before {
        background-color: $black;
      }
    }
  }
  #stars {
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: $shadows-small;
    animation: animStar 50s linear infinite;
    z-index: 2;
    &:after {
      content: ' ';
      position: absolute;
      top: 2000px;
      width: 1px;
      height: 1px;
      background: transparent;
      box-shadow: $shadows-small;
    }
  }

  #stars2 {
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: $shadows-medium;
    animation: animStar 100s linear infinite;
    z-index: 3;
    &:after {
      content: ' ';
      position: absolute;
      top: 2000px;
      width: 2px;
      height: 2px;
      background: transparent;
      box-shadow: $shadows-medium;
    }
  }

  #stars3 {
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: $shadows-big;
    animation: animStar 150s linear infinite;
    z-index: 4;
    &:after {
      content: ' ';
      position: absolute;
      top: 2000px;
      width: 3px;
      height: 3px;
      background: transparent;
      box-shadow: $shadows-big;
    }
  }
}
</style>