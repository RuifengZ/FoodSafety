<template>
  <div>
    <b-button @click="getInfo">test</b-button>
    <b-table :items="data"></b-table>
  </div>
</template>

<script>
import axios from "axios";
import db from "@/components/Firebase.js";

export default {
  data() {
    return {
      data: []
    };
  },
  methods: {
    getInfo() {
      axios
        .get(
          "https://api.fda.gov/food/enforcement.json?search=report_date:[20190501+TO+20190518]&limit=100"
        )
        .then(res => {
          this.data = res.data.results;
          console.log(this.data);
        })
        .catch(err => alert(err));
    }
  }
};
</script>

<style>
</style>
