<template>
  <div class="order">
    <v-container>
      <h1 class="my-5">Your Orders</h1>
      <v-row mx-0 class="grey lighten-3 elevation-2">
        <v-col cols="3">
          <div class="caption">注文日時</div>
          <div class="title due">due</div>
        </v-col>
        <v-col cols="2">
          <div class="caption">合計</div>
          <div class="title">¥ 1000</div>
        </v-col>
        <v-col cols="2">
          <div class="caption"></div>
          <div class="title"></div>
        </v-col>
      </v-row>
    </v-container>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        {}
      ]
    }
  },
}
</script>

<style>

</style>