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
  },
  data: () => ({
    draftList: [],
    currentDraft: []
  }),
  created: async () => {
    console.log("Created component");
    try {
      const data = await fetch("http://127.0.0.1:3000/drafts");
      console.log(await data.json());
    } catch (error) {
      console.log(error);
    }
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
