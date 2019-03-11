<template>
  <section class="about" v-if="isMounted">
    <div class="about__dossier"></div>
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
        <label for="tab_1" :class="{'checked': selectedTab === 1}">
          <div class="content">GENERAL</div>
        </label>
        <input
          class="about__tabs--list__item"
          type="radio"
          name="tabs"
          id="tab_2"
          v-model="selectedTab"
          :value="2"
        >
        <label for="tab_2" :class="{'checked': selectedTab === 2}">
          <div class="content">TECH</div>
        </label>
        <input
          class="about__tabs--list__item"
          type="radio"
          name="tabs"
          id="tab_3"
          v-model="selectedTab"
          :value="3"
        >
        <label for="tab_3" :class="{'checked': selectedTab === 3}">
          <div class="content">WORK</div>
        </label>
        <input
          class="about__tabs--list__item"
          type="radio"
          name="tabs"
          id="tab_4"
          v-model="selectedTab"
          :value="4"
        >
        <label for="tab_4" :class="{'checked': selectedTab === 4}">
          <div class="content">CONTACT</div>
        </label>
        <input
          class="about__tabs--list__item"
          type="radio"
          name="tabs"
          id="tab_5"
          v-model="selectedTab"
          :value="5"
        >
        <label for="tab_5" :class="{'checked': selectedTab === 5}">
          <div class="content">RANDOM</div>
        </label>
      </div>
    </div>
  </section>
</template>

<script>
// style after N64 GoldenEye dossier/settings/mission screen with folders and tabs on right
export default {
  head() {
    return {
      title: `Joey G | About`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Joey Gauthier - A little background and info'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'Joey Gauthier, Paul Gauthier, web developer, software engineer, digitaljedi, digital jedi, jgdigitaljedi'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `Joey G | About`
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Joey Gauthier - A little background and info'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `Joey G | About`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Joey Gauthier - A little background and info'
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

<style lang="scss">
@import '~/assets/style/theme.scss';
@import '~/assets/style/shadows.scss';
.about {
  min-height: calc(100vh - 7rem);
  // background-color: $ge-background;
  background: -webkit-linear-gradient(to left, rgba(17, 23, 0, 0.7), rgba(17, 23, 0, 0.7)),
    url('../assets/images/patterns/background_paper.png') repeat;
  background: linear-gradient(to left, rgba(17, 23, 0, 0.7), rgba(17, 23, 0, 0.7)),
    url('../assets/images/patterns/background_paper.png') repeat;
  display: flex;
  justify-content: center;
  padding: 3rem 0;
  .about__dossier {
    @include box_shadow(2);
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
  }
  .about__tabs {
    font-family: traveling_typewriter !important;
    .about__tabs--list {
      position: relative;
      input[type='radio'] {
        display: none;
      }
      label {
        &.content {
          font-family: traveling_typewriter !important;
        }
        font-family: traveling_typewriter !important;
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
        color: lighten($black, 10%);
        height: 3rem;
        width: 9rem;
        margin: 6.5rem 0 6.5rem -3rem;
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