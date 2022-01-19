<template>
  <div id="app">
    <top-bar></top-bar>
    <router-view />
  </div>
</template>

<script>
import TopBar from "./components/TopBar.vue";

export default {
  components: {
    TopBar,
  },
};
</script>
<style>
footer {
  display: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav a {
  text-decoration: none;
  color: white;
}

.card,
tr {
  cursor: pointer;
}
</style>
