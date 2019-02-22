<template>
  <div class="nes-balloon" :class="index % 2 === 0 ? 'from-right' : 'from-left'">
    <nuxt-link :to="`/blog/${which}/${post.slug}`" class="link-content">
      <h4>{{post.title}}</h4>
    </nuxt-link>
    <small>{{ post.created_at }}</small>
    <p>{{ post.intro }}</p>
  </div>
</template>

<script>
export default {
  props: ['post', 'index', 'which']
};
</script>

<style lang="scss" scoped>
@import '~/assets/style/theme.scss';
.nes-balloon {
  max-width: 600px;
  color: $black;
  .link-content {
    color: $info;
    text-decoration: underline;
    &:hover {
      color: $warning;
    }
    &:active {
      color: $danger;
    }
    &:visited {
      color: $success;
      text-decoration: none;
    }
  }
}
</style>