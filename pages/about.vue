<template>
  <section class="about" v-if="isMounted">
    <div class="summary about--subsection">
      <h3 class="bottom-margin">I'm Joey Gauthier, a software engineer and retro game collector!</h3>
      <div class="bottom-margin">
        As far as being a developer/engineer is concerned, I'm a very functionality and performance focused developer as opposed to a design
        oriented developer. I view development as a complex logic problem and I thrive on the opportunity to take on solving the most complex problems
        that arise. In other words, if there is a 1-point layout ticket and a 10-point ticket for writing a complex service or visualiztion, I'll be grabbing
        the second ticket!
      </div>
      <div>
        As a retro game collector, I'm a life-long video gamer that appreciates the technology and history of video games and collects anything I can get
        my hands on! I'm less interested in sealed copies of games and more interested in playing them. I also am the guy that has everything hooked up
        to upscalers and takes apart my old consoles to solder in new capacitors so they last a lot longer.
      </div>
    </div>
    <div class="skills about--subsection">
      <h3 class="bottom-margin">What I do</h3>
      <div class="bottom-margin skill">
        <h4 class="skill-title">Front-end Frameworks</h4>
        <div>Angular, Vue, Nuxt</div>
      </div>
      <div class="bottom-margin skill">
        <h4 class="skill-title">Visualizations</h4>
        <div>HighCharts, D3, Chart.js, Kendo UI, raw JavaScript</div>
      </div>
      <div class="bottom-margin skill">
        <h4 class="skill-title">Backend</h4>
        <div>NodeJS, ExpressJS, MongoDB, Maria DB</div>
      </div>
      <div class="bottom-margin skill">
        <h4 class="skill-title">Deployments/Tools</h4>
        <div>AWS, Jenkins, Netlify, Apigee</div>
      </div>
    </div>
    <div class="web about--subsection">
      <div class="twitter social-link">
        <a
          href="https://twitter.com/jgdigitaljedi"
          target="_blank"
          rel="external"
          @click="socialLinkClick('twitter')"
        >
          <v-icon>icon-twitter</v-icon>Twitter
        </a>
      </div>
      <div class="spotify social-link">
        <a
          href="https://open.spotify.com/user/jdigitaljedi?si=FJ4SnMETTjS4Xd5eTM6JWg"
          target="_blank"
          rel="external"
          @click="socialLinkClick('spotify')"
        >
          <v-icon>icon-spotify</v-icon>Spotify
        </a>
      </div>
      <div class="github social-link">
        <a
          href="https://github.com/jgdigitaljedi"
          target="_blank"
          rel="external"
          @click="socialLinkClick('github')"
        >
          <v-icon>icon-github</v-icon>GitHub
        </a>
      </div>
      <div class="linkedin social-link">
        <a
          href="https://www.linkedin.com/in/paulgauthier81"
          target="_blank"
          rel="external"
          @click="socialLinkClick('linkedIn')"
        >
          <v-icon>icon-linkedin2</v-icon>LinkedIn
        </a>
      </div>
      <div class="lastfm social-link">
        <a
          href="https://www.last.fm/user/joeygstrings"
          target="_blank"
          rel="external"
          @click="socialLinkClick('lastFm')"
        >
          <v-icon>icon-lastfm</v-icon>Last.fm
        </a>
      </div>
    </div>
    <div class="hobbies about--subsection">hobbies</div>
    <div class="facts about--subsection">facts</div>
    <div class="work about--subsection">work</div>
  </section>
</template>

<script>
export default {
  name: 'AboutPage',
  components: {},
  head() {
    return {
      title: `Joey Gauthier | About`,
      link: [{ rel: 'canonical', href: 'https://joeyg.me/about' }],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Joey Gauthier - Coding background, JavaScript projects, GitHub, and information'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'Joey Gauthier,Paul Gauthier,web developer,software engineer,digitaljedi,digital jedi,jgdigitaljedi'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `Joey G | About`
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Joey Gauthier - Coding background, JavaScript projects, GitHub, and information'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `Joey G | About`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Joey Gauthier - Coding background, JavaScript projects, GitHub, and information'
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
      isMounted: false,
      selectedTab: 1
    };
  },
  mounted() {
    this.isMounted = true;
  },
  computed: {
    gdprAnswer() {
      return this.$store.getters.getGdpr;
    }
  },
  methods: {
    socialLinkClick(which) {
      if (this.gdprAnswer === 'accept') {
        this.$ga.event('aboutSocialLink', 'click', which);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~/assets/style/theme.scss';
@import '~/assets/style/shadows.scss';
.about {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 4px;
  grid-row-gap: 4px;
  justify-items: center;
  padding: 3rem;
  background-color: #303030;
  .bottom-margin {
    margin-bottom: 1rem;
  }
  .summary {
    grid-column: 1;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .skills {
    grid-column: 2;
    grid-row: 1;
    .skill .skill-title {
      font-weight: bold;
    }
  }
  .hobbies {
    grid-column: 1;
    grid-row: 2;
  }
  .web {
    grid-column: 3;
    grid-row: 1;
    .social-link {
      // font-family: my_underwoodregular;
      font-size: 2rem;
      margin-top: 2rem;
      &.twitter {
        a,
        .v-icon {
          color: #00aced;
        }
      }
      &.linkedin {
        a,
        .v-icon {
          color: #0077b5;
        }
      }
      &.spotify {
        a,
        .v-icon {
          color: #1db954;
        }
      }
      &.lastfm {
        a,
        .v-icon {
          color: #d51007;
        }
      }
      &.github {
        a,
        .v-icon {
          color: #fff;
        }
      }
      a {
        text-decoration: none;
        display: flex;
        align-items: baseline;
      }
      .v-icon {
        font-size: 2.3rem;
        margin-right: 1rem;
      }
    }
  }
  .facts {
    grid-column: 2;
    grid-row: 2;
  }
  .work {
    grid-column: 3;
    grid-row: 2;
  }
}
</style>