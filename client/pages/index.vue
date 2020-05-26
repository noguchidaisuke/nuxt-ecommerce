<template>
  <div class="main">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="4" lg="3" v-for="product in products" :key="product.title">
          <v-card nuxt-link :to="`/products/${product.id}`">
            <v-img :src="product.imgUrl" max-height="200" class="img-fluid"></v-img>
            <v-card-subtitle>${{product.price}}</v-card-subtitle>
            <v-card-text>{{product.title}}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>

export default {
  data() {
    return {
      products: [
        { title: "nike", price: "200", imgUrl: "/airmax1.jpg", id: "1"},
        { title: "adidas", price: "200", imgUrl: "/airmax1.jpg", id: "2"},
        { title: "puma", price: "200", imgUrl: "/airmax1.jpg", id: "3"},
        { title: "balance", price: "200", imgUrl: "/airmax1.jpg", id: "4"}
      ]
    }
  },
}
</script>
