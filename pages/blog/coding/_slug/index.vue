<template>
  <div class="post-wrapper">
    <blogPostSlug :post="post" which="coding" :postContent="postContent"></blogPostSlug>
  </div>
</template>

<script>
export default {
  layout: 'slug',
  head() {
    let post = this.post;
    return {
      title: post.title,
      meta: [
        {
          hid: post.id,
          name: 'description',
          content: post.title
        },
        {
          hid: `${post.id}k`,
          name: 'keywords',
          content: post.meta.keywords
        }
      ]
    };
  },
  fetch({ store, params }) {
    store.dispatch('getPosts');
    store.dispatch('getPostWithSlug', { slug: params.slug, which: 'coding' });
  },
  computed: {
    post() {
      return this.$store.state.post;
    },
    postContent() {
      let post = this.$store.state.post;
      return require(`~/content/posts/coding/${post.id}.md`);
    }
  }
};
</script>