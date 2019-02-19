<template>
  <section class="social" :class="{'column': isMounted && !$vuetify.breakpoint.smAndDown}">
    <a class="social-link" href="https://twitter.com/jgdigitaljedi" target="__blank">
      <i class="nes-icon twitter is-medium"></i>
    </a>
    <a class="social-link" href="https://www.linkedin.com/in/paulgauthier81/" target="__blank">
      <i class="nes-icon linkedin is-medium"></i>
    </a>
    <a class="social-link" href="https://github.com/jgdigitaljedi" target="__blank">
      <i class="nes-icon github is-medium"></i>
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
  }
}
</style>
