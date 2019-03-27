<template>
  <social-sharing
    :url="`https://joeyg.me/${url}`"
    :title="title"
    :description="desc"
    :quote="quote"
    :hashtags="hashtags"
    twitter-user="JGDigitalJedi"
    class="social-buttons"
    :class="{'row': row}"
    inline-template
    @open="trackSocial"
  >
    <div>
      <network network="twitter" class="twit">
        <i class="icon-twitter"></i>Twitter
      </network>
      <network network="linkedin" class="linked">
        <i class="icon-linkedin2"></i>LinkedIn
      </network>
      <network network="facebook" class="fb">
        <i class="icon-facebook2"></i> Facebook
      </network>
      <network network="reddit" class="reddit">
        <i class="icon-reddit"></i> Reddit
      </network>
    </div>
  </social-sharing>
</template>

<script>
export default {
  name: 'ShareButtons',
  props: ['url', 'title', 'desc', 'quote', 'hashtags', 'row'],
  methods: {
    trackSocial(which, url) {
      this.$ga.event(`${which}Share`, 'click', url);
    }
  }
};
</script>

<style lang="scss">
.social-buttons {
  display: flex;
  flex-direction: column;
  &.row {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    span {
      margin-right: 2rem;
    }
  }
  span {
    margin: 0.5rem 0;
    cursor: url('/images/cursors/cursor-click.png'), auto !important;
    i {
      margin-right: 0.5rem;
      font-size: 1.5rem;
    }
  }
  .twit {
    color: #00aced;
  }
  .linked {
    color: #0077b5;
  }
  .fb {
    color: #3c5a99;
  }
  .reddit {
    color: #ff4500;
  }
}
</style>