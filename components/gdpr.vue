<template>
  <section class="gdpr-wrapper">
    <div class="gdpr-container">
      <div class="gdpr-message">
        I use cookies to personalize content, provide social media features, and analyze traffic. The data collected is anonymous
        and is only used to see how visitors use my site, subscribe to my blog, etc. You can read more about it
        in my privacy policy. By closing this banner, scrolling this page, clicking a link or continuing to browse otherwise, you agree to the use of cookies.
        <nuxt-link class="privacy-link" to="/privacypolicy">Read Privacy Policy</nuxt-link>
      </div>
      <v-layout column class="gdpr-buttons">
        <v-switch v-model="necessary" :value="necessary" label="Necessary" disabled color="#2cfbfc"></v-switch>
        <v-switch
          v-model="statistics"
          :value="statistics"
          label="Other"
          color="#2cfbfc"
          @change="statsClicked()"
        ></v-switch>
        <v-btn color="#2cfbfc" small @click="acceptGdpr()">Accept</v-btn>
      </v-layout>
    </div>
    <v-icon class="gdpr-close" @click="acceptGdpr()">icon-cross</v-icon>
  </section>
</template>

<script>
export default {
  name: 'GdprPopup',
  data() {
    return {
      necessary: true,
      statistics: true
    };
  },
  methods: {
    statsClicked() {
      // this.statistics = !this.statistics;
      if (this.statistics) {
        this.acceptGdpr();
      } else {
        this.declineGdpr();
      }
    },
    acceptGdpr() {
      console.log('accepted cookies');
      if (process.browser) {
        localStorage.setItem('gdprAnswer', 'accept');
        this.$store.commit('setGdpr', 'accept');
        this.$ga.enable();
      }
    },
    declineGdpr() {
      if (process.browser) {
        localStorage.setItem('gdprAnswer', 'decline');
        this.$store.commit('setGdpr', 'decline');
        this.$ga.disable();
      }
      console.log('declined cookies');
    }
  }
};
</script>

<style lang="scss">
@import '~/assets/style/theme.scss';
@import '~/assets/style/animations.scss';
.gdpr-wrapper {
  animation: 1s ease 2s normal forwards 1 hideShow;
  background-color: $pacman-purple;
  color: #fff;
  padding: 1.5rem;
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: 800;
  opacity: 0;
  .gdpr-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .gdpr-message {
      .privacy-link {
        color: $light;
        &:hover {
          color: $yellow;
        }
        &:active {
          color: $warning;
        }
      }
    }
    .gdpr-buttons {
      min-width: 11rem;
      justify-content: center;
      .v-input--selection-controls {
        margin-top: 0;
        padding-top: 0;
        .v-input__control {
          .v-input__slot {
            margin-bottom: 0 !important;
            .v-input--selection-controls__input {
              height: auto;
            }
          }
        }
      }
      button {
        color: #000;
        font-weight: bold;
      }
    }
  }
  .gdpr-close {
    position: absolute;
    top: 12px;
    right: 20px;
    font-size: 1rem;
  }
}
</style>