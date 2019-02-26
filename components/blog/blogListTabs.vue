<template>
  <v-tabs dark v-model="activeTab" color="secondary" slider-color="accent" :fixed-tabs="true">
    <v-tab key="all" ripple class="blog-list__tab">ALL</v-tab>
    <v-tab key="pinned" ripple class="blog-list__tab">PINNED</v-tab>
    <v-tab-item key="allItem">
      <v-container fluid grid-list v-if="activeTab === 0 && isMounted">
        <BlogListContainer :posts="posts" :which="which"></BlogListContainer>
      </v-container>
    </v-tab-item>
    <v-tab-item key="pinnedItem">
      <v-container fluid grid-list v-if="activeTab === 1 && isMounted">
        <BlogListContainer :posts="pinnedPosts" :which="which"></BlogListContainer>
      </v-container>
    </v-tab-item>
  </v-tabs>
</template>

<script>
import BlogListContainer from '~/components/blog/blogListContainer';

export default {
  name: 'BlogListTabs',
  components: {
    BlogListContainer
  },
  props: ['posts', 'which'],
  data() {
    return {
      activeTab: 0,
      isMounted: false,
      pinnedPosts: []
    };
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