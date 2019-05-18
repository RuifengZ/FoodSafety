<template>
  <div>
    <b-button @click="getInfo">test</b-button>
    <b-row align-h="center">
      <b-col cols="10">
        <b-table :items="data" :fields="fields" :bordered="true"></b-table>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
import db from "@/components/Firebase.js";

export default {
  data() {
    return {
      data: [],
      fields: [
        {
          key: "report_date",
          sortable: true
        },
	{
          key: "state",
          sortable: true
        },
        {
          key: "city",
          sortable: true
        },
        {
          key: "recalling_firm",
          label: "Recalling Firm",
          sortable: true
        },
        {
          key: "product_description",
          label: "Product Information",
          sortable: true
        },
        {
          key: "reason_for_recall",
          sortable: false,
          variant: "danger"
        }
      ]
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
