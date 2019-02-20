<template>
  <section class="util__container blog-list">
    <div class="posts-container">
      <div
        class="bubble-wrapper"
        :key="post.id"
        v-for="(post, index) in posts"
        :class="index % 2 === 0 ? 'right' : 'left'"
      >
        <blogListItem :post="post" :index="index" which="coding"></blogListItem>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: `Joey Gauthier's Coding Blog`,
      meta: [{ hid: 'home', name: 'meta name', content: 'meta content seo goodness' }]
    };
  },
  fetch({ store }) {
    store.dispatch('getPosts');
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
.posts-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
  .bubble-wrapper {
    display: flex;
    width: 80%;
    &.right {
      justify-content: flex-end;
    }
    &.left {
      justify-content: flex-start;
    }
  }
}
</style>