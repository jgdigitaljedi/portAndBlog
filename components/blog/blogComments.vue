<template>
  <section class="blog-comments">
    <vue-disqus ref="disqus" v-bind:shortname="disqusShortname" :identifier="disqusId"></vue-disqus>
  </section>
</template>

<script>
// import Disqus from 'vue-disqus/dist/VueDisqus.vue';

export default {
  name: 'blogComments',
  props: ['post'],
  // components: { Disqus },
  computed: {
    disqusShortname() {
      return ' joey-gauthiers-portfolio';
    },
    disqusId() {
      // env used to avoid re-use from dev to production
      return `${process.env.NODE_ENV}-${this.disqusShortname}-${this.post.id}`;
    }
  },
  watch: {
    '$route.params.slug'(curr, old) {
      console.log('curr', curr);
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
}
</style>