<template>
  <div class="blog-slug">
    <div class="blog-title__container nes-container is-dark">
      <h2>{{post.title}}</h2>
      <small>posted {{post.created_at}}</small>
    </div>
    <div class="blog-image__container">
      <v-carousel
        v-if="post.image && post.image.length"
        dark
        cycle
        :hide-delimiters="true"
        active-class="blog-image__carousel"
      >
        <v-carousel-item v-for="(item, index) in post.image" :key="index">
          <img :src="item" class="blog-image">
        </v-carousel-item>
      </v-carousel>
    </div>
    <v-card class="markdown-content" v-html="postContent"></v-card>
  </div>
</template>

<script>
export default {
  name: 'BlogSlug',
  props: {
    post: null,
    postContent: null
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
  .blog-image__container,
  .blog-title__container {
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
  .blog-title__container {
    flex-direction: column;
    align-items: center;
    small {
      font-style: italic;
      color: $light;
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
    blockquote,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: $secondary-font !important;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      text-align: center;
      margin: 2rem auto;
    }
    div,
    p,
    span,
    table {
      font-family: $primary-font !important;
    }
  }
}
</style>