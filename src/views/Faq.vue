<template>
  <div class="content">
    <h3>FAQ</h3>
    <div v-html="compiledMarkdown"></div>
  </div>
</template>
<script>
import marked from "marked";
import faq from "!raw-loader!../../data/faq.md";
export default {
    computed: {
    compiledMarkdown: function () {
      return marked(faq, { sanitize: true })
    }
  },
}; 

</script>