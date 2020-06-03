<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="8" md="6" lg="5">
        <v-card class="text-center">
          <h2 class="text-center pt-4">プロフィール</h2>
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
            </v-form>
          </v-card-text>
          <v-btn class="mb-8" large dark @click="onEditUser">変更</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  middleware: 'authenticated',
  data() {
    return {
      name: this.$store.state.auth.user.name,
      email: this.$store.state.auth.user.email
    }
  },
  methods: {
    async onEditUser() {
      const data = {
        name: this.name,
        email: this.email
      }
      const response = await this.$axios.$put('/api/auth/user',data)
      await this.$auth.setUser(response.user)
      this.$router.replace('/');
    }
  }
}
</script>

<style>

</style>