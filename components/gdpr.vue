<template>
  <section class="gdpr-wrapper">
    <div class="gdpr-container">
      <div class="gdpr-message">
        I use cookies to personalize content, provide social media features, and analyze traffic. The data collected is anonymous
        and is only used to see how visitors use my site, subscribe to my blog, etc. You can read more about it
        in my privacy policy. By closing this banner, scrolling this page, clicking a link or continuing to browse otherwise, you agree to the use of cookies.
      </div>
      <v-layout column class="gdpr-buttons">
        <v-switch v-model="necessary" :value="necessary" label="Necessary" disabled color="#2cfbfc"></v-switch>
        <v-switch v-model="statistics" :value="statistics" label="Statistics" color="#2cfbfc"></v-switch>
        <a>Show Details</a>
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
  created() {
    if (process.browser) {
      const answered = localStorage.getItem('gdprAnswer');
      if (answered && answered === 'accept') {
        this.acceptGdpr();
      } else if (answered && answered === 'decline') {
        this.declineGdpr();
      }
    }
  },
  methods: {
    acceptGdpr() {
      console.log('accept');
      if (process.browser) {
        localStorage.setItem('gdprAnswer', 'accept');
        this.$store.commit('gdprAnswered', answered);
      }
    },
    declineGdpr() {
      if (process.browser) {
        localStorage.setItem('gdprAnswer', 'decline');
      }
      console.log('decline');
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
  position: absolute;
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
    top: 5px;
    right: 5px;
    font-size: 1rem;
  }
}
</style>