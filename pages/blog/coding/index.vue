<template>
  <section class="blog-list">
    <div class="blog-category">
      <div v-if="isMounted" class="blog-category__title">
        <h1 class="blog-category__title--text" :class="{'xs': isMounted && $vuetify.breakpoint.xs}">
          <div>Coding Blog</div>
          <div class="jedi">of the Digital Jedi</div>
        </h1>
      </div>
      <h2
        class="blog-category__summary hidden-md-and-down"
      >Personal programming ramblings of a JavaScript Jedi covering topics ranging from application architecture to his hatred for CSS</h2>
    </div>
    <blogListMaster class="blog-list__master" v-if="isMounted" :posts="posts" which="coding"></blogListMaster>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: `Coding Blog of the Digital Jedi - Front End, JavaScript, Angular, Vue, & more.`,
      link: [{ rel: 'canonical', href: 'https://joeyg.me/blog/coding' }],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Joey Gauthier's blog about coding - Front End, JavaScript, Angular, Vue, & more."
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'Joey Gauthier,Paul Gauthier,front end frameworks,blog,javascript,typescript tutorial,Angular,vue,vue.js,Nuxt js'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `Coding Blog of the Digital Jedi - Front End, JavaScript, Angular, Vue, & more.`
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            "Joey Gauthier's blog about coding - Front End, JavaScript, Angular, Vue, & more."
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `Coding Blog of the Digital Jedi - Front End, JavaScript, Angular, Vue, & more.`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            "Joey Gauthier's blog about coding - Front End, JavaScript, Angular, Vue, & more."
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
@import '~/assets/style/animations.scss';
.blog-list {
  min-height: calc(100vh - 7rem);
  .blog-list__master {
    opacity: 0;
    animation: 1s ease 0.5s normal forwards 1 hideShow;
  }
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
    height: 9rem;
    .blog-category__summary {
      opacity: 0;
      animation: 1s ease 2s normal forwards 1 hideShow;
      height: 9rem;
      display: flex;
      width: 42rem;
      align-items: center;
      justify-content: center;
      font-style: italic;
      padding-right: 2rem;
      text-align: right;
      font-size: 1.285rem;
      font-family: $primary-font;
      font-weight: 400;
    }
    .blog-category__title {
      padding: 1rem 2rem;
      width: 100%;
      opacity: 0;
      animation: 1s ease 1s normal forwards 1 hideShow;
      .blog-category__title--text {
        div {
          font-family: $game-font;
          font-size: 2.5rem;
          &.jedi {
            font-size: 2rem;
          }
        }
        &.xs {
          width: 100%;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          div {
            font-size: 1.75rem;
            text-align: center;
            &.jedi {
              font-size: 1.25rem;
            }
          }
        }
      }
    }
  }
}
</style>