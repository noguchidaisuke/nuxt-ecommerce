<template>
  <div class="main">
    <v-container>
      <v-row>
        <v-col cols="12" sm="4" lg="3" v-for="product in products" :key="product.title">
          <v-card nuxt-link :to="`/products/${product._id}`">
            <v-img :src="product.photos[0]" aspect-ratio="1" class="img-fluid"></v-img>
            <v-card-subtitle>¥{{product.price}}</v-card-subtitle>
            <v-card-text class="title">{{product.title}}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>

export default {
  async asyncData({$axios}) {
    try {
      let response = await $axios.$get("/api/products");
      console.log(response)
      return {
        products: response.products
      }
    } catch (err) {
      console.log(err)
    }
  }
}
</script>
