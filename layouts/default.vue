<template>
  <v-app dark class="app-wrapper">
    <MobileNav></MobileNav>
    <NavBar class="nav"></NavBar>
    <main id="main" role="main" class="main" :class="{'scrolled': scrolled}">
      <nuxt/>
    </main>
    <audio ref="contra">
      <source src="~/assets/sounds/contra_explode.mp3">
    </audio>
    <GdprPopup v-if="showGdpr"></GdprPopup>
    <div class="gdpr-decline-message" v-if="showDeclineMessage && !declineMessageDismissed">
      You have chosen to disable cookies, analytics, blog comments, and the option to subscribe to my blogs. This site will still use a local storage entry in your browser
      to remember your choice, but that data will not be sent to any server and is only stored on your machine. This was indicated by the toggle that was labelled
      "necessary", disabled, and toggled on. By continuing to view my site or mobile app, you consent to the use of this local storage variable being stored. Clearing
      your browser cache will remove this entry thus prompting you again on your next visit. You can change your selection by going to the "About" page, selecting
      the "SITE" tab, and clicking the "OPEN COOKIES PROMPT" button then changing your selection.
      <v-btn @click="dismissDeclineMessage()">Accept</v-btn>
      <v-icon class="close-button" @click.stop="dismissDeclineMessage()">icon-cross</v-icon>
    </div>
  </v-app>
</template>

<script>
import NavBar from '~/components/NavBar.vue';
import MobileNav from '~/components/mobileNav.vue';
import GdprPopup from '~/components/gdpr.vue';

export default {
  components: {
    NavBar,
    MobileNav,
    GdprPopup
  },
  data() {
    return {
      scrolled: false,
      showGdpr: true,
      showDeclineMessage: false,
      declineMessageDismissed: false
    };
  },
  computed: {
    player() {
      return this.$refs.contra;
    },
    gdprAnswer() {
      return this.$store.getters.getGdpr;
    }
  },
  created() {
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll);
      if (localStorage.getItem('dismissedDecline')) {
        this.declineMessageDismissed = true;
      }
    }
  },
  mounted() {
    if (process.browser) {
      const answered = localStorage.getItem('gdprAnswer');
      if (answered) {
        this.showGdpr = false;
        this.$store.commit('setGdpr', answered);
        this.toggleGa(answered);
      }
    }
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
    dismissDeclineMessage() {
      this.declineMessageDismissed = true;
      localStorage.setItem('dismissedDecline', true);
    },
    toggleGa(which) {
      if (which === 'accept') {
        this.$ga.enable();
      } else {
        this.$ga.disable();
      }
    },
    handleScroll() {
      this.scrolled = window.scrollY > 0;
      this.$store.commit('setScroll', window.scrollY);
    },
    codeEntered() {
      // @TODO: write konami code easter egg
      console.log(
        "KONAMI CODE ENTERED! Right now you just get a sound. Eventually it'll do something cooler than just playing a sound from Contra!"
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
  },
  watch: {
    gdprAnswer(newVal) {
      this.toggleGa(newVal);
      this.declineMessageDismissed = localStorage.getItem('dismissedDecline');
      if (newVal) {
        this.showGdpr = false;
        localStorage.setItem('gdprAnswer', newVal);
        if (newVal === 'decline' && !this.declineMessageDismissed) {
          this.showDeclineMessage = true;
        }
      } else {
        this.showGdpr = true;
      }
    }
  }
};
</script>

<style lang="scss">
@import '~/assets/style/global.scss';
@import '~/assets/style/theme.scss';
.app-wrapper {
  .gdpr-decline-message {
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 1.5rem;
    background-color: $pacman-purple;
    z-index: 400;
    .v-icon.close-button {
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 1.1rem;
    }
  }
  .nav {
    position: fixed;
    z-index: 600;
  }
  .main {
    padding-top: 7rem;
    background-color: #000;
    transition: padding-top 0.4s ease-in 0.4s;
    &.scrolled {
      padding-top: 3.5rem;
    }
  }
}
</style>