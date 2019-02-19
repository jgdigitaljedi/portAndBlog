<template>
  <div class="post">
    <blogContent :post="post" :postContent="postContent"></blogContent>
    <!-- <blogComments :post="post"></blogComments> -->
    <!-- <disqus ref="disqus" v-bind:shortname="disqusShortname" :identifier="disqusId"></disqus> -->
  </div>
</template>

<script>
// import Disqus from 'vue-disqus/VueDisqus.vue'
export default {
  layout: 'slug',
  components: {
    // Disqus
  },
  head() {
    let post = this.post;
    return {
      title: "Joey Gauthier's Coding Blog",
      meta: [
        {
          hid: post.meta.id,
          name: 'description',
          content: post.meta.content
        },
        {
          hid: post.meta.id + 1,
          name: 'keywords',
          content: post.meta.keywords
        }
      ]
    };
  },
  fetch({ store, params }) {
    store.dispatch('getPosts');
    store.dispatch('getPostWithSlug', { slug: params.slug, which: 'coding' });
  },
  computed: {
    post() {
      return this.$store.state.post;
    },
    postContent() {
      let post = this.$store.state.post;
      return require(`~/content/posts/coding/${post.id}.md`);
    }
    // disqusShortname () {
    //   return 'your_disqus_short_name'
    // },
    // disqusId () { // env used to avoid re-use from dev to production
    //   return `${process.env.NODE_ENV}-${this.disqusShortname}-${this.post.id}`
    // }
  }
  // watch: {
  //   '$route.params.slug' (curr, old) {
  //     // disqus does not properly reload just based off the
  //     // disqusId computed property - we need to manually change it
  //     // when we know it should update
  //     this.$refs.disqus.init()
  //   }
  // }
};
</script>

<style lang="scss" scoped>
@import '~/assets/style/theme.scss';
.post {
  padding: 2em;
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>