<template>
  <section class="about" v-if="isMounted">
    <div class="about__dossier">
      <section class="about__dossier--general dossier" v-if="selectedTab === 1">
        <GeneralTab></GeneralTab>
      </section>
      <section class="about__dossier--tech dossier" v-if="selectedTab === 2">
        <TechTab></TechTab>
      </section>
      <section class="about__dossier--work dossier" v-if="selectedTab === 3">
        <WorkTab></WorkTab>
      </section>
      <section class="about__dossier--contact dossier" v-if="selectedTab === 4">
        <ContactTab></ContactTab>
      </section>
      <section class="about__dossier--random dossier" v-if="selectedTab === 5">
        <SiteTab></SiteTab>
      </section>
    </div>
    <div class="about__tabs">
      <div class="about__tabs--list">
        <input
          class="about__tabs--list__item"
          type="radio"
          name="tabs"
          id="tab_1"
          v-model="selectedTab"
          :value="1"
        >
        <label for="tab_1" :class="{'checked': selectedTab === 1}">GENERAL</label>
        <input
          class="about__tabs--list__item"
          type="radio"
          name="tabs"
          id="tab_2"
          v-model="selectedTab"
          :value="2"
        >
        <label for="tab_2" :class="{'checked': selectedTab === 2}">TECH</label>
        <input
          class="about__tabs--list__item"
          type="radio"
          name="tabs"
          id="tab_3"
          v-model="selectedTab"
          :value="3"
        >
        <label for="tab_3" :class="{'checked': selectedTab === 3}">WORK</label>
        <input
          class="about__tabs--list__item"
          type="radio"
          name="tabs"
          id="tab_4"
          v-model="selectedTab"
          :value="4"
        >
        <label for="tab_4" :class="{'checked': selectedTab === 4}">CONTACT</label>
        <input
          class="about__tabs--list__item"
          type="radio"
          name="tabs"
          id="tab_5"
          v-model="selectedTab"
          :value="5"
        >
        <label for="tab_5" :class="{'checked': selectedTab === 5}">SITE</label>
      </div>
    </div>
  </section>
</template>

<script>
import GeneralTab from '~/components/about/general.vue';
import TechTab from '~/components/about/tech.vue';
import WorkTab from '~/components/about/work.vue';
import ContactTab from '~/components/about/contact.vue';
import SiteTab from '~/components/about/site.vue';
// style after N64 GoldenEye dossier/settings/mission screen with folders and tabs on right
export default {
  name: 'AboutPage',
  components: { GeneralTab, TechTab, WorkTab, ContactTab, SiteTab },
  head() {
    return {
      title: `Joey Gauthier | About`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Joey Gauthier - Coding background, JavaScript projects, GitHub, and information'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'Joey Gauthier,Paul Gauthier,web developer,software engineer,digitaljedi,digital jedi,jgdigitaljedi'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `Joey G | About`
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Joey Gauthier - Coding background, JavaScript projects, GitHub, and information'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `Joey G | About`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Joey Gauthier - Coding background, JavaScript projects, GitHub, and information'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: '/images/me_8bit_scanlines.jpg'
        }
      ]
    };
  },
  data() {
    return {
      isMounted: false,
      selectedTab: 1
    };
  },
  mounted() {
    this.isMounted = true;
  }
};
</script>

<style lang="scss" scoped>
@import '~/assets/style/theme.scss';
@import '~/assets/style/shadows.scss';
.about {
  cursor: url('/images/cursors/red_crosshair.png'), auto !important;
  min-height: calc(100vh - 7rem);
  overflow-y: auto;
  // background-color: $ge-background;
  background: -webkit-linear-gradient(to left, rgba(17, 23, 0, 0.7), rgba(17, 23, 0, 0.7)),
    url('../assets/images/patterns/background_paper.png') repeat;
  background: linear-gradient(to left, rgba(17, 23, 0, 0.7), rgba(17, 23, 0, 0.7)),
    url('../assets/images/patterns/background_paper.png') repeat;
  display: flex;
  justify-content: center;
  padding: 4rem 0 2rem;
  .fixed-transparent-text {
    font-size: 7rem;
    color: rgba(191, 63, 65, 0.3);
    position: absolute;
    transform: rotate(-37deg);
    // top: 22rem;
    // right: 16rem;
    z-index: -1;
  }
  .about__dossier {
    @include box_shadow(3);
    pointer-events: none;
    z-index: 10;
    max-width: 1000px;
    min-width: 300px;
    width: 95%;
    min-height: 400px;
    height: auto;
    background: -webkit-linear-gradient(to left, rgba(209, 210, 165, 0.7), rgba(209, 210, 165, 0.7)),
      url('../assets/images/patterns/tabs_paper.png') repeat;
    background: linear-gradient(to left, rgba(209, 210, 165, 0.7), rgba(209, 210, 165, 0.7)),
      url('../assets/images/patterns/tabs_paper.png') repeat;
    .dossier {
      color: lighten($black, 15%);
      position: relative;
      ol > li,
      ul > li,
      h3 {
        font-family: my_underwoodregular;
      }
    }
  }
  .about__tabs {
    font-family: my_underwoodregular;
    width: 2rem;
    pointer-events: auto;
    .about__tabs--list {
      position: relative;
      input[type='radio'] {
        display: none;
        transform: rotate(90deg);
      }
      label {
        font-family: my_underwoodregular;
        cursor: url('/images/cursors/cursor-click.png'), auto !important;
        background: -webkit-linear-gradient(
            to left,
            rgba(119, 110, 65, 0.7),
            rgba(119, 110, 65, 0.7)
          ),
          url('../assets/images/patterns/tabs_paper.png') repeat;
        background: linear-gradient(to left, rgba(119, 110, 65, 0.7), rgba(119, 110, 65, 0.7)),
          url('../assets/images/patterns/tabs_paper.png') repeat;
        transform: rotate(90deg);
        text-align: center;
        display: block;
        color: lighten($black, 15%);
        height: 2.5rem;
        width: 9rem;
        margin: 7rem 0 6.5rem -4rem;
        border-top-left-radius: 1.5rem;
        border-top-right-radius: 1.5rem;
        position: relative;
        &.checked {
          background: -webkit-linear-gradient(
              to left,
              rgba(209, 210, 165, 0.7),
              rgba(209, 210, 165, 0.7)
            ),
            url('../assets/images/patterns/tabs_paper.png') repeat;
          background: linear-gradient(to left, rgba(209, 210, 165, 0.7), rgba(209, 210, 165, 0.7)),
            url('../assets/images/patterns/tabs_paper.png') repeat;
          z-index: 15;
        }
      }
    }
  }
}
</style>