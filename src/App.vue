<template>
  <div id="app">
    <div id="nav">
      <NavRouter />
      <!--       <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>-->
    </div>
    <router-view />
    <a href="#" id="refresh-button" v-if="updateExists" @click="refreshApp">
      <svg style="width:24px;height:24px" viewBox="0 0 24 24" class="icon">
        <path
          fill="#42b983"
          d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"
        ></path>
      </svg>
    </a>
  </div>
</template>
<script>
import NavRouter from "@/components/NavRouter.vue";
export default {
  components: {
    NavRouter
  },
  data() {
    return {
      // refresh variables
      refreshing: false,
      registration: null,
      updateExists: false
    };
  },
  methods: {
    showRefreshUI(e) {
      this.registration = e.detail;
      this.updateExists = true;
    },
    refreshApp() {
      this.updateExists = false;
      if (!this.registration || !this.registration.waiting) return;
      // send message to SW to skip the waiting and activate the new SW
      this.registration.waiting.postMessage("skipWaiting");
    }
  },
  created() {
    // ---
    // Custom code to let user update the app
    // when a new service worker is available
    // ---
    document.addEventListener("swUpdated", this.showRefreshUI, { once: true });

    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (this.refreshing) return;
      this.refreshing = true;
      // Here the actual reload of the page occurs
      window.location.reload();
    });
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 0 1.5em 1em 1.5em;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#refresh-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: #fff;
  background-color: #42b983;
  width: 25px;
  height: 25px;
  border-radius: 25px;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.1);
  padding: 10px;
}

.icon {
  transform: rotate(0deg);
  transition: fill 0.25s ease, transform 0.25s ease;
}

.icon:hover {
  transform: rotate(180deg);
}
.content {
  margin: 0 1.5em 2.5em 1.5em;
}
</style>
