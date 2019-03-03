<template>
  <section class="social" :class="{'column': isMounted && !$vuetify.breakpoint.smAndDown}">
    <a class="social-link" href="https://twitter.com/jgdigitaljedi" target="__blank">
      <img class="social-link__image" src="/images/social/twitter_8bit.png">
    </a>
    <a class="social-link" href="https://www.linkedin.com/in/paulgauthier81/" target="__blank">
      <img class="social-link__image" src="/images/social/linkedin_8bit.png">
    </a>
    <a class="social-link" href="https://github.com/jgdigitaljedi" target="__blank">
      <img class="social-link__image" src="/images/social/github_8bit.png">
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
