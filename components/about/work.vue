<template>
  <section class="work">
    <div class="fixed-transparent-text hidden-md-and-down">
      <div>CONFIDENTIAL</div>
    </div>
    <div class="work__experience">
      <div class="work__experience--professional">
        <h3>RECENT PROFESSIONAL EXPERIENCE (past 5 years)</h3>
        <ol>
          <li>R4 TECHNOLOGIES: 11/2016 - present</li>
          <ul>
            <li>member of core dev UI team</li>
            <li>assisted taking multiple projects from empty repo to production ready</li>
            <li>contributed to XEM, Data Science Portal, Portal 2, EZ Portal, and other projects</li>
            <li>used Angular, Typescript, Highcharts, D3, NodeJS, AG-Grid, Muuri, Prime-ng, & Angular Material</li>
            <li>
              LINKS:
              <a href="https://r4.ai/" target="_blank">R4 HOMEPAGE</a>
            </li>
          </ul>
          <li>
            SNAGAPPLE
            <i>(new name pending)</i>: 5/2017 - 6/2018
          </li>
          <ul>
            <li>wrote agent portal API using NodeJS, ExpressJS, and Sequelize</li>
            <li>contributed to front end applications built with Angular and Prime-ng</li>
          </ul>
          <li>KAPSCH TRAFFICCOM: 10/2014 - 11/2016</li>
          <ul>
            <li>primary contributor to web app that controls and monitors MOPAC express lanes</li>
            <li>sole creator of their PDF reports generator using NodeJS</li>
            <li>used jQuery, AngularJS, Kendo UI, D3, Raphael, and other libraries</li>
            <li>
              LINKS:
              <a
                href="http://www.fox7austin.com/news/local-news/190282082-story"
                target="__blank"
              >Fox 7 story with video of screens from MOPAC app</a>
            </li>
          </ul>
        </ol>
      </div>
      <div class="work__experience--side">
        <h3>SIDE WORK</h3>
        <small>NOTE: agent hasn't done much public facing side work due to time constraints</small>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.work {
  .fixed-transparent-text {
    font-size: 7rem;
    color: rgba(191, 63, 65, 0.3);
    position: absolute;
    transform: rotate(37deg);
    top: 22rem;
    right: 13rem;
    z-index: -1;
  }
  .work__experience {
    padding: 2rem;
    .work__experience--professional {
      ol,
      ul,
      li,
      h3 {
        font-family: my_underwoodregular;
      }
      h3 {
        text-decoration: underline;
      }
    }
    .work__experience--side {
      padding-top: 1rem;
      h3,
      small {
        font-family: my_underwoodregular;
      }
      h3 {
        text-decoration: underline;
      }
      small {
        font-style: italic;
      }
    }
  }
}
</style>