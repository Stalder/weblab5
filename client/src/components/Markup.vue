<template>
  <div class="markup">
    <header class="header">
      <input value="Untitled">
      <div>
        <button style="margin-right: 10px">save</button>
        <button>delete</button>
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
  props: {
    title: String,
    markup: String
  },
  data: function() {
    return {
      localTitle: this.title || "Untitled",
      localMarkup: this.markup || "# Hello"
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
    }, 500)
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
