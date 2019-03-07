<template>
  <div class="content">
    <h3>Mentors</h3>
    <div v-html="compiledMarkdown"></div>
  </div>
</template>
<script>
import marked from "marked";
import mentors from "!raw-loader!../../data/mentors.md";
export default {
    computed: {
    compiledMarkdown: function () {
      return marked(mentors, { sanitize: true })
    }
  },
}; 

</script>