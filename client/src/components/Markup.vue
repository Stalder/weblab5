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
      <textarea :value="input" @input="update"></textarea>
      <div class="result" v-html="compiledMarkdown"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Markup",
  props: {
    title: String,
    markup: String
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
  max-height: 50px;
  background-color: white;
  padding: 16px;
  border-bottom: 1px solid #ccc;
}

.result {
  flex: 1;
  background-color: "white";
}
</style>
