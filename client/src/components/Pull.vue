<template>
  <div class="pull">
    <h3>Markup drafts</h3>
    <ul>
      <li>
        <a href="#">Draft 1</a>
      </li>
      <li>
        <a href="#">Draft 2</a>
      </li>
      <li>
        <a href="#">Draft 3</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Pull",
  props: {}
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
