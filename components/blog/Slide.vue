<template>
  <div class="slide" v-editable="blok">
    <img :src="blok.image">
  </div>
</template>

<script>
export default {
  props: ['blok']
};
</script>

<style lang="scss">
.slide {
  display: flex;
  justify-content: center;
  width: 100%;
  // width: 100%;
  img {
    height: auto;
    width: auto;
    max-height: 25%;
    max-height: 25%;
  }
}
</style>