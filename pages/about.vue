<template>
  <section class="about">About page</section>
</template>

<script>
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
          content: 'Joey Gauthier, Paul Gauthier, web developer, software engineer'
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
.about {
  min-height: calc(100vh - 7rem);
  background-color: #000;
}
</style>