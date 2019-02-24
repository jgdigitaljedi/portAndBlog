<template>
  <section class="blog-list">
    <BlogListTabs :posts="posts" which="gaming"></BlogListTabs>
  </section>
</template>

<script>
import BlogListTabs from '~/components/blog/blogListTabs';

export default {
  head() {
    return {
      title: `Joey G | Gaming Blog`,
      meta: [
        { hid: 'gaming-blog-desc', name: 'description', content: "Joey Gauthier's gaming blog" },
        {
          hid: 'gaming-blog-key',
          name: 'keywords',
          content:
            'Joey Gauthier, Paul Gauthier, nintendo, gaming, retro games, game collecting, sega, playstation, xbox, mario'
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
      return this.$store.state.posts.gaming;
    }
  }
};
</script>