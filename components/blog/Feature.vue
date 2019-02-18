<template>
  <v-card dark v-editable="blok" class="feature util__flex-eq">
    <v-card-title class="feature__title">
      <div class="feature__icon-wrapper">
        <!-- <img :src="resizedIcon" class="feature__icon"> -->
        <v-icon>{{blok.icon}}</v-icon>
      </div>
      <h1>&nbsp; {{ blok.name }}</h1>
    </v-card-title>
    <v-card-text>
      <div class="feature__description">{{ blok.description }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  computed: {
    // resizedIcon() {
    //   if (typeof this.blok.icon !== 'undefined') {
    //     return '//img2.storyblok.com/80x80' + this.blok.icon.replace('//a.storyblok.com', '');
    //   }
    //   return null;
    // }
  },
  props: ['blok']
}
</script>

<style lang="scss">
@import '~/assets/style/shadows.scss';
@import '~/assets/style/theme.scss';
.feature {
  text-align: center;
  padding: 2em 0;
  margin: 0 1em 1em;
  color: $white;
  @include box_shadow(2);
  .feature__title {
    width: 100%;
    display: flex;
    justify-content: center;
    .feature__icon-wrapper {
      width: 100%;
    }
  }
}

.feature__icon {
  max-width: 80px;
}
</style>