<template>
  <section class="about">
    <div class="about__dossier"></div>
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
    return {};
  }
};
</script>

<style lang="scss">
@import '~/assets/style/theme.scss';
.about {
  min-height: calc(100vh - 7rem);
  // background-color: $ge-background;
  background: -webkit-linear-gradient(to left, rgba(17, 23, 0, 0.7), rgba(17, 23, 0, 0.7)),
    url('../assets/images/patterns/background_paper.png') repeat;
  background: linear-gradient(to left, rgba(17, 23, 0, 0.7), rgba(17, 23, 0, 0.7)),
    url('../assets/images/patterns/background_paper.png') repeat;
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  .about__dossier {
    max-width: 1200px;
    min-width: 300px;
    width: 95%;
    min-height: 400px;
    background: -webkit-linear-gradient(to left, rgba(209, 210, 165, 0.7), rgba(209, 210, 165, 0.7)),
      url('../assets/images/patterns/dossier_paper.png') repeat;
    background: linear-gradient(to left, rgba(209, 210, 165, 0.7), rgba(209, 210, 165, 0.7)),
      url('../assets/images/patterns/dossier_paper.png') repeat;
  }
}
</style>