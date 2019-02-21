<template>
  <div class="blog-slug">
    <div class="blog-title__container">
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
    <div class="markdown-content" v-html="postContent"></div>
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
      // max-height: 400px;
      // max-width: 600px;
      // max-width: 100%;
      width: 100%;
      height: auto;
      max-height: 500px;
      object-fit: scale-down;
      &.mobile {
        max-height: 380px;
      }
    }
  }
  .blog-title__container {
    flex-direction: column;
    align-items: center;
  }
  .markdown-content section {
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