<template>
  <section class="sidebar"></section>
</template>

<script>
export default {
  name: 'BlogListSidebar',
  data() {
    return {
      iMounted: false
    };
  },
  mounted() {
    this.isMounted = true;
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
}
</style>