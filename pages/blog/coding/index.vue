<template>
  <section class="blog-list">
    <div class="blog-category">
      <div v-if="isMounted" class="blog-category__title">
        <div
          class="blog-category__title--text"
          :class="{'xs': isMounted && $vuetify.breakpoint.xs}"
        >
          <div>Coding Blog</div>
          <div class="jedi">of the Digital Jedi</div>
        </div>
      </div>
      <div
        class="blog-category__summary hidden-md-and-down"
      >Personal programming ramblings of a JavaScript Jedi covering topics ranging from application architecture to his hatred for CSS</div>
    </div>
    <blogListMaster v-if="isMounted" :posts="posts" which="coding"></blogListMaster>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: `Coding Blog of the Digital Jedi`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Joey Gauthier's blog about coding, mainly JavaScript."
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'Joey Gauthier, Paul Gauthier, coding, blog, javascript, typescript, Angular, Vue, Nuxt'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `Coding Blog of the Digital Jedi`
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: "Joey Gauthier's blog about coding, mainly JavaScript."
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `Coding Blog of the Digital Jedi`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: "Joey Gauthier's blog about coding, mainly JavaScript."
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: '/images/blog/coding/programming.jpg'
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
    background: -webkit-linear-gradient(
        to left,
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 1)
      ),
      url('/images/blog/coding/programming.jpg') repeat;
    background: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1)),
      url('/images/blog/coding/programming.jpg') repeat;
    background-position: center;
    display: flex;
    justify-content: space-between;
    // border-bottom: 4px solid $pacman-purple;
    // justify-content: center;
    // align-items: center;
    height: 9rem;
    .blog-category__summary {
      height: 9rem;
      display: flex;
      width: 42rem;
      align-items: center;
      justify-content: center;
      font-style: italic;
      padding-right: 2rem;
    }
    .blog-category__title {
      padding: 1rem 2rem;
      width: 100%;
      .blog-category__title--text {
        div {
          font-family: $game-font;
          font-size: 2.5rem;
          // -webkit-text-fill-color: $pacman-purple; /* Will override color (regardless of order) */
          // -webkit-text-stroke-width: 1px;
          // -webkit-text-stroke-color: $light;
          &.jedi {
            font-size: 2rem;
          }
        }
        &.xs {
          width: 100%;
          text-align: center;
          div {
            font-size: 2rem;
            text-align: center;
            &.jedi {
              font-size: 1.5rem;
            }
          }
        }
      }
    }
  }
}
</style>