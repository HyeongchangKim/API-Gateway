<template>
  <div id="app">
    <div class="container">
      <Sidebar class="sidebar" />
      <Topbar class="topbar" />
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/sidebar/Sidebar.vue";
import Topbar from "@/components/topbar/Topbar.vue";
export default {
  name: "App",
  components: {
    Sidebar,
    Topbar,
  },
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

.container {
  display: grid;
  grid-template-rows: 1fr 14fr;
  grid-template-columns: 1fr 5fr;
  background-color: rgb(30, 31, 39);
  height: 100vh;
  width: 100vw;
}

.content {
  background-color: rgb(231, 243, 255);
}

.sidebar {
  grid-row: 1 / 3;
}

.topbar {
  background-color: white;
}
</style>
