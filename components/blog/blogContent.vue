<template>
  <div class="blog-slug">
    <v-card class="markdown-content">
      <article v-html="postContent.default"></article>
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
  // max-width: 100%;
  width: auto;
  position: relative;
  .blog-image__carousel {
    box-shadow: none;
  }
  .blog-image__container {
    // width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 2em;
    .blog-image,
    .v-item--active {
      display: block;
      // width: 100%;
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
    // position: relative;
    .blog-table {
      border: 1px solid $light;
      width: 100%;
      border-collapse: collapse;
      th,
      td {
        border: 1px solid $light;
        padding: 0.5rem;
      }
      th {
        background-color: $pacman-purple;
        font-style: italic;
      }
      tr:nth-child(even) {
        background-color: rgba(255, 255, 255, 0.1);
      }
      .bold-yellow {
        color: $yellow;
        font-weight: bold;
      }
      .center {
        text-align: center;
      }
    }
    .writer-snippet {
      font-size: 1.6rem;
      color: $light;
      text-align: center;
      width: 90%;
    }
    .border-section {
      margin-bottom: 2rem;
      border: 1px solid $yellow;
      padding: 2rem;
    }
    .image-container {
      // width: 100%;
      text-align: center;
      margin: 1rem auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
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
    // position: relative;
    // width: 100%;
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
    code {
      // width: 100%;
      white-space: pre-wrap;
    }
    pre,
    code {
      background-color: #002e3a;
      font-family: $code-font;
      min-width: auto;
      box-shadow: none;
    }
    pre {
      padding: 1rem;
      overflow-x: scroll;
      width: 100%;
      position: relative;
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