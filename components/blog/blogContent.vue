<template>
  <div class="blog-slug">
    <div class="blog-title__container nes-container is-dark">
      <h2>{{post.title}}</h2>
      <small>posted {{post.created_at}}</small>
    </div>
    <div class="blog-image__container">
      <img
        :src="post.image"
        class="blog-image"
        v-if="post.image"
        :class="{'mobile': $vuetify.breakpoint.smAndDown}"
      >
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
  max-width: 1400px;
  .blog-image__container,
  .blog-title__container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 2em;
    .blog-image {
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
    div,
    p,
    span,
    table {
      font-family: $primary-font !important;
    }
  }
}
</style>