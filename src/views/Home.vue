<template>
  <div class="content">
    <img alt="Hackathon logo" src="../assets/logo.svg" />
    <HelloWorld msg="Reactive|Hacks" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
