<template>
  <section class="blog-header" :class="which">
    <div class="blog-header__written-by">
      <img
        src="/images/me_headshot.png"
        class="headshot"
        :class="{'mobile': $vuetify.breakpoint.smAndDown && isMounted}"
      >
      <small>Joey Gauthier</small>
      <small>{{post.created_at}}</small>
    </div>
    <div class="blog-header__title-social">
      <h2 v-if="$vuetify.breakpoint.mdAndUp && isMounted">{{post.title}}</h2>
      <h4 v-if="$vuetify.breakpoint.smAndDown && isMounted">{{post.title}}</h4>
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
  padding: 2rem 1rem;
  display: flex;
  justify-content: space-around;
  &.gaming {
    background: -webkit-linear-gradient(45deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)),
      url('/images/early_2019_collection.jpg') repeat;
    background: linear-gradient(45deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)),
      url('/images/early_2019_collection.jpg') repeat;
    background-position: center;
  }
  &.coding {
    background: -webkit-linear-gradient(45deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)),
      url('/images/programming.jpg') repeat;
    background: linear-gradient(45deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)),
      url('/images/programming.jpg') repeat;
    background-position: center;
  }
  .blog-header__written-by {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 2rem;
    font-style: italic;
    color: $light;
    img.headshot {
      max-width: 10rem;
      width: auto;
      height: auto;
      &.mobile {
        max-width: 7rem;
      }
    }
  }
  .blog-header__title-social {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
