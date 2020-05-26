<template>
  <div class="review">
    <v-card flat class="mb-12" v-for="review in reviews" :key="review.body">
      <div>
        <v-avatar color="indigo" class="mr-4" size="30px">
          <v-icon dark>mdi-account-circle</v-icon>
        </v-avatar>
        <span>{{review.username}}</span>
      </div>
      <div>
        <v-rating
          v-model="review.rating"
          background-color="white"
          color="orange accent-4"
          dense
          half-increments
          hover
          size="18"
          style="display: inline-block"
          class="ml-n1 mr-2"
        ></v-rating>
        <span>{{review.headline}}</span>
      </div>
      <v-card-text>{{review.body}}</v-card-text>
      <v-btn dark small class="mt-5">役に立った！</v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rating: 4.5,
      reviews: [
        {
          username: "John",
          rating: 4.5,
          headline: "Review Title",
          body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta voluptatibus amet recusandae et perspiciatis culpa ex fugiat iste, adipisci corporis nisi eveniet, dolores architecto, dolor magni ea quibusdam dicta voluptatem."
        },
        {
          username: "Hanna",
          rating: 5,
          headline: "Review",
          body: "Lorem amet consectetur adipisicing elit. Soluta voluptatibus amet recusandae et perspiciatis culpa ex fugiat iste, adipisci corporis nisi eveniet, dolores architecto, dolor magni ea quibusdam dicta voluptatem."
        },
      ]
    };
  }
};
</script>