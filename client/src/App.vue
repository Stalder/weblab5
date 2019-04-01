<template>
  <div id="app">
    <Pull v-bind:pull="draftList" v-bind:onPress="onDraftPress" v-bind:onAddNew="onAddNew"/>
    <Markup v-bind:currentDraft="currentDraft" v-bind:onSave="onUpdate" v-bind:onDelete="onDelete"/>
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
      this.currentDraft = this.draftList[0];
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
    },
    onUpdate: async function(draft) {
      const id = draft._id;

      console.log("save");
      console.log(draft);
      const { data } = await axios.put("http://127.0.0.1:3000/drafts/" + id, {
        title: draft.title,
        markup: draft.markup
      });

      console.log(data);
    },
    onDelete: async function(draft) {
      const id = draft._id;

      console.log("delete");
      console.log(draft);
      const { data } = await axios.delete("http://127.0.0.1:3000/drafts/" + id);

      console.log(data);
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
