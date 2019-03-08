<template>
  <div class="scroll-to-top" :class="{'show-button': show}">
    <v-btn class="scroll-to-top--btn" color="error" @click.stop="scrollUp">
      <v-icon>icon-arrow-up</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'scrollToTopButton',
  data() {
    return {
      show: false,
      buttonViz: false
    };
  },
  created() {
    if (process.browser) {
      window.addEventListener('scroll', this.showButton.bind(this));
    }
  },
  methods: {
    showButton(e) {
      if (e.srcElement.scrollingElement.scrollTop >= 50) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    scrollUp() {
      if (process.browser) {
        window.scroll({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  }
};
</script>

<style lang="scss">
@import '../assets/style/theme.scss';
.scroll-to-top {
  position: fixed;
  right: 0;
  bottom: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  &.show-button {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
  .scroll-to-top--btn {
    width: 4rem;
    min-width: 4rem;
  }
}
</style>