<template>
  <section class="blog-list">
    <v-tabs dark v-model="activeTab" color="secondary" slider-color="accent" :fixed-tabs="true">
      <v-tab key="all" ripple class="blog-list__tab">ALL</v-tab>
      <v-tab key="pinned" ripple class="blog-list__tab">Pinned</v-tab>
      <v-tab-item key="allItem">
        <v-container fluid grid-list v-if="activeTab === 0 && isMounted">
          <BlogListContainer :posts="posts"></BlogListContainer>
        </v-container>
      </v-tab-item>
      <v-tab-item key="pinnedItem">
        <v-container fluid grid-list v-if="activeTab === 1 && isMounted">
          <BlogListContainer :posts="pinnedPosts"></BlogListContainer>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </section>
</template>

<script>
import BlogListContainer from '~/components/blog/blogListContainer';

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
    BlogListContainer
  },
  data() {
    return {
      activeTab: 0,
      isMounted: false,
      pinnedPosts: []
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts.coding;
    }
  },
  created() {
    this.pinnedPosts = this.posts.filter(post => post.pinned);
  },
  mounted() {
    this.isMounted = true;
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