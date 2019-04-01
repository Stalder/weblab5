<template>
  <div class="markup">
    <header class="header">
      <input value="Untitled">
      <div>
        <button v-on:click="onSave" style="margin-right: 10px">save</button>
        <button v-on:click="onDelete">delete</button>
      </div>
    </header>
    <div class="markup-area">
      <textarea :value="localMarkup" @input="update"></textarea>
      <div class="result" v-html="compiledMarkdown"></div>
    </div>
  </div>
</template>

<script>
import marked from "marked";
import _ from "lodash";

export default {
  name: "Markup",
  props: ["currentDraft"],
  data: function() {
    if (this.currentDraft) {
      return {
        localTitle: this.currentDraft.title || "Untitled",
        localMarkup: this.currentDraft.markup || "# Hello"
      };
    }
    return {
      localTitle: "Untitled",
      localMarkup: "# Hello"
    };
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.localMarkup, { sanitize: true });
    }
  },
  methods: {
    update: _.debounce(function(event) {
      this.localMarkup = event.target.value;
    }, 500),
    onSave: function() {
      console.log("saved");
    },
    onDelete: function() {
      console.log("Deleted");
    }
  },
  watch: {
    currentDraft: function(newDraft) {
      this.localTitle = newDraft.title;
      this.localMarkup = newDraft.markup;
    }
  }
};
</script>

<style scoped>
textarea {
  flex: 1;
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  font-size: 14px;
  font-family: "Monaco", courier, monospace;
  padding: 16px;
}

.markup {
  flex: 1;
  background-color: #cccccc;
  display: flex;
  flex-direction: column;
}

.markup-area {
  flex: 1;
  background-color: #f5f5f5;
  display: flex;
}

.header {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 40px;
  background-color: white;
  padding: 16px;
  border-bottom: 1px solid #ccc;
}

.result {
  flex: 1;
  background-color: "white";
  padding: 16px;
}
</style>
