<template>
  <div class="post-wrapper" :class="{'overflow-x': animationsDone}">
    <blogHeader :post="post" :which="which" class="post-header"></blogHeader>
    <div
      class="post"
      v-if="post"
      :class="{'medium': $vuetify.breakpoint.md, 'small': $vuetify.breakpoint.smAndDown, 'gaming': which === 'gaming', 'coding': which === 'coding'}"
    >
      <div
        class="post__content-wrapper"
        :class="{'small': $vuetify.breakpoint.smAndDown && isMounted}"
      >
        <div class="post-content">
          <blogContent :post="post" :postContent="postContent" :which="which"></blogContent>
        </div>
        <section class="post__wrapper--extras">
          <div
            class="post__wrapper--extras__section hidden-sm-and-down"
            v-if="sectionAnchors && sectionAnchors.length"
          >
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
          <div class="post__wrapper--extras__section" v-if="post">
            <div class="extra-header">Share Post</div>
            <div class="extra-content">
              <SocialButtons
                :url="`blog/${which}/${post.slug}`"
                :title="post.title"
                :desc="post.intro"
                :quote="post.tag_line"
                :hashtags="hashtags"
                :row="$vuetify.breakpoint.smAndDown && isMounted"
              ></SocialButtons>
            </div>
          </div>
          <div
            class="post__wrapper--extras__section related-boxes"
            v-if="related && related.length"
          >
            <div class="extra-header">Related Posts</div>
            <div class="extra-content">
              <nuxt-link
                v-for="(rel, index) in related"
                :key="rel.id"
                :to="`/blog/${which}/${rel.slug}`"
                @click.native="relatedClicked(rel)"
                :aria-label="`related post - ${rel.title}`"
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
      <blogComments v-if="gdprAnswer" :post="post" :which="which" class="comments"></blogComments>
    </div>
    <ScrollToTop class="scroll-btn"></ScrollToTop>
  </div>
</template>

<script>
import ScrollToTop from '~/components/ScrollToTop.vue';
import SocialButtons from '~/components/Share.vue';

export default {
  name: 'blogPostSlug',
  components: { ScrollToTop, SocialButtons },
  props: ['post', 'which', 'postContent'],
  data() {
    return {
      isMounted: false,
      sectionAnchors: [],
      posts: this.$store.state.posts,
      related: [],
      hashtags: '',
      animationsDone: false
    };
  },
  created() {
    this.getHashtags();
    if (this.which && this.posts) {
      const whichPosts = this.posts[this.which];
      if (whichPosts && this.post.related) {
        this.related = whichPosts.filter(post => this.post.related.indexOf(post.id) >= 0);
      }
    }
    this.sectionAnchors = this.post.headers.map(a => {
      return { title: a, position: 0 };
    });
    setTimeout(() => {
      this.animationsDone = true;
    }, 3000);
  },
  mounted() {
    this.isMounted = true;
    if (process.browser) {
      setTimeout(() => {
        this.getAnchorsFromPost();
      }, 500);
    }
  },
  computed: {
    gdprAnswer() {
      return this.$store.getters.getGdpr;
    }
  },
  methods: {
    getHashtags() {
      if (this.post.meta.hashtags) {
        this.hashtags = this.post.meta.hashtags;
      }
    },
    relatedClicked(related) {
      if (this.gdprAnswer === 'accept') {
        this.$ga.event('related link', 'click', this.related.title, this.post.id);
      }
    },
    getAnchorsFromPost() {
      const postContent = document.querySelector('.post-content');
      const anchors = postContent.querySelectorAll('h2');
      Array.from(anchors).forEach((anchor, index) => {
        const pos = anchor.getBoundingClientRect();
        this.sectionAnchors[index].position = pos.y - index * 2.6;
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
@import '~/assets/style/animations.scss';
.post-wrapper {
  overflow-x: hidden;
  position: relative;
  &.overflow-x {
    overflow-x: auto;
  }
}
.post {
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  position: relative;
  transition: padding 0.5s ease;
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
    justify-content: space-around;
    width: 100%;
    transition: flex-grow 1s linear;
    .post-content {
      opacity: 0;
      animation: 1s ease 1s normal forwards 1 hideShow;
      // width: auto;
      max-width: calc(100% - 4rem - 350px) !important;
    }
    .post__wrapper--extras {
      min-width: 350px;
      max-width: 500px;
      .post__wrapper--extras__section {
        transform: translateX(200%);
        animation: 1s ease 2s normal forwards 1 slideInFromRight;
        margin-bottom: 2.5rem;
        position: relative;
        width: auto;
        margin-left: 4rem;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        .extra-header {
          padding: 0.5rem 1rem;
          background-color: $pacman-purple;
          color: #fff;
          width: 100%;
          font-weight: bold;
        }
        .extra-content {
          background-color: rgba(255, 255, 255, 0.1);
          width: 95%;
          padding: 1rem;
          div a {
            color: #fafafa;
            &:hover {
              color: $light;
            }
          }
          .related-post {
            height: 15rem;
            overflow: hidden;
            .related-image {
              height: 100%;
              width: 100%;
            }
          }
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
    &.small {
      flex-direction: column;
      .post-content {
        max-width: 100% !important;
        width: auto;
      }
      .post__wrapper--extras {
        align-items: center;
        justify-content: center;
        max-width: 100%;
        // width: calc(100% - 2rem);
        width: 100%;
        .post__wrapper--extras__section {
          transform: translateX(0%);
          animation: none;
          margin: 1.5rem 1rem;
          .extra-content {
            width: 100%;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            .related-post {
              margin-top: 1rem;
            }
            .related-post-not-first {
              margin-top: 1rem;
            }
          }
        }
      }
    }
  }
  .comments {
    width: calc(100% - 2rem);
    max-width: 1440px;
    margin: 0 1rem;
    // animation: 1s 2s 1 hideShow;
  }
}
</style>