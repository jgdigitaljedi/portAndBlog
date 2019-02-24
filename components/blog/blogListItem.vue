<template>
  <v-card dark class="item-container nes-container is-dark">
    <nuxt-link :to="`/blog/${which}/${post.slug}`" class="outer-link">
      <v-card-title>
        <div :to="`/blog/${which}/${post.slug}`" class="link-content">
          <h4>{{post.title}}</h4>
        </div>
      </v-card-title>
      <div class="blog-list-inner" :class="{'switch-direction': $vuetify.breakpoint.mdAndDown}">
        <v-card-text class="blog-list-inner__text">
          <small>{{ post.created_at }}</small>
          <p>{{ post.intro }}</p>
        </v-card-text>
        <v-responsive class="blog-list-inner__thumb hidden-sm-and-down" v-if="post.image">
          <img class="blog-list-inner__thumb--image" :src="post.image">
        </v-responsive>
      </div>
    </nuxt-link>
  </v-card>
</template>

<script>
export default {
  props: ['post', 'which']
};
</script>

<style lang="scss" scoped>
@import '~/assets/style/theme.scss';
.item-container {
  width: 100%;
  height: 100%;
  color: $black;
  margin: auto 1rem;
  border: 2px solid $white;
  padding: 1rem;
  .outer-link {
    &:hover {
      .v-card__title .link-content h4 {
        text-decoration: underline;
        color: $warning;
      }
    }
    &:visited {
      .v-card__title .link-content h4 {
        color: $success;
        text-decoration: none;
      }
    }
    &:active {
      .v-card__title .link-content h4 {
        color: $danger;
        text-decoration: underline;
      }
    }
    .link-content h4 {
      color: $info;
      text-decoration: none;
    }
  }
  .blog-list-inner {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    $font-family: $primary-font;
    &.switch-direction {
      flex-direction: column;
    }
    .blog-list-inner__text {
      margin-right: 1rem;
      color: $white;
      $font-family: $primary-font;
      small {
        color: $light;
        font-family: $primary-font;
        font-style: italic;
      }
    }
    .blog-list-inner__thumb--image {
      max-width: 10rem;
      height: auto;
    }
  }
}
</style>