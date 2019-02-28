<template>
  <section class="blog-list" :class="which">
    <v-layout row wrap class="layout-wrapper">
      <v-flex
        class="bubble-wrapper"
        :key="post.id"
        v-for="post in posts"
        :class="{'med': $vuetify.breakpoint.md, 'sml': $vuetify.breakpoint.smAndDown && isMounted, 'larg': $vuetify.breakpoint.lgAndUp && isMounted}"
      >
        <blogListItem :post="post" :which="which"></blogListItem>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
export default {
  name: 'blogListContainer',
  props: ['posts', 'which'],
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
.blog-list {
  padding-left: 1rem;
  .blog-list__search {
    width: 100%;
    display: flex;
    justify-content: space-around;
    .blog-list__search--input,
    .blog-list__search--sort {
      width: 50%;
      max-width: 500px;
      margin: 0 2rem;
    }
    &.small {
      flex-direction: column;
      align-items: center;
      .blog-list__search--input,
      .blog-list__search--sort {
        width: 100%;
      }
    }
  }
  .layout-wrapper {
    margin-left: -1rem;
    .bubble-wrapper {
      margin: 1rem 1rem 0 0;
      &.larg {
        width: calc(50% - 1rem);
      }
      &.med {
        width: calc(50% - 1rem);
      }
      &.sml {
        width: 100%;
      }
    }
  }
}
</style>