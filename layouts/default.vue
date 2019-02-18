<template>
  <v-app dark class="app-wrapper">
    <top-header/>
    <main id="main" role="main">
      <nuxt/>
    </main>
    <!-- <bottom-footer/> -->
  </v-app>
</template>

<script>
import TopHeader from '~/components/TopHeader.vue'
// import BottomFooter from '~/components/BottomFooter.vue';

export default {
  components: {
    TopHeader
    // BottomFooter
  },
  mounted() {
    const allowedKeys = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down',
      65: 'a',
      66: 'b'
    }
    const that = this
    // the 'official' Konami Code sequence
    const konamiCode = [
      'up',
      'up',
      'down',
      'down',
      'left',
      'right',
      'left',
      'right',
      'b',
      'a'
    ]
    // a variable to remember the 'position' the user has reached so far.
    let konamiCodePosition = 0
    if (process.browser) {
      window.addEventListener('keydown', function(e) {
        // get the value of the key code from the key map
        const key = allowedKeys[e.keyCode]
        // get the value of the required key from the konami code
        const requiredKey = konamiCode[konamiCodePosition]
        // compare the key with the required key
        if (key == requiredKey) {
          // move to the next key in the konami code sequence
          konamiCodePosition++
          // if the last key is reached, activate cheats
          if (konamiCodePosition == konamiCode.length) {
            that.codeEntered()
            konamiCodePosition = 0
          }
        } else {
          konamiCodePosition = 0
        }
      })
    }
  },
  methods: {
    codeEntered() {
      // @TODO: write konami code easter egg
      console.log('CODE ENTERED! Do something cool here')
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/style/global.scss';
@import '~/assets/style/theme.scss';
.app-wrapper {
  background-color: $primary !important;
}
</style>