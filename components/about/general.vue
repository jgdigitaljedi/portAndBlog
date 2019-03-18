<template>
  <section class="general">
    <div class="dossier-top">
      <div class="img-and-paperclip">
        <img
          src="~/assets/images/me/me_dossier_paperclip.png"
          alt="black and white image of Joey Gauthier with a paperclip on the top"
        >
      </div>
      <div class="jg-logo hidden-xs-only">
        <img src="~/assets/images/me/JG_embossed.png" alt="JG for Joey Gauthier in the Sega font">
      </div>
    </div>
    <div class="fixed-transparent-text hidden-md-and-down">
      <div>FOR YOUR</div>
      <div>EYES ONLY</div>
    </div>
    <div class="about__dossier--general__info">
      <ol class="info-list" :class="{'small': $vuetify.breakpoint.xs}">
        <li>NAME: Joey Gauthier</li>
        <li>ALIASES: DigitalJedi, JGDigitalJedi</li>
        <li>OCCUPATION: Software Engineer</li>
        <li>LOCATION: Texas</li>
        <li>HOBBIES: retro game collecting, guitar, drums, disc golf</li>
      </ol>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.general {
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
        margin-left: 1rem;
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
}
</style>