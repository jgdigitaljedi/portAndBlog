<template>
  <section class="social" :class="{'column': isMounted && !$vuetify.breakpoint.smAndDown}">
    <a class="social-link" href="https://twitter.com/jgdigitaljedi" target="__blank" @click="socialButtonClick('twitter')">
      <img
        class="social-link__image"
        src="~/assets/images/social/twitter_8bit.png"
        alt="Twitter logo in 8 bit style"
        rel="external"
      >
    </a>
    <a class="social-link" href="https://www.linkedin.com/in/paulgauthier81/" target="__blank" @click="socialButtonClick('linkedIn')">
      <img
        class="social-link__image"
        src="~/assets/images/social/linkedin_8bit.png"
        alt="LinkedIn logo in 8 bit style"
        rel="external"
      >
    </a>
    <a class="social-link" href="https://github.com/jgdigitaljedi" target="__blank" @click="socialButtonClick('github')">
      <img
        class="social-link__image"
        src="~/assets/images/social/github_8bit.png"
        alt="GitHub logo in 8 bit style"
        rel="external"
      >
    </a>
  </section>
</template>


<script>
export default {
  name: 'Social',
  data() {
    return {
      isMounted: false
    };
  },
  mounted() {
    this.isMounted = true;
  },
  methods: {
    socialButtonClick(which) {
      this.$ga.event('socialButton', 'click', which);
    }
  }
};
</script>

<style lang="scss" scoped>
.social {
  display: flex;
  justify-content: space-around;
  &.column {
    flex-direction: column;
  }
  .social-link {
    margin: 1em;
    .social-link__image {
      max-width: 5rem;
      height: auto;
    }
  }
}
</style>
