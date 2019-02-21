<template>
  <div class="mario">
    <div class="mario__wrapper">
      <div class="mario__top-text">
        <div class="mario__top-text--score top-text-column">
          <div class="top-text-column__row">MARIO</div>
          <div class="top-text-column__row">000000</div>
        </div>
        <div class="mario__top-text--coins top-text-column">
          <div class="top-text-column__row">&nbsp;</div>
          <div class="top-text-column__row">
            <img src="~/assets/images/mario_coin.png" class="mario-coin">X00
          </div>
        </div>
        <div class="mario__top-text--world top-text-column">
          <div class="top-text-column__row">WORLD</div>
          <div class="top-text-column__row">1-1</div>
        </div>
        <div class="mario__top-text--time top-text-column">
          <div class="top-text-column__row">TIME</div>
        </div>
      </div>
      <div class="mario__box-logo">
        <div class="mario__box-logo--rivets top">
          <div>.</div>
          <div>.</div>
        </div>
        <div class="mario__box-logo--text-container">
          <div class="mario__box-logo--top-text logo-text">JOEY'S</div>
          <div class="mario__box-logo--bottom-text logo-text">SUPER BLOG.</div>
        </div>
        <div class="mario__box-logo--rivets bottom">
          <div>.</div>
          <div>.</div>
        </div>
      </div>
      <div class="mario__copyright">@2019 Joey Gauthier</div>
      <div class="mario__blog-select">
        <div>
          <nuxt-link to="/blog/gaming" class="mario__blog-select--link">1 GAMING BLOG</nuxt-link>
        </div>
        <div>
          <nuxt-link to="/blog/coding" class="mario__blog-select--link">2 CODING BLOG</nuxt-link>
        </div>
      </div>
      <div class="mario__ground"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '~/assets/style/theme.scss';
$mario-sky: #6f7cf9;
$mario-ground: #c23600;
$mario-letters: #fcb2ab;
$mario-hill: #00db00;
$mario-bush: #4bff00;
$mario-bush-accent: #0c110c;

.mario {
  height: 100%;
  width: 100%;
  min-height: calc(100vh - 6rem - 8px);
  background-color: $mario-sky;
  display: flex;
  justify-content: center;
  .mario__wrapper {
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    flex-direction: column;
    .mario__top-text {
      width: 100%;
      padding: 0.5em;
      display: flex;
      justify-content: space-around;
      .top-text-column {
        font-family: $game-font;
        font-size: 1.2em;
        display: flex;
        flex-direction: column;
        .mario-coin {
          height: 1.2em;
          width: auto;
          margin: -8px 0.5em 0;
        }
      }
    }
    .mario__ground {
      position: absolute;
      bottom: 0;
      left: 0;
      min-height: 5em;
      width: 100%;
      background-image: url('/images/mario_ground_block.png');
      background-repeat: repeat;
      background-size: 5em 5em;
    }
    .mario__blog-select {
      width: 100%;
      text-align: center;
      margin-top: 3rem;
      .mario__blog-select--link {
        color: $white;
        font-family: $game-font;
        font-size: 1.5rem;
      }
    }
    .mario__copyright {
      text-align: right;
      width: 75%;
      font-family: $game-font;
      font-size: 1.5rem;
      color: $mario-letters;
    }
    .mario__box-logo {
      width: 75%;
      background-color: $mario-ground;
      border-top: 2px solid $mario-letters;
      border-left: 2px solid $mario-letters;
      border-right: 2px solid $mario-bush-accent;
      border-bottom: 2px solid $mario-bush-accent;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: flex-start;
      .mario__box-logo--rivets {
        display: flex;
        justify-content: space-between;
        width: 100%;
        left: 0;
        line-height: 1rem;
        &.top {
          margin-top: -1.75rem;
          margin-bottom: -1rem;
          // margin-top: -4rem;
          // margin-bottom: -4rem;
        }
        &.bottom {
          margin-bottom: 1rem;
          margin-top: -5rem;
          // margin-bottom: -2rem;
          // margin-top: -7rem;
        }
        div {
          font-size: 5rem;
          color: $mario-letters;
          text-shadow: 3px 3px $mario-bush-accent;
          padding: 1rem 0.5rem;
        }
      }
      .mario__box-logo--text-container {
        text-align: left;
        .logo-text {
          color: $mario-letters;
          font-family: mario_font;
          &.mario__box-logo--top-text {
            font-size: 7rem;
            text-shadow: 7px 7px $mario-bush-accent;
            margin-bottom: -3rem;
          }
          &.mario__box-logo--bottom-text {
            font-size: 14rem;
            text-shadow: 10px 10px $mario-bush-accent;
          }
        }
      }
    }
  }
}
</style>