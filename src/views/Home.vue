<template>
  <div>
    <div class="tab-grid">
      <a class="tab-toggle" id="tab1" href="#tab1" role="tab">
        <h1>Challenge</h1>
      </a>

      <div class="tab-content-visible" role="tabpanel" aria-labelledby="tab1">
        <h2>Build a website.</h2>
        <p>
          On our first collaboration with ReactiveConf, we made a digression
          from advanced topics like Machine Learning and Enhanced Realities we
          had before. Kind of. Your challenge would be to create a perfect
          website for a non-governmental organization.
        </p>
        <p>
          Building website is an easy task. Until it isn't. If you add a few
          more requirements than regular blogging, you are suddendly looking at
          solution which is expensive to develop. What we want to do on this
          hackaton is to help NGOs to have a website in similar quality we can
          afford for ourselves here at Socialbakers.
        </p>
        <p>
          If you want to prepare, take a look at some NGOs sites and try to
          figure out their needs. They will benefit from easy page editing for
          sure, but there might be even more advanced features like donations,
          shop, SEO, SMO, mailing lists and so on.
        </p>
        <div class="cta">Accept Challenge</div>
      </div>

      <a class="tab-toggle" id="tab2" href="#tab2" role="tab">
        <h1>Rules</h1>
      </a>

      <div class="tab-content" role="tabpanel" aria-labelledby="tab2">
        We will measure (with generally used tools) User Experience and
        technical parameters of a website. Think of Lighthouse. This will be 30%
        of a points you can get. Our Mentor will add a personal opinion based on
        subjective criteria like graphical design, which will account for
        another 30% of points. These subjective points will be judged from a 15
        minute pitch of every team at the end of the event. Other 40 percents
        will be measured from a success of the page on market. Again, details
        will be explained on the hackathon.
        <div class="cta">Accept Challenge</div>
      </div>

      <a class="tab-toggle" id="tab3" href="#tab3" role="tab">
        <h1>Prize</h1>
      </a>

      <div class="tab-content" role="tabpanel" aria-labelledby="tab3">
        We’ll be blunt here. If you are in for a money, you are in a wrong
        place. We are doing this for fun and we want to return the original
        meaning to the Hackathon events. This is not an easy way to make a money
        for skilled developers and we are not doing hire-a-thon. That being
        said, there will be prize that can change a life. Maybe not yours though
        :-)
        <div class="cta">Accept Challenge</div>
      </div>

      <a class="tab-toggle" id="tab4" href="#tab4" role="tab">
        <h1>Participants</h1>
      </a>

      <div class="tab-content" role="tabpanel" aria-labelledby="tab4">
        You are very motivated and skilled developer, designer or a marketing
        person. You will be working together in a multidisciplinary team
        delivering the whole thing on the market. While our mentors work usually
        in javascript, typescript, python and Sketch, we don’t want to limit
        your tools to anything specific. This is battle for a net, fight with
        anything you can use.
        <div class="cta">Accept Challenge</div>
      </div>
    </div>
    <p>Mentors:</p>

    <p>Application process:</p>
    <ol>
      <li>
        Apply in the form: We need to balance team abilities, be honest about
        your capabilities please. Applications will be closed 20th April.
      </li>
      <li>
        Review process: We will review your application with help of mentors. We
        will come back to you in a week with results of a review.
      </li>
      <li>
        Ticket: If your review is positive, you will get a link to ticket. You
        need to confirm it within a 7 days limit. Capacity of a venue is
        limited, please consider seriously your ability to be there with us.
      </li>
    </ol>
  </div>
</template>

<style scoped>
h1 {
  color: #0d3cff;
  font: 900 2em 'Roboto', sans-serif;
}

h2 {
  color: #0d3cff;
  font: 2em 'Roboto', sans-serif;
}
a {
  text-decoration: none;
}
.cta {
  margin: 10vh auto;
  color: #0d3cff;
  font: 900 1.2em 'Roboto', sans-serif;
  text-decoration: #ffaaaa underline;
}
@media screen and (min-width: 1024px) {
  .tab-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25ch, auto));
    grid-template-rows: 5rem auto;
    margin: 5vh auto;
  }
}
.tab-toggle {
  display: block;
}
@media screen and (min-width: 1024px) {
  .tab-toggle {
    grid-row: 1/2;
  }
}

.tab-content {
  height: 0;
  opacity: 0;
  visibility: hidden;
  background: #fff;
}
@media screen and (min-width: 1024px) {
  .tab-content {
    grid-row-start: 2;
    grid-column: 1 / -1;
  }
}

.tab-content-visible {
  padding: 1rem;
  height: auto;
  opacity: 1;
  visibility: visible;
  background: #fff;
}
@media screen and (min-width: 1024px) {
  .tab-content-visible {
    grid-row-start: 2;
    grid-column: 1 / -1;
  }
}

.tab-toggle:target + .tab-content {
  padding: 1rem;
  height: auto;
  opacity: 1;
  visibility: visible;
}

body {
  padding: 1rem;
}
@media screen and (min-width: 1024px) {
  body {
    padding: 3rem;
  }
}
</style>
