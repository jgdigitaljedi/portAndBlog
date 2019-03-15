<template>
  <section class="contact">
    <div class="fixed-transparent-text hidden-md-and-down">
      <div>REDACTED</div>
    </div>
    <div class="contact__actual">
      <h3>CONTACT INFO</h3>
      <ul>
        <li>LAST KNOWN ADDRESS:
          <div class="redacted" style="width: 25rem;"></div>
        </li>
        <li>PHONE #:
          <div class="redacted" style="width: 11rem;"></div>
        </li>
        <li>EMAIL: joey@joeyg.me</li>
        <li>SPOUSE:
          <div class="redacted" style="width: 15rem;"></div>
        </li>
      </ul>
    </div>
    <div class="contact__social">
      <h3>SOCIAL</h3>
      <div class="social-wrapper">
        <v-icon>icon-twitter</v-icon>&nbsp; TWITTER
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact {
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
}
</style>