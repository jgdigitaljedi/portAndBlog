<template>
  <section class="about" v-if="isMounted">
    <div class="about__dossier">
      <section class="about__dossier--general dossier" v-if="selectedTab === 1">
        <div class="dossier-top">
          <div class="img-and-paperclip">
            <img src="~/assets/images/me/me_dossier_paperclip.png">
          </div>
          <div class="jg-logo hidden-xs">
            <img src="~/assets/images/me/JG_embossed.png">
          </div>
        </div>
        <div class="fixed-transparent-text hidden-md-and-down">
          <div>FOR YOUR</div>
          <div>EYES ONLY</div>
        </div>
        <div class="about__dossier--general__info">
          <ol class="info-list" :class="{'small': $vuetify.breakpoint.xs}">
            <li>NAME: Joey Gauthier</li>
            <li>OCCUPATION: Software Engineer</li>
            <li>LOCATION: Texas</li>
            <li>HOBBIES: retro game collecting, guitar, drums, disc golf</li>
          </ol>
        </div>
      </section>
      <section class="about__dossier--tech dossier" v-if="selectedTab === 2">
        <div class="fixed-transparent-text hidden-md-and-down">
          <div>CLASSIFIED</div>
        </div>
        <div class="about__dossier--tech__proficiencies">
          <div class="tech-section right">
            <div class="tech-section__image">
              <img src="~/assets/images/about/license_to_kill.png">
            </div>
            <div class="tech-section__list">
              <h3 class="language-head">License to Kill with:</h3>
              <ul>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>HTML</li>
                <li>CSS (SCSS, LESS)</li>
                <li>NodeJS</li>
              </ul>
            </div>
          </div>
          <div class="tech-section left">
            <div class="tech-section__list">
              <h3>Weapons of Choice:</h3>
              <ul>
                <li>Visual Studio Code</li>
                <li>Postman</li>
                <li>Ubuntu</li>
                <li>Chrome</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
          <div class="tech-section right">
            <div class="tech-section__list">
              <h3>Fav. Weapon Upgrades:</h3>
              <ul>
                <li>Angular</li>
                <li>Vue</li>
                <li>Express</li>
              </ul>
            </div>
          </div>
          <div class="tech-section left">
            <div class="tech-section__list">
              <h3>Novice Level/In Training:</h3>
              <ul>
                <li>React</li>
                <li>Python</li>
                <li>Clojure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="about__dossier--work dossier" v-if="selectedTab === 3">WORK</section>
      <section class="about__dossier--contact dossier" v-if="selectedTab === 4">CONTACT</section>
      <section class="about__dossier--random dossier" v-if="selectedTab === 5">RANDOM</section>
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
        <label for="tab_5" :class="{'checked': selectedTab === 5}">RANDOM</label>
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

<style lang="scss" scoped>
@import '~/assets/style/theme.scss';
@import '~/assets/style/shadows.scss';
.about {
  min-height: calc(100vh - 7rem);
  overflow-y: auto;
  // background-color: $ge-background;
  background: -webkit-linear-gradient(to left, rgba(17, 23, 0, 0.7), rgba(17, 23, 0, 0.7)),
    url('../assets/images/patterns/background_paper.png') repeat;
  background: linear-gradient(to left, rgba(17, 23, 0, 0.7), rgba(17, 23, 0, 0.7)),
    url('../assets/images/patterns/background_paper.png') repeat;
  display: flex;
  justify-content: center;
  padding: 4rem 0;
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
    @include box_shadow(5);
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
    .about__dossier--tech {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      .fixed-transparent-text {
        top: 25rem;
        left: 13rem;
      }
      .about__dossier--tech__proficiencies {
        display: flex;
        flex-direction: column;
        margin-top: 3rem;
        .tech-section {
          margin: 1rem 0;
          display: flex;
          justify-content: space-between;
          .tech-section__image {
            position: relative;
            width: auto;
            img {
              max-height: 12rem;
              width: auto;
              // display: block;
              // content: '';
            }
            &:before {
              z-index: -1;
              position: absolute;
              content: '';
              bottom: 15px;
              left: 10px;
              width: 50%;
              top: 80%;
              max-width: 300px;
              background: #777;
              -webkit-box-shadow: 0 15px 10px #777;
              -moz-box-shadow: 0 15px 10px #777;
              box-shadow: 0 15px 10px #777;
              -webkit-transform: rotate(-5deg);
              -moz-transform: rotate(-5deg);
              -o-transform: rotate(-5deg);
              -ms-transform: rotate(-5deg);
              transform: rotate(-5deg);
            }
            &:after {
              z-index: -1;
              position: absolute;
              content: '';
              bottom: 15px;
              right: 3rem;
              left: auto;
              width: 50%;
              top: 80%;
              // max-width: 300px;
              background: #777;
              -webkit-box-shadow: 0 15px 10px #777;
              -moz-box-shadow: 0 15px 10px #777;
              box-shadow: 0 15px 10px #777;
              -webkit-transform: rotate(5deg);
              -moz-transform: rotate(5deg);
              -o-transform: rotate(5deg);
              -ms-transform: rotate(5deg);
              transform: rotate(5deg);
            }
          }
          &.right img {
            margin-right: 3rem;
          }
          &.left img {
            margin-left: 3rem;
          }
        }
      }
    }
    .about__dossier--general {
      position: relative;
      .dossier-top {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .img-and-paperclip {
          left: 2rem;
          top: -3rem;
          position: relative;
          img {
            max-height: 400px;
            position: relative;
          }
        }
        .jg-logo {
          margin-right: 4rem;
          img {
            max-width: 250px;
            height: auto;
          }
        }
      }
      .fixed-transparent-text {
        top: 22rem;
        right: 16rem;
      }
      .about__dossier--general__info {
        width: 100%;
        z-index: 10;
        display: flex;
        justify-content: center;
        ol.info-list {
          max-width: 40rem;
          width: auto;
          font-family: my_underwoodregular;
          font-size: 2rem;
          &.small {
            font-size: 1.55rem;
            margin: auto 0.5rem;
          }
        }
      }
    }
  }
  .about__tabs {
    font-family: my_underwoodregular;
    width: 2rem;
    .about__tabs--list {
      position: relative;
      input[type='radio'] {
        display: none;
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