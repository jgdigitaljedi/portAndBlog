<template>
  <section class="social" :class="{'column': isMounted && !$vuetify.breakpoint.smAndDown}">
    <a
      class="social-link"
      href="https://twitter.com/jgdigitaljedi"
      target="__blank"
      rel="external"
      @click="socialButtonClick('twitter')"
      aria-label="Joey's Twitter Page"
    >
      <img
        class="social-link__image"
        src="~/assets/images/social/twitter_8bit.png"
        alt="Twitter logo in 8 bit style"
        rel="external"
      >
    </a>
    <a
      class="social-link"
      href="https://www.linkedin.com/in/paulgauthier81/"
      target="__blank"
      rel="external"
      @click="socialButtonClick('linkedIn')"
      aria-label="Joey's LinkedIn Profile"
    >
      <img
        class="social-link__image"
        src="~/assets/images/social/linkedin_8bit.png"
        alt="LinkedIn logo in 8 bit style"
        rel="external"
      >
    </a>
    <a
      class="social-link"
      href="https://github.com/jgdigitaljedi"
      target="__blank"
      rel="external"
      @click="socialButtonClick('github')"
      aria-label="Joey's GitHub Profile"
    >
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
  computed: {
    gdprAnswer() {
      return this.$store.getters.getGdpr;
    }
  },
  methods: {
    socialButtonClick(which) {
      if (this.gdprAnswer === 'accept') {
        this.$ga.event('socialButton', 'click', which);
      }
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
