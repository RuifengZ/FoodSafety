<template>
  <b-card>
    <h1>{{name}}</h1>
    <b-card-text>{{msg}}</b-card-text>
  </b-card>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["msg", "name"]
};
</script>

<style>
</style>
