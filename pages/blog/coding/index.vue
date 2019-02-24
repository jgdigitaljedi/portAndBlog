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
  .blog-list__tab {
    font-family: $game-font;
  }
}
</style>