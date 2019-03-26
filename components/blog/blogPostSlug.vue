<template>
  <div class="post-wrapper">
    <blogHeader :post="post" :which="which" class="post-header"></blogHeader>
    <div
      class="post"
      :class="{'medium': $vuetify.breakpoint.md && isMounted, 'small': $vuetify.breakpoint.smAndDown && isMounted, 'gaming': which === 'gaming', 'coding': which === 'coding'}"
    >
      <div class="post__content-wrapper">
        <blogContent class="post-content" :post="post" :postContent="postContent" :which="which"></blogContent>
        <section class="post__wrapper--extras">
          <div class="post__wrapper--extras__section">
            <div class="extra-header">Jump To...</div>
            <div class="extra-content">
              <div
                class="extra-content__wrapper"
                v-for="(anchor, index) in sectionAnchors"
                :key="anchor.id"
              >
                <a @click="scrollToAnchor(anchor.position)">{{anchor.title}}</a>
                <v-divider v-if="index < sectionAnchors.length - 1"></v-divider>
              </div>
            </div>
          </div>
          <div class="post__wrapper--extras__section">
            <div class="extra-header">Related Posts</div>
            <div class="extra-content">
              <nuxt-link
                v-for="(rel, index) in related"
                :key="rel.id"
                :to="`/blog/${which}/${rel.slug}`"
                @click.native="relatedClicked(rel)"
              >
                <v-card class="related-post" :class="{'related-post-not-first': index > 0}">
                  <v-card-title>{{rel.title}}</v-card-title>
                  <v-img
                    class="related-image"
                    :src="rel.image ? rel.image : `https://res.cloudinary.com/https-joeyg-me/image/upload/v1552518203/me_8bit_scanlines.jpg`"
                    :alt="rel.alt ? rel.alt : '8bit style photo of Joey Gauthier with scanlines'"
                  ></v-img>
                </v-card>
              </nuxt-link>
            </div>
          </div>
        </section>
      </div>
      <v-divider style="width: 100%; max-width: 1400px; margin-top: 2rem;" dark></v-divider>
      <blogComments :post="post" :which="which" class="comments"></blogComments>
    </div>
    <ScrollToTop class="scroll-btn"></ScrollToTop>
  </div>
</template>

<script>
import ScrollToTop from '~/components/ScrollToTop.vue';

export default {
  name: 'blogPostSlug',
  components: { ScrollToTop },
  props: ['post', 'which', 'postContent'],
  data() {
    return {
      isMounted: false,
      sectionAnchors: [],
      posts: this.$store.state.posts,
      related: []
    };
  },
  mounted() {
    this.isMounted = true;
    if (this.which && this.posts) {
      const whichPosts = this.posts[this.which];
      if (whichPosts && this.post.related) {
        this.related = whichPosts.filter(post => this.post.related.indexOf(post.id) >= 0);
      }
    }
    if (process.browser) {
      setTimeout(() => {
        this.getAnchorsFromPost();
      });
    }
  },
  methods: {
    relatedClicked(related) {
      this.$ga.event('related link', 'click', this.related.title, this.post.id);
    },
    getAnchorsFromPost() {
      const postContent = document.querySelector('.post-content');
      const anchors = postContent.querySelectorAll('h2');
      this.sectionAnchors = Array.from(anchors).map((anchor, index) => {
        const pos = anchor.getBoundingClientRect();
        return { title: anchor.innerText, position: pos.y - index * 2.6 };
      });
    },
    scrollToAnchor(pos) {
      if (process.browser) {
        window.scroll({
          top: pos - 100,
          behavior: 'smooth'
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~/assets/style/theme.scss';
.post {
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  position: relative;
  &.coding {
    background-color: #000;
  }
  &.gaming {
    background-color: #000;
  }
  background-color: $black;
  &.medium {
    padding: 1rem;
  }
  &.small {
    padding: 1rem 0.5rem;
  }
  .post__content-wrapper {
    display: flex;
    // justify-content: space-around;
    width: 100%;
    .post-content {
      max-width: calc(100% - 4rem - 350px);
      width: auto;
    }
    .post__wrapper--extras {
      .post__wrapper--extras__section {
        margin-top: 2.5rem;
        position: relative;
        min-width: 350px;
        max-width: 500px;
        width: auto;
        margin-left: 4rem;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        .extra-header {
          padding: 0.5rem 1rem;
          background-color: #444;
          color: #fff;
          width: 100%;
        }
        .extra-content {
          background-color: rgba(255, 255, 255, 0.1);
          width: 95%;
          padding: 1rem;
          .related-post-not-first {
            margin-top: 2rem;
          }
          .extra-content-wrapper {
            padding: 1rem 0;
          }
          div {
            color: #fafafa;
            white-space: normal;
            width: auto;
          }
        }
      }
    }
  }
  .comments {
    width: 100%;
  }
}
</style>