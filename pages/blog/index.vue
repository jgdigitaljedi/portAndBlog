<template>
  <div class="mario">
    <div class="mario__top-text"></div>
  </div>
  <!-- <section class="blog-list">
    <div class="disclaimer">
      <h2>Choose your adventure!</h2>
      <span class="hidden-sm-and-down"> The blogs are in a more readable font!</span>
    </div>
    <div class="posts-container" :class="{'flexColumn': $vuetify.breakpoint.smAndDown}">
      <nuxt-link
        class="blog-section-wrapper nes-container is-dark"
        to="/blog/gaming"
        :class="{'mobileWidth': $vuetify.breakpoint.smAndDown}"
      >
        <div class="blog-section-wrapper__link">
          <h2>Gaming</h2>
          <div class="blog-section-wrapper__img-wrap">
            <img src="~/assets/images/8-bit_nes_controller.png">
          </div>
        </div>
      </nuxt-link>
      <nuxt-link
        class="blog-section-wrapper nes-container is-dark"
        to="/blog/coding"
        :class="{'mobileWidth': $vuetify.breakpoint.smAndDown}"
      >
        <div class="blog-section-wrapper__link">
          <h2>Coding</h2>
          <div class="blog-section-wrapper__img-wrap">
            <img src="~/assets/images/retro_computer.png">
          </div>
        </div>
      </nuxt-link>
    </div>
  </section>-->
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
  min-height: calc(100vh - 6rem - 8px);
  background-color: $mario-sky;
  .mario__top-text {
    width: 100%;
    padding: 0.5em;
    font-family: $game-font;
    display: flex;
    justify-content: space-around;
  }
}
// .blog-list {
//   .disclaimer {
//     text-align: center;
//     font-family: $game-font;
//     margin-top: 2em;
//     h2 {
//       color: $light;
//     }
//   }
//   .posts-container {
//     display: flex;
//     align-items: center;
//     justify-content: space-around;
//     margin-top: 2em;
//     // flex-wrap: wrap;
//     &.flexColumn {
//       flex-direction: column;
//       align-items: space-around;
//       .blog-section-wrapper {
//         margin-bottom: 1em;
//       }
//     }
//     .blog-section-wrapper {
//       width: 48%;
//       // min-width: 400px;
//       max-width: 550px;
//       height: 600px;
//       &.mobileWidth {
//         width: 95%;
//         height: auto;
//       }
//       .blog-section-wrapper__link {
//         display: flex;
//         flex-direction: column;
//         height: 100%;
//         .blog-section-wrapper__img-wrap {
//           height: 100%;
//           display: flex;
//           align-items: center;
//           img {
//             height: auto;
//             width: auto;
//             max-width: 100%;
//           }
//         }
//       }
//     }
//   }
// }
</style>