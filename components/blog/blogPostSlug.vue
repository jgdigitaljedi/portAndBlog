<template>
  <div class="post-wrapper">
    <blogHeader :post="post" :which="which" class="post-header"></blogHeader>
    <div
      class="post"
      :class="{'medium': $vuetify.breakpoint.md && isMounted, 'small': $vuetify.breakpoint.smAndDown && isMounted, 'gaming': which === 'gaming', 'coding': which === 'coding'}"
    >
      <blogContent :post="post" :postContent="postContent"></blogContent>
      <v-divider style="width: 100%; max-width: 1400px; margin-top: 2rem;" dark></v-divider>
      <blogComments :post="post" :which="which" class="comments"></blogComments>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blogPostSlug',
  props: ['post', 'which', 'postContent'],
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
.post {
  padding: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  &.coding {
    background: -webkit-linear-gradient(to top, rgba(0, 0, 0, 1), rgba(31, 86, 115, 0.7)),
      url('../../assets/images/patterns/cubes_lines2.png') repeat;
    background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(31, 86, 115, 0.7)),
      url('../../assets/images/patterns/cubes_lines2.png') repeat;
  }
  &.gaming {
    // background: -webkit-linear-gradient(to top, rgba(0, 0, 0, 1), rgba(166, 19, 14, 0.7)),
    //   url('../../assets/images/patterns/gaming-pattern2.png') repeat;
    // background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(166, 19, 14, 0.7)),
    //   url('../../assets/images/patterns/gaming-pattern2.png') repeat;
    background-color: #000;
  }
  background-color: $black;
  &.medium {
    padding: 1rem;
  }
  &.small {
    padding: 1rem 0.5rem;
  }
  .comments {
    width: 100%;
  }
}
</style>