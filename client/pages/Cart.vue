<template>
  <div class="cart">
    <v-container>
      <v-row justify="center">
        <!-- product list -->
        <v-col cols="10" md="8">
          <v-row v-for="product in products" :key="product.title" class="mb-3">
            <v-col cols="4">
              <v-img class="img-fluid" src="/airmax1.jpg"></v-img>
            </v-col>
            <v-col cols="8">
              <v-card flat>
                <v-card-title>
                  <v-row class="mx-0" justify="space-between">
                    <div>Air Max 90</div>
                    <div><span class="subtitle-1">¥</span> 3000</div>
                  </v-row>
                </v-card-title>
                <v-card-subtitle>
                  <div class="mt-3">category</div>
                  <div class="mb-10">description</div>
                  <select>
                    <option v-for="i in 10" :key="i" :value="i">量: &nbsp;{{i}}</option>
                  </select>
                  <v-btn text class="grey--text">削除</v-btn>
                </v-card-subtitle>
              </v-card>
            </v-col>
            <v-divider></v-divider>
          </v-row>
        </v-col>
        <!-- cash area -->
        <v-col cols="10" md="4">
          <v-card flat>
            <v-card-title class="font-weight-black mb-5">注文合計</v-card-title>
            <v-card-subtitle>
              <div class="subtotal">
                <v-row class="mx-0" justify="space-between">
                  <span class="font-weight-bold">小計</span>
                  <span>$<span class="font-weight-bold">100</span></span>
                </v-row>
              </div>
              <div class="shipment_fee">
                <v-row class="mx-0" justify="space-between">
                  <span class="font-weight-bold">送料</span>
                  <span>$<span class="font-weight-bold">0</span></span>
                </v-row>
              </div>
              <div class="shipment"></div>
            </v-card-subtitle>
            <v-divider></v-divider>
            <v-card-title>
              <span>Total</span>
              <v-spacer></v-spacer>
              <span>$100</span>
            </v-card-title>
          </v-card>
          <v-btn block dark class="mt-10 title font-weight-black" rounded color="yellow darken-3" large>購入画面に進む</v-btn>
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
        { title: "nike", price: "200", imgUrl: "/airmax1.jpg"},
        { title: "adidas", price: "200", imgUrl: "/airmax1.jpg"},
        { title: "puma", price: "200", imgUrl: "/airmax1.jpg"},
        { title: "balance", price: "200", imgUrl: "/airmax1.jpg"}
      ]
    }
  },
}
</script>