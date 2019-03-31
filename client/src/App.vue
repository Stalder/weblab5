<template>
  <div id="app">
    <Pull/>
    <Markup/>
  </div>
</template>

<script>
import Pull from "./components/Pull.vue";
import Markup from "./components/Markup.vue";

export default {
  name: "app",
  components: {
    Pull,
    Markup
  }
};
</script>

<style>
html {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0px;
  margin: 0px;
}

body {
  padding: 0px;
  margin: 0px;
  display: flex;
  flex: 1;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex: 1;
}
</style>
