<template>
  <div class="home">
    <b-button @click="testDB">hey</b-button>
    <Reports/>
  </div>
</template>

<script>
// @ is an alias to /src
import Reports from "@/components/Reports.vue";
import db from "@/components/Firebase.js";

export default {
  name: "home",
  components: {
    Reports
  },
  data() {
    return {};
  },
  methods: {
    testDB() {
      db.collection("emails")
        .doc("test@gmail.com")
        .set({
          history: "Hello there"
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
