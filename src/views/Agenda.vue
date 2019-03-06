<template>
  <div class="content">
    <h3>Agenda</h3>
    <div v-html="compiledMarkdown"></div>
  </div>
</template>
<script>
import marked from "marked";
import agenda from "!raw-loader!../../data/agenda.md";
export default {
    computed: {
    compiledMarkdown: function () {
      return marked(agenda, { sanitize: true })
    }
  },
}; 

</script>