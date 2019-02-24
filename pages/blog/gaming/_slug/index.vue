<template>
  <div class="post">
    <blogContent :post="post" :postContent="postContent"></blogContent>
    <v-divider style="width: 100%; max-width: 1400px; margin-top: 2rem;" dark></v-divider>
    <blogComments :post="post" which="gaming" class="comments"></blogComments>
  </div>
</template>

<script>
export default {
  layout: 'slug',
  head() {
    let post = this.post;
    return {
      title: "Joey Gauthier's Gaming Blog",
      meta: [
        {
          hid: post.meta.id,
          name: 'description',
          content: post.meta.content
        },
        {
          hid: post.meta.id + 1,
          name: 'keywords',
          content: post.meta.keywords
        }
      ]
    };
  },
  fetch({ store, params }) {
    store.dispatch('getPosts');
    store.dispatch('getPostWithSlug', { slug: params.slug, which: 'gaming' });
  },
  computed: {
    post() {
      return this.$store.state.post;
    },
    postContent() {
      let post = this.$store.state.post;
      return require(`~/content/posts/gaming/${post.id}.md`);
    }
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
  background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(166, 19, 14, 0.7)),
    url('/images/gaming-pattern2.png') repeat;
  .comments {
    width: 100%;
  }
}
</style>
