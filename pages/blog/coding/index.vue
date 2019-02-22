<template>
  <section class="util__container blog-list">
    <div class="posts-container">
      <div class="under-construction">
        Bear with me; this site is currently being rebuilt and I am currently looking for design inspiration for this page!
        The final design will likely be much different. This is currently just in a 'functional' state.
      </div>
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
  .under-construction {
    font-family: $primary-font;
    font-size: 1.5em;
    color: $light;
    text-align: center;
    font-style: italic;
    font-weight: bold;
    margin-bottom: 2rem;
  }
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