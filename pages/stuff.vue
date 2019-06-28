<template>
  <no-ssr>
    <section class="stuff">
      <div class="stuff--toolbar__wrapper"></div>
    </section>
  </no-ssr>
</template>

<script>
export default {
  name: 'Stuff',
  head() {
    return {
      title: `Joey Gauthier | Video Game Collection`,
      link: [{ rel: 'canonical', href: 'https://joeyg.me/stuff' }],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Joey Gauthier - video game collection'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'Joey Gauthier,Paul Gauthier,video games,collection,n64,playstation,sega,nintendo'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `Joey G | Video Game Collection`
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Joey Gauthier - video game collection'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `Joey G | Video Game Collection`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Joey Gauthier - video game collection'
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
      isMounted: false
    };
  },
  mounted() {
    this.isMounted = true;
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.stuff {
  height: 100%;
  width: 100%;
  min-height: calc(100vh - 7rem);
}
</style>