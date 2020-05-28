<template>
  <v-app>
    <v-container>
      <v-row>
        <!-- space -->
        <v-col cols="2" xs="0"></v-col>
        <!-- main -->
        <v-col cols="8" xs="12">
          <v-row>
            <v-col cols="6" xs="12">
              <v-img src="/airmax1.jpg" class="img-fluid"></v-img>
            </v-col>
            <v-col cols="6" xs="12">
              <v-card flat>
                <v-card-subtitle>
                  カテゴリー
                </v-card-subtitle>
                <v-divider></v-divider>
                <v-card-title class="display-2 ">AirMax 90</v-card-title>
                <v-card-text class="title">
                  ¥100
                </v-card-text>
                <v-card-text>
                  <v-rating v-model="rating" color="orange" class="ml-n2"></v-rating>
                </v-card-text>
                <template v-if="!isAdd">
                  <v-btn block dark class="mt-8" @click="addCart">Add to Cart</v-btn>
                </template>
                <template v-else>
                  <v-btn block outlined class="mt-8" @click="addCart">Cart Now</v-btn>
                </template>
                 <v-divider class="mt-5"></v-divider>
                 <template v-if="description">
                   <v-card-subtitle>アイテム詳細</v-card-subtitle>
                   <v-card-text class="black--text">{{description}}</v-card-text>
                 </template>
              </v-card>

            </v-col>
          </v-row>
        </v-col>
        <!-- space -->
        <v-col cols="2" xs="0"></v-col>
      </v-row>
    </v-container>
    <v-divider></v-divider>
    <v-container>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8">
          <Review />
        </v-col>
        <v-col cols="2"></v-col>
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
    let response = await $axios.$get(`/api/products/${params.id}`)
    return { product: response.product }
  },
  data() {
    return {
      isAdd: false,
      rating: 4,
      description: "lorem"
    }
  },
  methods: {
    addCart() {
      this.isAdd = !this.isAdd
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
