<template>
  <v-card dark class="item-container" nuxt-link :to="`/blog/${which}/${post.slug}`">
    <div class="blog-list-inner__thumb hidden-sm-and-down" v-if="post.image && post.image.length">
      <img class="blog-list-inner__thumb--image" :src="post.image[0]">
    </div>
    <div
      :to="`/blog/${which}/${post.slug}`"
      class="outer-link"
      :class="{'no-image': !post.image || $vuetify.breakpoint.smAndDown}"
    >
      <v-icon v-if="post.pinned" class="pin">icon-pushpin</v-icon>
      <v-card-title>
        <div :to="`/blog/${which}/${post.slug}`" class="link-content">
          <h4>{{post.title}}</h4>
        </div>
      </v-card-title>
      <div
        class="blog-list-inner"
        :class="{'switch-direction': $vuetify.breakpoint.mdAndDown && isMounted}"
      >
        <v-card-text class="blog-list-inner__text">
          <small>{{ post.created_at }}</small>
          <p>{{ post.intro }}</p>
        </v-card-text>
      </div>
      <v-btn class="nes-btn continue-button">Continue Reading -></v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ['post', 'which'],
  data() {
    return {
      isMounted: false
    };
  },
  mounted() {
    this.isMounted = true;
  }
};
</script>

<style lang="scss">
@import '~/assets/style/theme.scss';
.item-container {
  width: 100%;
  height: 100%;
  margin: auto 1rem;
  border-top-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  padding: 0;
  display: flex;
  max-height: 26rem;
  .blog-list-inner__thumb {
    border-top-left-radius: 2rem;
    width: 30%;
    display: flex;
    flex-direction: column;
    max-height: 26rem;
    .blog-list-inner__thumb--image {
      border-top-left-radius: 2rem;
      flex: 1;
      width: 100%;
      height: auto;
      max-height: 26rem;
      object-fit: cover;
    }
  }
  button.continue-button.nes-btn {
    min-width: 15rem;
    max-width: 20rem;
    margin-left: 1rem;
    div.v-btn__content {
      font-family: $game-font;
      font-size: 0.85rem;
    }
  }
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
  .outer-link {
    display: flex;
    flex-direction: column;
    width: 70%;
    &.no-image {
      width: 100%;
    }
    .v-card__title {
      padding: 1rem 1rem 0 1rem;
    }
    .pin {
      position: absolute;
      right: 0.2rem;
      top: 0.2rem;
      color: $yellow;
    }
    .link-content h4 {
      color: $yellow;
      text-decoration: none;
      margin-right: 1rem;
    }
  }
  .blog-list-inner {
    display: flex;
    justify-content: space-between;
    padding: 0;
    $font-family: $primary-font;
    flex: 1;
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
  }
}
</style>