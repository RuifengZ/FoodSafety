<template>
  <div>
    <b-container>
      <b-row align-h="center">
        <b-col cols="5">
          <b-form-input v-model="email" placeholder="Enter your email"></b-form-input>
        </b-col>
        <b-col md="auto">
          <b-button variant="dark" @click="storeEmail">Submit</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import db from "@/components/Firebase.js";

export default {
  data() {
    return {
      email: ""
    };
  },
  methods: {
    storeEmail() {
      db.collection("emails")
        .doc(this.email)
        .set({
          history: "Hello there",
          username: "bob101",
          location: "Riverside"
        })
        .then(function() {
          console.log("Document successfully written!");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
    }
  }
};
</script>

<style>
</style>
