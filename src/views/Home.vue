<template>
  <div class="home">
    <b-container class="bv-example-row">
      <Reports/>
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
