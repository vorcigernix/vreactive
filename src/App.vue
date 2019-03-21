<template>
  <div id="app">
    <div id="nav">
      <NavRouter/>
    </div>
    <router-view/>
    <a href="#" id="refresh-button" v-if="updateExists" @click="refreshApp">
      <svg style="width:24px;height:24px" viewBox="0 0 24 24" class="icon">
        <path
          fill="#fff                                                                    "
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
  font-family: "Nunito", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  height: 60vh;
  background: linear-gradient(226.3deg, #070531 0%, #0D0953 28.83%, #0C065D 69.2%, #070531 100%);
  padding: 40px;
}

#nav .nav-panel {
  position: sticky;
  top: 15px;
}

#router-nav {
  height: 65vh;
}

#nav a {
  height: 24px;
  color: #ffaaaa;
  font-weight: 900;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  padding: 3px;
  text-transform: uppercase;
  text-decoration: none;
  margin: 0 0 0 24px;
}

#nav .nav-pagename {
  height: 96px;
  color: #ffaaaa;
  font-size: 75px;
  font-weight: 900;
  line-height: 96px;
  text-align: center;
  text-transform: capitalize;
  margin-top: 150px;
}

#nav .nav-date {
  height: 40px;
  color: #ffaaaa;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  margin-top: 24px;
  letter-spacing: 0.5em;
}

#nav a.router-link-exact-active {
  color: #ffffff;
  padding: 3px;
  border-bottom: 8px solid #3f51b5;
}

#refresh-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: #fff;
  background-color: #ffaaaa;
  width: 25px;
  height: 25px;
  border-radius: 25px;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.1);
  padding: 10px;
}

#register {
  margin: 5% auto 30px; 
  height: 64px;
  width: 240px;
  border: 3px solid #ffaaaa;
  font-size: 22px;	font-weight: 900;	line-height: 64px;
  padding: 5px 20px 5px 20px;
  color: #ffaaaa;
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
