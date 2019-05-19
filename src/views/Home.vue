<template>
  <div class="home">
    <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
      <template slot="header">Food Probe</template>
      <template
        slot="lead"
      >FoodProbe lets users look up contaminated food products that have been recalled by their producers and the FDA. The users can also make their own posts on contaminated food products.</template>
    </b-jumbotron>
    <b-container class="bv-example-row">
      <Reports/>
      <emailbar class="mb-2"/>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Reports from "@/components/Reports.vue";
import emailbar from "@/components/emailbar.vue";
import db from "@/components/Firebase.js";

export default {
  name: "home",
  components: {
    Reports,
    emailbar
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
