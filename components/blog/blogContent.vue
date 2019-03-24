<template>
  <div class="blog-slug">
    <div class="blog-image__container"></div>
    <v-card class="markdown-content">
      <article v-html="postContent"></article>
    </v-card>
    <div class="blog-slug__related" v-if="post && post.related && post.related.length">
      <h2>Related Posts</h2>
      <div class="blog-slug__related--inner" :class="{'small': $vuetify.breakpoint.xs}">
        <nuxt-link v-for="rel in related" :key="rel.id" :to="`/blog/${which}/${rel.slug}`" @click.native="relatedClicked(rel)">
          <v-card class="related-post">
            <v-card-title>{{rel.title}}</v-card-title>
            <v-img
              class="related-image"
              :src="rel.image ? rel.image : `https://res.cloudinary.com/https-joeyg-me/image/upload/v1552518203/me_8bit_scanlines.jpg`"
              :alt="rel.alt ? rel.alt : '8bit style photo of Joey Gauthier with scanlines'"
            ></v-img>
          </v-card>
        </nuxt-link>
      </div>
    </div>
    <v-dialog v-model="imageDialog" content-class="image-dialog" style="min-width: 95vw;">
      <div class="image-dialog__container">
        <v-btn flat @click="imageDialog = false" class="dismiss">
          <v-icon class="dismiss-icon">icon-cross</v-icon>
        </v-btn>
        <v-img :src="imageSrc" class="image-dialog__image" contain max-height="90vh"></v-img>
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'BlogSlug',
  props: {
    post: null,
    postContent: null,
    which: null
  },
  data() {
    return {
      imageDialog: false,
      imageSrc: '',
      posts: this.$store.state.posts,
      related: null
    };
  },
  mounted() {
    if (process.browser && window) {
      window.openImage = src => {
        this.openImage(src);
      };
    }
    if (this.which) {
      const whichPosts = this.posts[this.which];
      if (whichPosts && this.post.related) {
        this.related = whichPosts.filter(post => this.post.related.indexOf(post.id) >= 0);
      }
    }
  },
  methods: {
    openImage(src) {
      this.imageSrc = src;
      this.imageDialog = true;
    },
    relatedClicked(related) {
      this.$ga.event('related link', 'click', this.related.title, this.post.id);
    }
  }
};
</script>

<style lang="scss">
@import '~/assets/style/theme.scss';
@import '~/assets/style/shadows.scss';
.blog-slug {
  max-width: 1440px;
  .blog-slug__related {
    width: 100%;
    padding: 2rem 0 0;
    text-align: center;
    .blog-slug__related--inner {
      display: flex;
      padding-top: 1rem;
      justify-content: space-around;
      flex-wrap: wrap;
      &.small {
        flex-direction: column;
        align-items: center;
        .related-post {
          margin-top: 1rem;
        }
      }
      .related-post {
        width: 20rem;
        height: 15rem;
        overflow: hidden;
        background-color: lighten(#000, 15%);
        border-radius: 1rem;
        text-align: left;
      }
    }
  }
  .blog-image__carousel {
    box-shadow: none;
  }
  .blog-image__container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 2em;
    .blog-image,
    .v-item--active {
      display: block;
      width: 100%;
      height: auto;
      max-height: 500px;
      object-fit: scale-down;
      @include drop_shadow(2);
      &.mobile {
        max-height: 380px;
      }
    }
  }
  .markdown-content {
    padding: 1rem;
    .image-container {
      width: 100%;
      text-align: center;
      margin: 1rem auto;
      img {
        height: 100%;
        max-height: 350px;
        max-width: 100%;
        width: auto;
        object-fit: contain;
        cursor: url('/images/cursors/cursor-click.png'), auto !important;
      }
    }
  }
  section {
    a {
      color: $light;
      &:hover {
        color: $warning;
      }
      &:active {
        color: $danger;
      }
      &:visited {
        color: $success;
      }
    }
    pre,
    code {
      background-color: #002e3a;
      font-family: $code-font;
    }
    pre {
      padding: 1em;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: $secondary-font !important;
      font-style: bold;
      text-align: center;
      margin: 2rem auto;
      color: $light;
    }
    div,
    p,
    span,
    table {
      font-family: $primary-font !important;
    }
  }
}
.v-dialog.image-dialog {
  min-width: 95vw;
  width: auto;
  height: auto;
  .image-dialog__container {
    background-color: #000;
    display: flex;
    justify-content: center;
    position: relative;
    .dismiss {
      position: absolute;
      top: 1rem;
      right: 1rem;
      color: #fff;
      font-size: 1.5rem;
      z-index: 100;
      cursor: url('/images/cursors/cursor-click.png'), auto !important;
    }
    .image-dialog__image {
      width: auto;
    }
  }
}
</style>