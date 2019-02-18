<template>
  <section class="util__container blog-list">
    <div class="disclaimer">Don't worry, the blogs are in a more readable font!</div>
    <div class="posts-container">
      <div
        class="bubble-wrapper"
        :key="post.id"
        v-for="post in posts"
        :class="index % 2 === 0 ? 'right' : 'left'"
      >
        <!-- <nuxt-link
          :class="index % 2 === 0 ? 'from-right' : 'from-left'"
          :to="'/' + blogPost.full_slug"
          class="nes-balloon"
        >-->
        <router-link
          :class="index % 2 === 0 ? 'from-right' : 'from-left'"
          :to="{ name: 'slug', params: { slug: post.slug }}"
        >
          <h4>{{post.title}}</h4>
          <small>{{ post.created_at }}</small>
          <p>{{ post.content.intro }}</p>
        </router-link>
        <!-- </nuxt-link> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: 'First Last',
      meta: [
        { hid: 'home', name: 'meta name', content: 'meta content seo goodness' }
      ]
    }
  },
  fetch({ store }) {
    store.dispatch('getPosts')
  },
  computed: {
    posts() {
      return this.$store.state.posts.gaming
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/theme.scss';
.blog__overview {
  max-width: 600px;
  margin: 40px auto 60px;
  // &.nes-container.with-title.is-centered > .title {
  //   position: absolute;
  //   margin: none;
  //   z-index: 100;
  // }

  p {
    line-height: 1.6;
    color: $black;
    font-family: $game-font;
  }
}
.disclaimer {
  text-align: center;
  font-family: $game-font;
  margin-top: 2em;
}
.blog__detail-link {
  color: $info;
}
.posts-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
  .bubble-wrapper {
    display: flex;
    width: 80%;
    &.right {
      justify-content: flex-end;
    }
    &.left {
      justify-content: flex-start;
    }
  }
  .nes-balloon {
    max-width: 600px;
  }
}
</style>