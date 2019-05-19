<template>
  <div>
    <b-container class="mt-0">
      <b-row align-h="center" class="mb-2">
        <b-button @click="getInfo">test</b-button>
      </b-row>

      <b-row align-h="center" class="mb-2">
        <b-col cols="5">
          <b-form-input @change="searchFirm" v-model="searchTerm" placeholder="Search..."></b-form-input>
        </b-col>
        <b-col md="auto">
          <b-button variant="dark" @click="searchFirm">Search</b-button>
        </b-col>
      </b-row>

      <b-row align-h="center">
        <b-col cols="10">
          <b-table :items="searchResults" :fields="fields" :busy="isBusy" :bordered="true">
            <div slot="table-busy" class="text-center text-danger my-2">
              <b-spinner class="align-middle"></b-spinner>
              <strong>Loading...</strong>
            </div>
          </b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import db from "@/components/Firebase.js";
import Fuse from "fuse.js";

export default {
  data() {
    return {
      isBusy: false,
      data: [],
      fields: [
        {
          key: "report_date",
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
          key: "reason_for_recall",
          sortable: false,
          variant: "danger"
        }
      ],
      options: {
        shouldSort: true,
        threshold: 0.3,
        location: 0,
        distance: 50,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: ["recalling_firm"]
      },
      searchTerm: "",
      searchResults: []
    };
  },
  methods: {
    getInfo() {
      this.isBusy = true;
      axios
        .get(
          "https://api.fda.gov/food/enforcement.json?search=report_date:[20190501+TO+20190518]&limit=100"
        )
        .then(res => {
          this.data = res.data.results;
          this.searchResults = this.data;
          console.log(this.data);
          this.isBusy = false;
        })
        .catch(err => alert(err));
    },
    searchFirm() {
      if (this.searchTerm == "") {
        this.searchResults = this.data;
      } else {
        var fuse = new Fuse(this.data, this.options);
        this.searchResults = fuse.search(this.searchTerm);
        console.log(this.searchResults);
      }
    }
  }
};
</script>

<style>
.row-space {
  margin: 10px;
}
</style>
