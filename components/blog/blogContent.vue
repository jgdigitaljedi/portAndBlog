<template>
  <div class="blog-slug">
    <div class="blog-image__container"></div>
    <v-card class="markdown-content">
      <article v-html="postContent"></article>
    </v-card>
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
    postContent: null
  },
  data() {
    return {
      imageDialog: false,
      imageSrc: ''
    };
  },
  mounted() {
    console.log('process.browser', process.browser);
    if (process.browser && window) {
      window.openImage = src => {
        this.openImage(src);
      };
    }
  },
  methods: {
    openImage(src) {
      this.imageSrc = src;
      this.imageDialog = true;
    }
  }
};
</script>

<style lang="scss">
@import '~/assets/style/theme.scss';
@import '~/assets/style/shadows.scss';
.blog-slug {
  max-width: 1440px;
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
      padding: 1em;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: $game-font !important;
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