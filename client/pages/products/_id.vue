<template>
  <v-app>
    <v-container>
      <v-row>
        <!-- main -->
        <v-col cols="12">
          <v-row justify="center">
            <v-col cols="12" sm="8">
              <v-row>
                <v-col cols="6" sm="6" v-for="image in product.photos" :key="image">
                  <v-img :src="image" class="img-fluid" aspect-ratio="1"></v-img>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" sm="4" >
              <v-card flat>
                <v-card-subtitle>
                  {{　product.category ? product.category.type : "カテゴリー"　}}
                </v-card-subtitle>
                <v-divider></v-divider>
                <v-card-title class="display-2 ">{{product.title}}</v-card-title>
                <v-card-text class="title">
                  ¥{{product.price}}
                </v-card-text>
                <v-card-text>
                  <v-rating :value="product.averageRate" color="orange" class="ml-n2" dense readonly></v-rating>
                </v-card-text>
                <template v-if="!isAdd">
                  <v-btn block dark class="mt-8" @click="addCart">Add to Cart</v-btn>
                </template>
                <template v-else>
                  <v-btn block outlined class="mt-8" @click="addCart">Cart Now</v-btn>
                </template>
                <v-divider class="mt-5"></v-divider>
                <v-card-subtitle>アイテム詳細</v-card-subtitle>
                <v-card-text class="black--text">{{product.description}}</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-divider></v-divider>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8">
          <v-btn nuxt-link :to="`/reviews/${product._id}`" class="mb-10" dark >新規レビューを投稿する</v-btn>
          <Review :reviews="reviews"/>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Review from '@/components/Review'
export default {
  components: {
    Review
  },
  async asyncData({$axios, params}) {
    try {
      let promiseProduct =  $axios.$get(`/api/products/${params.id}`)
      let promiseReviews =  $axios.$get(`/api/reviews/${params.id}`)

      let [resProduct, resReviews] = await Promise.all([promiseProduct, promiseReviews])
      console.log(resReviews.reviews)
      return {
        product: resProduct.product,
        reviews: resReviews.reviews
      }
    } catch (err) {
      console.log(err)
    }
  },
  data() {
    return {
      isAdd: false,
      rating: 4
    }
  },
  methods: {
    addCart() {
      this.$store.dispatch('addToCart', this.product)
    }
  }
}
</script>

<style scoped >
.ex{
  height:500px;
  background-color: #999;
}
</style>
