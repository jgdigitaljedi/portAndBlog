<template>
  <section class="site">
    <div class="site-overview">
      <h3>Details of and Inspiration for This Site</h3>
      <p>
        This is my personal site so I didn’t feel the need to use traditional/trendy styling, layouts, typography, color theory, etc.
        It is supposed to be fun and most pages are inspired by a classic or famous video game screen. Since retro game collecting is
        such a big part of my life and there is even a gaming blog as a part of this site, I felt like I could escape the feeling that
        I needed to read up on the trendiest front end design and run with this idea of theming everything with classic video assets and styles.
      </p>
      <p>
        If you are interested in seeing the code, you can find the repo
        <a
          href="https://github.com/jgdigitaljedi/portAndBlog"
          target="_blank"
        >HERE</a>
      </p>
      <small>In case you aren't much of a video gamer, below you will find an overview of my inspiration for each section of this site:</small>
    </div>
    <div class="site-inspiration">
      <div class="site-inspiration__section">
        <h4>Navbar - Pac-man themed</h4>
        <div class="site-inspiration__section--about" :class="{'small': $vuetify.breakpoint.xs}">
          <v-img
            src="/images/about/Pac-man.png"
            alt="image of the classic Pac-man stage 1 start screen"
            class="site-inspiration__section--about__image"
          ></v-img>
          <p>
            The colors were taken directly from a screenshot of Pac-man. The primary colors you’ll see used a lot on this site
            are purple and black. The navigation links are always accompanied by Pac-man ghost (or in the case of the “Home” link,
            Pac-man himself). Power pellets fill the empty space between the links in desktop resolutions and a retro game style, triangular
            shaped cursor appears beside the active link and will flash when hovered. The ‘JG’ logo is done is Sega blue using the Sega font which
            doesn’t exactly fit the Pac-man theme here but serves as a general logo for the whole site.
          </p>
        </div>
      </div>
      <hr>
      <div class="site-inspiration__section">
        <h4>Home - generic space shooter themed</h4>
        <div class="site-inspiration__section--about" :class="{'small': $vuetify.breakpoint.xs}">
          <v-img
            src="/images/about/galaga.png"
            alt="image of the classic Galaga game"
            class="site-inspiration__section--about__image"
          ></v-img>
          <p>
            The home page is inspired by so many space shooter games. Think of Galaga as a good example here. The CSS “stars” animated
            in the background are intended to replicate that feeling. How the styled picture of me animated into the center of
            the screen, flashes once, then reappears with the text box below it is inspired by the title screen of many NES games. Think
            of the game ‘Contra’ as a good example here. The image of me is done in an 8-bit style with scan lines to further enforce that
            retro game feeling.
          </p>
        </div>
      </div>
      <hr>
      <div class="site-inspiration__section">
        <h4>Main Landing Page of Blog - Super Mario Bros themed</h4>
        <div class="site-inspiration__section--about" :class="{'small': $vuetify.breakpoint.xs}">
          <v-img
            src="/images/about/superMario.jpg"
            alt="image of Super Mario Bros title screen"
            class="site-inspiration__section--about__image"
          ></v-img>
          <p>
            This page is built to closely resemble the title screen of Super Mario Bros for the NES. Some of the assets used come
            directly from screenshots I found of the title screen and the same colors were used as well. I found a font that closely
            resembles the font used for the actual title block on this screen to be used for the text “Joey’s Super Blog”. You’ll notice
            that the small mushroom blinks when you hover on the blog section links just like it blinks in the game itself. Because this
            page is built to be responsive, you really have to view it on a desktop to see the full effect as the mobile version is stripped
            of some of the assets and styling.
          </p>
        </div>
      </div>
      <hr>
      <div class="site-inspiration__section">
        <h4>About (the page you are on) - 007 GoldenEye (N64) themed</h4>
        <div class="site-inspiration__section--about" :class="{'small': $vuetify.breakpoint.xs}">
          <v-img
            src="/images/about/goldeneye.png"
            alt="image of 007 GoldenEye options screen"
            class="site-inspiration__section--about__image"
          ></v-img>
          <p>
            The “About” page is styled after what I call the “Options” screen in 007 GoldenEye for the N64. Mainly, it resembles
            a tabbed-folder style dossier from the game with similar colors, layout, and navigation. The red crosshair cursor used is
            supposed to closely resemble the crosshair used in the menus of the game as well. I thought about even adding music from
            the game but decided that might be too much!
          </p>
        </div>
      </div>
      <hr>
      <div class="site-inspiration__section">
        <h4>Blog Section & Blog Posts - Pac-man colors</h4>
        <div class="site-inspiration__section--about" :class="{'small': $vuetify.breakpoint.xs}">
          <p>
            Since the blog section pages and blog posts have much more functionality, I decided to refrain from modeling them after classic video game
            screens and, instead, just tried to make pages that were highly functional, intuitive, and still somehow looked like they belonged with the rest of the site.
            The decision was made to use some of the Pac-man colors and retro-game style fonts just to tie in the layout and design choices in a small way with the rest of the site.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.site {
  padding: 2rem;
  .site-overview {
    h3,
    p,
    small {
      font-family: my_underwoodregular;
    }
    h3 {
      text-decoration: underline;
    }
    a {
      pointer-events: auto;
    }
  }
  .site-inspiration {
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    h4 {
      font-family: my_underwoodregular;
    }
    .site-inspiration__section {
      padding: 0.5rem 0;
      h4 {
        font-family: my_underwoodregular;
      }
      .site-inspiration__section--about {
        display: flex;
        &.small {
          flex-direction: column;
        }
        p {
          font-family: my_underwoodregular;
        }
        .site-inspiration__section--about__image {
          min-width: 12rem;
          height: auto;
          max-height: 15rem;
          margin-right: 1rem;
        }
      }
    }
  }
}
</style>