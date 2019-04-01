<template>
  <div id="app">
    <Pull v-bind:pull="draftList" v-bind:onPress="onDraftPress"/>
    <Markup v-bind:currentDraft="currentDraft"/>
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
  data: function() {
    return {
      draftList: [],
      currentDraft: []
    };
  },
  created: async function() {
    console.log("Created component");
    try {
      console.log("Start requesting drafts");
      const response = await fetch("http://127.0.0.1:3000/drafts");
      this.draftList = (await response.clone().json()).drafts;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    onDraftPress: function(draft) {
      this.currentDraft = draft;
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
