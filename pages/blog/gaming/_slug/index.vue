<template>
  <div class="post">
    <div class="blog-title__container">
      <h2>{{post.title}}</h2>
    </div>
    <div class="blog-image__container">
      <img :src="post.image" class="blog-image" v-if="post.image">
    </div>
    <div v-html="postContent"></div>
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
      title: 'Joey Gauthier',
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
    store.dispatch('getPostWithSlug', { slug: params.slug, which: 'gaming' });
  },
  computed: {
    post() {
      return this.$store.state.post;
    },
    postContent() {
      let post = this.$store.state.post;
      return require(`~/content/posts/gaming/${post.id}.md`);
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
  .blog-image__container,
  .blog-title__container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 2em;
    .blog-image {
      display: block;
      max-height: 400px;
      max-width: 600px;
      width: auto;
      height: auto;
    }
  }
  pre {
    background-color: $white;
    padding: 2em;
  }
  .hljs-built_in,
  .hljs-string,
  .hljs-section,
  .hljs-selector-class,
  .hljs-template-variable,
  .hljs-deletion,
  .hljs-function {
    color: $warning;
  }
}
