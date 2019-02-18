<template>
  <section class="util__container">
    <!-- <div v-editable="story.content" class="blog">
      <h1>{{ story.content.name }}</h1>
      <img class="blog__image" :src="story.content.image">
      <div class="blog__body" v-html="body"></div>
    </div>-->
  </section>
</template>

<script>
import marked from 'marked'
// import storyblokLivePreview from '@/mixins/storyblokLivePreview';

export default {
  //   data() {
  //     return { story: { content: { body: '' } } };
  //   },
  //   computed: {
  //     body() {
  //       return marked(this.story.content.body);
  //     }
  //   },
  //   mixins: [storyblokLivePreview],
  //   asyncData(context) {
  //     let version = context.query._storyblok || context.isDev ? 'draft' : 'published';
  //     let endpoint = `cdn/stories/${context.params.language}/blog/gaming/${context.params.slug}`;
  //     return context.app.$storyapi
  //       .get(endpoint, {
  //         version: version,
  //         cv: context.store.state.cacheVersion
  //       })
  //       .then(res => {
  //         return res.data;
  //       })
  //       .catch(res => {
  //         context.error({ statusCode: res.response.status, message: res.response.data });
  //       });
  //   }
}
</script>


<style lang="scss" scoped>
.blog {
  padding: 2em;
  // max-width: 600px;
  // margin: 40px auto 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: auto;
    max-height: 400px;
  }
}

.blog__body {
  line-height: 1.6;
  display: block;
  width: 100%;
  text-align: left;
}
</style>