<template>
  <section class="blog-list">
    <BlogListTabs :posts="posts" which="coding"></BlogListTabs>
  </section>
</template>

<script>
import BlogListTabs from '~/components/blog/blogListTabs';

export default {
  head() {
    return {
      title: `Joey G | Coding Blog`,
      meta: [
        {
          hid: 'coding-blog-desc',
          name: 'description',
          content: "Joey Gauthier's blog about coding, mainly JavaScript."
        },
        {
          hid: 'coding-blog-key',
          name: 'keywords',
          content:
            'Joey Gauthier, Paul Gauthier, coding, blog, javascript, typescript, Angular, Vue, Nuxt'
        }
      ]
    };
  },
  fetch({ store }) {
    store.dispatch('getPosts');
  },
  components: {
    BlogListTabs
  },
  computed: {
    posts() {
      return this.$store.state.posts.coding;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~/assets/style/theme.scss';
.blog-list {
  min-height: calc(100vh - 6rem);

  .blog-list__tab {
    font-family: $game-font;
  }

  .fullscreen-bg {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: -100;
  }

  .fullscreen-bg__video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>