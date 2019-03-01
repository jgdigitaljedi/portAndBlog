<template>
  <section class="blog-list grid" :class="which">
    <blogListItem :post="post" :which="which" :key="post.id" v-for="post in posts"></blogListItem>
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
.grid {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-auto-rows: minmax(13rem, auto);
  grid-auto-flow: dense;
  padding: 1rem 0 0 1rem;
  justify-items: center;
  width: 100%;
}
</style>