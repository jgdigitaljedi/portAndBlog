<template>
  <section class="blog-header" :class="which">
    <div class="blog-header__written-by">
      <img
        src="~/assets/images/me/me_headshot.png"
        class="headshot"
        :class="{'mobile': $vuetify.breakpoint.smAndDown && isMounted}"
      >
      <small>Joey Gauthier</small>
      <small>{{post.created_at}}</small>
    </div>
    <div class="blog-header__title-nav">
      <div class="blog-header__title-social">
        <h2 v-if="$vuetify.breakpoint.mdAndUp && isMounted">{{post.title}}</h2>
        <h4 v-if="$vuetify.breakpoint.smAndDown && isMounted">{{post.title}}</h4>
        <small
          class="blog-header__title-social--tag hidden-sm-and-down"
          v-if="post.tag_line"
        >{{post.tag_line}}</small>
      </div>
      <div class="blog-header__title-nav--nav">
        <nuxt-link class="nav-button" :to="`/blog/${which}`">
          <div>{{which.toUpperCase()}} BLOG INDEX</div>
        </nuxt-link>
        <nuxt-link class="nav-button" :to="'/blog'">
          <div>MASTER BLOG INDEX</div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogHeader',
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

<style lang="scss" scoped>
@import '~/assets/style/theme.scss';
.blog-header {
  // padding: 2rem 1rem;
  display: flex;
  justify-content: space-around;
  &.gaming {
    background: -webkit-linear-gradient(45deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)),
      url('/images/blog.gaming/early_2019_collection.jpg') repeat;
    background: linear-gradient(45deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)),
      url('/images/blog/gaming/early_2019_collection.jpg') repeat;
    background-position: center;
  }
  &.coding {
    background: -webkit-linear-gradient(45deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)),
      url('/images/blog/coding/programming.jpg') repeat;
    background: linear-gradient(45deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)),
      url('/images/blog/coding/programming.jpg') repeat;
    background-position: center;
  }
  .blog-header__written-by {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 2rem;
    font-style: italic;
    color: $light;
    margin: 2rem 1rem;
    img.headshot {
      max-width: 10rem;
      width: auto;
      height: auto;
      &.mobile {
        max-width: 7rem;
      }
    }
  }
  .blog-header__title-nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    .blog-header__title-social {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h4,
      h2 {
        text-align: center;
      }
      .blog-header__title-social--tag {
        color: $light;
        font-style: italic;
      }
    }
    .blog-header__title-nav--nav {
      bottom: 0;
      right: 0;
      position: absolute;
      display: flex;
      .nav-button {
        border: 2px solid $pacman-purple;
        padding: 0.5rem;
        color: $pacman-purple;
        font-familt: $game-font;
      }
    }
  }
}
</style>
