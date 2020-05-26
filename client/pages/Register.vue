<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="8" md="6" lg="5">
        <v-card class="text-center">
          <h2 class="text-center pt-4">Register</h2>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Name"
                prepend-icon="person"
                v-model="name"
              ></v-text-field>

              <v-text-field
                label="Email"
                prepend-icon="email"
                v-model="email"
              ></v-text-field>

              <v-text-field
                label="Password"
                prepend-icon="vpn_key"
                v-model="password"
              ></v-text-field>
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
      name: "",
      email: "",
      password: ""
    }
  }
}
</script>

<style>

</style>