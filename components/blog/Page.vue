<template>
  <div v-editable="blok" class="page">
    <!-- <component :key="blok._uid" v-for="blok in blok.body" :blok="blok" :is="blok.component"></component> -->
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/theme.scss';
.page {
  background-color: $primary;
  margin-top: 2em;
}
</style>