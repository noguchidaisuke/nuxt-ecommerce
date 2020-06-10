<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="8" md="6" lg="5">
        <v-card class="text-center">
          <h2 class="text-center pt-4">Login</h2>
          <v-card-text>
            <v-form>
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
          <v-btn class="mb-8" large dark @click="onLogin">Submit</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  middleware: 'auth',
  auth: 'guest',
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    async onLogin() {
      try {
        const response = await this.$auth.loginWith('local', {data: {
            email: this.email,
            password: this.password
          }
        });
        
        this.$auth.setUser(response.data.authUser)
        this.$toast.success('ログイン完了');
        this.$router.push('/');
      } catch (err) {
        this.$toast.error(err);
      }
    }
  }
}
</script>