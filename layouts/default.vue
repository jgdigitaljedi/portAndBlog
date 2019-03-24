<template>
  <v-app dark class="app-wrapper">
    <NavBar class="nav"></NavBar>
    <main id="main" role="main" class="main" :class="{'scrolled': scrolled}">
      <nuxt/>
    </main>
    <audio ref="contra">
      <source src="~/assets/sounds/contra_explode.mp3">
    </audio>
  </v-app>
</template>

<script>
import NavBar from '~/components/NavBar.vue';

export default {
  components: {
    NavBar
  },
  data() {
    return {
      scrolled: false
    };
  },
  computed: {
    player() {
      return this.$refs.contra;
    }
  },
  created() {
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll);
    }
  },
  mounted() {
    const allowedKeys = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down',
      65: 'a',
      66: 'b'
    };
    const that = this;
    // the 'official' Konami Code sequence
    const konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
    // a variable to remember the 'position' the user has reached so far.
    let konamiCodePosition = 0;
    if (process.browser) {
      window.addEventListener('keydown', function(e) {
        // get the value of the key code from the key map
        const key = allowedKeys[e.keyCode];
        // get the value of the required key from the konami code
        const requiredKey = konamiCode[konamiCodePosition];
        // compare the key with the required key
        if (key == requiredKey) {
          // move to the next key in the konami code sequence
          konamiCodePosition++;
          // if the last key is reached, activate cheats
          if (konamiCodePosition == konamiCode.length) {
            that.codeEntered();
            konamiCodePosition = 0;
          }
        } else {
          konamiCodePosition = 0;
        }
      });
    }
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    },
    codeEntered() {
      // @TODO: write konami code easter egg
      console.log(
        "KONAMI CODE ENTERED! Right now you just get a sound. Eventually it'll do something cooler!"
      );
      const sound = this.player;
      sound.pause();
      sound.currentTime = 0;
      sound.volume = 0.5;
      sound.cloneNode(true).play();
      if (this.$ga) {
        this.$ga.event('input', 'keyPress', 'konamiCode', true);
      }
    }
  }
};
</script>

<style lang="scss">
@import '~/assets/style/global.scss';
@import '~/assets/style/theme.scss';
.app-wrapper {
  .nav {
    position: fixed;
    z-index: 600;
  }
  .main {
    padding-top: 7rem;
    background-color: #000;
  }
  // background-color: $primary !important;
}
</style>