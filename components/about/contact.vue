<template>
  <section class="contact">
    <div class="fixed-transparent-text hidden-md-and-down">
      <div>REDACTED</div>
    </div>
    <h1>CONTACT JOEY</h1>
    <div class="contact__actual">
      <h3>CONTACT INFO</h3>
      <ul>
        <li>LAST KNOWN ADDRESS:
          <div class="redacted" style="width: 25rem; max-width: 100%;"></div>
        </li>
        <li>PHONE #:
          <div class="redacted" style="width: 11rem;  max-width: 100%;"></div>
        </li>
        <li>EMAIL: joey@joeyg.me</li>
        <li>SPOUSE:
          <div class="redacted" style="width: 15rem;  max-width: 100%;"></div>
        </li>
      </ul>
    </div>
    <div class="contact__social">
      <h3>SOCIAL</h3>
      <div class="social-wrapper" :class="{'small': $vuetify.breakpoint.xs}">
        <div class="left">
          <div class="twitter social-link">
            <a href="https://twitter.com/jgdigitaljedi" target="_blank">
              <v-icon>icon-twitter</v-icon>Twitter
            </a>
          </div>
          <div class="spotify social-link">
            <a
              href="https://open.spotify.com/user/jdigitaljedi?si=FJ4SnMETTjS4Xd5eTM6JWg"
              target="_blank"
            >
              <v-icon>icon-spotify</v-icon>Spotify
            </a>
          </div>
          <div class="github social-link">
            <a href="https://github.com/jgdigitaljedi" target="_blank">
              <v-icon>icon-github</v-icon>GitHub
            </a>
          </div>
        </div>
        <div class="right">
          <div class="linkedin social-link">
            <a href="https://www.linkedin.com/in/paulgauthier81" target="_blank">
              <v-icon>icon-linkedin2</v-icon>LinkedIn
            </a>
          </div>
          <div class="lastfm social-link">
            <a href="https://www.last.fm/user/joeygstrings" target="_blank">
              <v-icon>icon-lastfm</v-icon>Last.fm
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: my_underwoodregular;
    font-size: 3rem;
    margin-top: 2rem;
  }
  .fixed-transparent-text {
    font-size: 11rem;
    color: rgba(191, 63, 65, 0.3);
    position: absolute;
    transform: rotate(37deg);
    top: 22rem;
    right: 9rem;
    z-index: -1;
  }
  .contact__actual,
  .contact__social {
    padding: 1rem;
    position: relative;
    max-width: 100%;
    h3 {
      text-decoration: underline;
    }
    li,
    h3 {
      font-family: my_underwoodregular;
    }
    li {
      display: flex;
      .redacted {
        background-color: lighten(#000, 10%);
        height: 1.6rem;
        margin: 0.2rem 0 auto 1rem;
      }
    }
  }
  .contact__social {
    width: 65%;
    .social-wrapper {
      display: flex;
      justify-content: space-between;
      width: 100%;
      &.small {
        flex-direction: column;
      }
      .social-link {
        font-family: my_underwoodregular;
        font-size: 2rem;
        margin-top: 2rem;
        pointer-events: auto;
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
            color: #333;
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
  }
}
</style>