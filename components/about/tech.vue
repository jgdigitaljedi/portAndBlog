<template>
  <section class="about__dossier--tech dossier">
    <div class="fixed-transparent-text hidden-md-and-down">
      <div>CLASSIFIED</div>
    </div>
    <div class="about__dossier--tech__proficiencies">
      <div class="tech-section right">
        <div class="tech-section__image">
          <img
            src="~/assets/images/about/license_to_kill.png"
            alt="logos for NodeJS, Javascript, HTML, CSS, TypeScript with coffee stains"
          >
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
        <div class="tech-section__image">
          <img
            src="~/assets/images/about/weapons_of_choice.png"
            alt="logos for Chrome, Ubuntu, Postman, MongoDB, and Visual Studio Code done to look like an old photo"
          >
        </div>
      </div>
      <div class="tech-section right">
        <div class="tech-section__image">
          <img
            src="~/assets/images/about/weapon_addons.png"
            alt="logos for Angular and Vue with Express JS text made to look like a back and white photo"
          >
        </div>
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
          </ul>
        </div>
        <div class="tech-section__image">
          <img
            src="~/assets/images/about/novice.png"
            alt="logos for React and Python made to look like a polaroid photo"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '~/assets/style/theme.scss';
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
.fixed-transparent-text {
  font-size: 7rem;
  color: rgba(191, 63, 65, 0.3);
  position: absolute;
  transform: rotate(-37deg);
  // top: 22rem;
  // right: 16rem;
  z-index: -1;
}
.dossier {
  color: lighten($black, 15%);
  position: relative;
  ol > li,
  ul > li,
  h3 {
    font-family: my_underwoodregular;
  }
}
</style>