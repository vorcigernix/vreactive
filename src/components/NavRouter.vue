<template>
  <div id="router-nav">
    <div class="nav-panel-mobile">
      <div class="hamburger-icon" @click="toggle()">
        &#9776; {{ currentRoute }}
      </div>
      <div class="mobile-menu" v-if="active">
        <div
          class="nav-item"
          v-for="route in $router.options.routes"
          :key="route.path"
          @click="toggle()"
        >
          <router-link class="custom-nav-item" :to="route.path">
            {{ route.name }}
          </router-link>
        </div>
      </div>
    </div>
    <div class="nav-panel">
      <div
        class="nav-item"
        v-for="route in $router.options.routes"
        :key="route.path"
      >
        <router-link class="custom-nav-item" :to="route.path">
          {{ route.name }}
        </router-link>
      </div>
    </div>
    <div v-show="currentRoute != 'home'" class="nav-pagename">
      {{ currentRoute }}
    </div>
    <div v-show="currentRoute == 'home'" class="nav-pagename">
      Reactive|Hacks
    </div>

    <div class="nav-date">24-26 May 2019</div>
    <div id="register">PREREGISTER</div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      active: false,
    }
  },
  computed: {
    currentRoute: function() {
      return this.$route.name
    },
  },
  created: function() {},
  methods: {
    toggle: function() {
      this.active = !this.active
    },
  },
}
</script>

<style>
.nav-panel {
  display: none;
}
.nav-panel-mobile {
  display: flex;
  flex-flow: column;
}
.mobile-menu {
  display: flex;
  flex-flow: column;
}
.hamburger-icon {
  font-size: 2em;
  text-align: left;
  cursor: pointer;
  user-select: none;
}
img {
  max-height: 3em;
  max-width: 3em;
  float: left;
  margin: 0 1.5em 0 0;
}

/* media queries */
@media only screen and (min-width: 450px) {
  .nav-panel {
    display: flex;
  }

  .router-link-exact-active {
    border-bottom: black solid 2px;
  }

  .nav-item {
    padding-right: 1em;
  }

  .nav-panel-mobile {
    display: none;
  }
}
</style>
