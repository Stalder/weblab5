<template>
  <div id="app">
    <Pull v-bind:pull="draftList" v-bind:onPress="onDraftPress" v-bind:onAddNew="onAddNew"/>
    <Markup v-bind:currentDraft="currentDraft"/>
  </div>
</template>

<script>
import Pull from "./components/Pull.vue";
import Markup from "./components/Markup.vue";
import axios from "axios";

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
    try {
      const response = await fetch("http://127.0.0.1:3000/drafts");
      this.draftList = (await response.clone().json()).drafts;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    onDraftPress: function(draft) {
      this.currentDraft = draft;
    },
    onAddNew: async function() {
      const { data } = await axios.post("http://127.0.0.1:3000/drafts", {
        title: "Untitled",
        markup: "# Write your markup here"
      });

      this.draftList.push(data.draft);
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
