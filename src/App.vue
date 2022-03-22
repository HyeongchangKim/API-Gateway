<template>
  <div id="app">
    <div class="dashboard">
      <Sidebar />
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/sidebar/Sidebar.vue";
export default {
  name: "App",
  components: {
    Sidebar,
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

.dashboard {
  display: grid;
  grid-template-columns: 1fr 5fr;
  background-color: rgb(30, 31, 39);
  height: 100vh;
  width: 100vw;
}

.content {
  background-color: rgb(219, 237, 255);
}
</style>
