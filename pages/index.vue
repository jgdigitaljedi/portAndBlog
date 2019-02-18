<template>
  <section class="home">
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <div class="home__image-title-container">
      <img src="~/assets/images/me_8bit_scanlines.jpg">
      <h1>Joey Gauthier</h1>
    </div>
    <div class="home__about--wrapper">
      <div class="home__about nes-container is-dark is-centered">
        <p>I'm a software engineer, retro game collector, guitarist, and all around geek. Welcome to my site!</p>
      </div>
    </div>
    <audio ref="contra">
      <source src="~/assets/sounds/contra_explode.mp3">
    </audio>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      story: {
        content: {}
      }
    }
  },
  computed: {
    player() {
      return this.$refs.contra
    }
  },
  mounted() {
    const sound = this.player
    sound.pause()
    sound.currentTime = 0
    // evidently CHrome won't let a sound play without a click so this won't work in Chrome unless the user clicks something first
    setTimeout(() => {
      const audio = sound.cloneNode(true).play()
      if (audio !== undefined) {
        audio
          .then(_ => {
            console.log('playing', _)
          })
          .catch(err => {
            console.log('audio error', err)
          })
      }
    }, 4000)
  }
}
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

$shadows-small: multiple-box-shadow(700);
$shadows-medium: multiple-box-shadow(200);
$shadows-big: multiple-box-shadow(100);

.home {
  background-color: $black;
  min-height: calc(100vh - 5em);
  height: calc(100vh - 5em);
  height: 100%;
  padding: 3em 2em;
  overflow: hidden;
  .home__image-title-container {
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    align-items: center;
    flex-direction: column;
    z-index: 1000;
    animation: 4s ease-out 0s 1 slideInFromRight,
      hideShow 0.1s linear 4s forwards;
    // animation: hideShow 0.1s linear 4s forwards;
    img {
      max-height: 400px;
      width: auto;
      position: relative;
    }
    h1 {
      font-size: 2em;
      color: $light;
    }
  }
  .home__about--wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    .home__about.nes-container.is-dark.is-centered {
      font-family: $game-font;
      max-width: 400px;
      opacity: 0;
      animation: hideShow 0.1s linear 4s forwards;
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