<template>
  <div>
    <h1>{{forumID}}</h1>
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.name" required placeholder="Enter name"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Enter Review:" label-for="input-3">
        <b-form-input id="input-3" v-model="form.review" required placeholder="Review"></b-form-input>
      </b-form-group>

      <b-button class="mb-2" type="submit" variant="primary">Submit</b-button>
    </b-form>

    <ul id="example-1" class="list-unstyled">
      <li :key="item.name" v-for="item in allReviews">
        <Review :name="item.name" :msg="item.review"/>
      </li>
    </ul>
  </div>
</template>

<script>
import Review from "@/components/Review.vue";
import db from "@/components/Firebase.js";

export default {
  components: {
    Review
  },
  data() {
    return {
      forumID: this.$route.params.id,
      form: {
        review: "",
        name: ""
      },
      allReviews: []
    };
  },
  methods: {
    onSubmit() {
      this.allReviews.push({ review: this.form.review, name: this.form.name });
      console.log(this.allReviews);

      db.collection("reviews")
        .doc(this.forumID)
        .set({
          review: this.allReviews
        })
        .then(function() {
          console.log("Document successfully written!");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
    }
  },
  created() {
    db.collection("reviews")
      .doc(this.forumID)
      .get()
      .then(doc => {
        if (doc.exists) {
          if (doc.get("review") == undefined) {
            this.allReviews = [];
          } else {
            this.allReviews = doc.get("review");
          }
        } else {
          // doc.data() will be undefined in this case
        }
      })
      .catch(function(error) {
        alert(error);
        //console.log("Error getting document:", error);
      });
    console.log("dasdjsakdjs");
  }
};
</script>

<style>
</style>
