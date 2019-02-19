<template>
  <section class="blog-comments">
    <vue-disqus
      ref="disqus"
      :shortname="disqusShortname"
      :identifier="disqusId"
      :url="'https://joeyg.netlify.com' + $route.fullPath"
    ></vue-disqus>
  </section>
</template>

<script>
export default {
  name: 'blogComments',
  props: ['post', 'which'],
  computed: {
    disqusShortname() {
      return 'joey-gauthiers-portfolio';
    },
    disqusId() {
      // env used to avoid re-use from dev to production
      return `${process.env.NODE_ENV}-${this.which}-${this.post.id}`;
    }
  },
  mounted() {
    this.$refs.disqus.init();
  },
  watch: {
    '$route.params.slug'(curr, old) {
      // disqus does not properly reload just based off the
      // disqusId computed property - we need to manually change it
      // when we know it should update
      this.$refs.disqus.init();
    }
  }
};
</script>

<style lang="scss" scoped>
.blog-comments {
  width: 100%;
  max-width: 1400px;
  margin-top: 3em;
}
</style>