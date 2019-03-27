<template>
  <div class="progress-container">
    <div class="progress-bar" :style="{width: scrolled + '%'}"></div>
  </div>
</template>

<script>
export default {
  name: 'BlogScrollProgress',
  data() {
    return {
      scrolled: 0
    };
  },
  computed: {
    scrollPos() {
      return this.$store.getters.getScroll;
    }
  },
  methods: {
    handleScroll() {
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      this.scrolled = (this.scrollPos / height) * 100;
    }
  },
  watch: {
    scrollPos(state) {
      this.handleScroll();
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~/assets/style/theme.scss';
.progress-container {
  width: 100%;
  height: 4px;
  background-color: transparent;
  .progress-bar {
    width: 0%;
    height: 4px;
    background: $light;
  }
}
</style>