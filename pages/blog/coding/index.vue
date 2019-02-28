<template>
  <section class="blog-list">
    <div class="blog-category">
      <div
        class="blog-category__title"
        :class="{'md': isMounted && $vuetify.breakpoint.md, 'sm': isMounted && $vuetify.breakpoint.sm, 'xs': isMounted && $vuetify.breakpoint.xs}"
      >Joey's Coding Blog</div>
    </div>
    <blogListMaster :posts="posts" which="coding"></blogListMaster>
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
  data() {
    return {
      isMounted: false
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts.coding;
    }
  },
  mounted() {
    this.isMounted = true;
  }
};
</script>

<style lang="scss" scoped>
@import '~/assets/style/theme.scss';
.blog-list {
  min-height: calc(100vh - 7rem);
  .blog-category {
    height: auto;
    // min-height: 6rem;
    background: -webkit-linear-gradient(45deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)),
      url('/images/programming.jpg') repeat;
    background: linear-gradient(45deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)),
      url('/images/programming.jpg') repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    .blog-category__title {
      font-size: 5rem;
      font-family: $game-font;
      display: flex;
      align-items: center;
      min-height: 7rem;
      &.md {
        font-size: 3.5rem;
        min-height: 5.5rem;
      }
      &.sm {
        font-size: 2.5rem;
        min-height: 4.5rem;
      }
      &.xs {
        min-height: 3.5rem;
        font-size: 1.5rem;
      }
    }
  }
}
</style>