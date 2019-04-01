<template>
  <div class="pull">
    <h3>Markup drafts</h3>
    <ul>
      <li v-for="draft in pull" v-bind:key="draft._id">
        <a href="#" v-on:click="onPress(draft)">{{draft.title}}</a>
      </li>
      <button v-on:click="onAddNew()">Add new</button>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Pull",
  props: {
    pull: Array,
    onPress: Function,
    onAddNew: Function
  }
};
</script>

<style scoped>
h3 {
  margin: 28px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}

.pull {
  flex: 1;
  max-width: 220px;
  background-color: white;
  border-right: 1px #000000 solid;
  padding: 16px;
}
</style>
