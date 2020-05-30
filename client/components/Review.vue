<template>
  <div class="review">
    <v-card flat class="mb-12" v-for="review in reviews" :key="review._id">
      <div>
        <v-avatar color="indigo" class="mr-4" size="30px">
          <v-icon dark>mdi-account-circle</v-icon>
        </v-avatar>
        <span>{{review.user.name}}</span>
      </div>
      <div>
        <v-rating
          :value="review.rating"
          background-color="white"
          color="orange accent-4"
          dense
          half-icons
          hover
          size="18"
          style="display: inline-block"
          class="ml-n1 mr-2"
          readonly
        ></v-rating>
        <span>{{review.headline}}</span>
      </div>
      <v-card-text>{{review.body}}</v-card-text>
      <!-- <v-btn dark small class="mt-5">役に立った！</v-btn> -->
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["reviews"],
  data() {
    return {
      rating: 4.5,
    };
  }
};
</script>