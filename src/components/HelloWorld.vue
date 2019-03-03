<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <a href="https://reg.com" target="_blank" rel="noopener">Preregister</a>
    </p>
    <ul>
      <h3>Challenge</h3>
      <li>
        Build a website. On our first collaboration with ReactiveConf, we made a
        digression from advanced topics like Machine Learning and Enhanced
        Realities we had before. Kind of. Your challenge would be to create a
        perfect website for very specific purpose we will unveil on the event.
        Don’t be afraid, nothing is easy in a life of developer.
      </li>
      <h3>Competition rules</h3>
      <li>
        We will measure (with generally used tools) User Experience and
        technical parameters of a website. Think of Lighthouse. This will be 30%
        of a points you can get. Our Mentor will add a personal opinion based on
        subjective criteria like graphical design, which will account for
        another 30% of points. These subjective points will be judged from a 15
        minute pitch of every team at the end of the event. Other 40 percents
        will be measured from a success of the page on market. Again, details
        will be explained on the hackathon.
      </li>
      <h3>Prize</h3>
      <li>
        We’ll be blunt here. If you are in for a money, you are in a wrong
        place. We are doing this for fun and we want to return the original
        meaning to the Hackathon events. This is not an easy way to make a money
        for skilled developers and we are not doing hire-a-thon. That being
        said, there will be prize that can change a life. Maybe not yours though
        :-)
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
