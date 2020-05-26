<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-card flat>
          <h2>Create Review</h2>
          <v-row align="center">
            <v-col cols="3">
              <v-img src="/airmax1.jpg" class="img-fluid"></v-img>
            </v-col>
            <v-col cols="8">
              Title
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-card-text>
            <v-form>
              <h2>評価</h2>
              <v-rating v-model="rating"></v-rating>
              <h2 class="mt-5">タイトル</h2>
              <v-text-field
                v-model="headline"
              ></v-text-field>
              <v-card-subtitle class="elevation-3">
                <h3>内容</h3>
                <v-textarea
                  v-model="body"
                ></v-textarea>
              </v-card-subtitle>
              
            </v-form>
          </v-card-text>
          <v-btn class="mb-8" large dark >Submit</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      product: {imgUrl: "/airmax1.jpg", title: "Airmax1"},
      headline: "",
      rating: "",
      body: ""
    }
  }
}
</script>