<template>
  <div
    dark
    class="item-container"
    :class="{'photo': post.image && $vuetify.breakpoint.mdAndUp, 'no-photo': !post.image }"
  >
    <div class="item-container__inner">
      <div class="title">
        <div class="link-content">
          <h4>{{which === 'coding' ? '> ' : ''}}{{post.title}}{{which === 'coding' ? '_' : ''}}</h4>
        </div>
      </div>
      <div class="blog-list-inner__thumb hidden-sm-and-down" v-if="post.image && post.image.length">
        <img class="blog-list-inner__thumb--image" :src="post.image" :alt="post.alt">
      </div>
      <div class="intro-and-date">
        <div>
          <small>{{ post.created_at }}</small>
          <v-icon v-if="post.pinned" class="pinned-icon">icon-pushpin</v-icon>
        </div>
        <p>{{ post.intro }}</p>
      </div>
      <div class="blog-link-wrapper">
        <nuxt-link :to="`/blog/${which}/${post.slug}`" class="blog-link">Continue Reading -></nuxt-link>
      </div>
    </div>
  </div>
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
  height: 100%;
  border: 2px solid $pacman-purple;
  background-color: #000;
  padding: 0.5rem;
  grid-row-end: span 1;
  &.photo {
    grid-row-end: span 2;
  }
  .item-container__inner {
    border: 2px solid $pacman-purple;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    .title {
      background-color: $pacman-purple;
      padding: 1rem;
      h4 {
        color: black;
      }
    }
    .intro-and-date {
      padding: 1rem;
      .pinned-icon {
        color: $yellow;
      }
      small {
        color: $light;
        font-style: italic;
      }
      p {
        margin-top {
          margin-top: 1.5rem;
        }
      }
    }
    .blog-list-inner__thumb--image {
      width: 100%;
      height: auto;
      max-height: 20rem;
      object-fit: cover;
    }
    .blog-link-wrapper {
      background-color: rgba(77, 0, 185, 0.35);
      color: $white;
      width: 100%;
      flex: 1;
      text-align: center;
      min-height: 1.2rem;
      .blog-link {
        color: $white;
        height: 100%;
        font-family: $game-font;
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
      }
    }
  }
}
</style>