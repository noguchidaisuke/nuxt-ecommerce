<template>
  <div>
    <!-- Drawer -->
    <v-navigation-drawer app v-model="drawer" clipped dark>
      <v-container>
        <v-list-item>
          <v-list-item-title class="title grey--text text--darken-2" dark color="primary">
            <v-list-item-icon>
              <v-icon>mdi-account-circle</v-icon>
            </v-list-item-icon>
            <template v-if="$store.state.auth.loggedIn">
              {{ $store.state.auth.user.name }}
            </template>
            <template v-else>
              "ようこそ"
            </template>
          </v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list dense nav>
          <v-list-item nuxt-link to="/cart">
            <v-list-item-icon>
              <v-badge color="green" :content="$store.state.cartLength">
                <v-icon>mdi-cart-outline</v-icon>
              </v-badge>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Cart</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-for="nav_list in nav_lists" :key="nav_list.name" nuxt-link :to="nav_list.link">
            <v-list-item-icon>
              <v-icon>{{ nav_list.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-container>
    </v-navigation-drawer>

    <!-- Navbar -->
    <v-app-bar app clipped-left dark>
      <v-app-bar-nav-icon @click.stop="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <n-link to="/" class="white--text">
          <span class="font-weight-light">NUXT</span>
          <span class="title grey--text lighten-4 ml-n1">EC</span>
        </n-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- serch form -->

      <!-- Buttons -->
      <template v-if="$store.state.auth.loggedIn">
        <v-toolbar-items class="ml-3">
          <v-btn text @click="$auth.logout();$toast.success('ログアウト')">
              Logout
          </v-btn>
        </v-toolbar-items>
      </template>
      <template v-else>
        <v-toolbar-items class="ml-3">
          <v-btn text>
            <nuxt-link to="/login" class="white--text">
              Login
            </nuxt-link>
          </v-btn>
        </v-toolbar-items>
        <v-btn outlined >
          <nuxt-link to="/register" class="white--text">
            Get Started
          </nuxt-link>
        </v-btn>
      </template>
    </v-app-bar>

  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      nav_lists: [
        { name: "Profile", icon: "mdi-square-edit-outline", link: "/profile" },
        { name: "Orders", icon: "storage", link: "/orders" }
      ]
    };
  }
};
</script>

<style>
.sbx-amazon {
  display: inline-block;
  position: relative;
  width: 600px;
  height: 39px;
  white-space: nowrap;
  box-sizing: border-box;
  font-size: 14px;
}

.sbx-amazon__wrapper {
  width: 100%;
  height: 100%;
}

.sbx-amazon__input {
  display: inline-block;
  -webkit-transition: box-shadow 0.4s ease, background 0.4s ease;
  transition: box-shadow 0.4s ease, background 0.4s ease;
  border: 0;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px #ffffff;
  background: #ffffff;
  padding: 0;
  padding-right: 75px;
  padding-left: 11px;
  width: 100%;
  height: 100%;
  vertical-align: middle;
  white-space: normal;
  font-size: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.sbx-amazon__input::-webkit-search-decoration,
.sbx-amazon__input::-webkit-search-cancel-button,
.sbx-amazon__input::-webkit-search-results-button,
.sbx-amazon__input::-webkit-search-results-decoration {
  display: none;
}

.sbx-amazon__input:hover {
  box-shadow: inset 0 0 0 1px #e6e6e6;
}

.sbx-amazon__input:focus,
.sbx-amazon__input:active {
  outline: 0;
  box-shadow: inset 0 0 0 1px #ffbf58;
  background: #ffffff;
}

.sbx-amazon__input::-webkit-input-placeholder {
  color: #aaaaaa;
}

.sbx-amazon__input::-moz-placeholder {
  color: #aaaaaa;
}

.sbx-amazon__input:-ms-input-placeholder {
  color: #aaaaaa;
}

.sbx-amazon__input::placeholder {
  color: #aaaaaa;
}

.sbx-amazon__submit {
  position: absolute;
  top: 0;
  right: 0;
  left: inherit;
  margin: 0;
  border: 0;
  border-radius: 0 3px 3px 0;
  background-color: #ffbf58;
  padding: 0;
  width: 47px;
  height: 100%;
  vertical-align: middle;
  text-align: center;
  font-size: inherit;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.sbx-amazon__submit::before {
  display: inline-block;
  margin-right: -4px;
  height: 100%;
  vertical-align: middle;
  content: "";
}

.sbx-amazon__submit:hover,
.sbx-amazon__submit:active {
  cursor: pointer;
}

.sbx-amazon__submit:focus {
  outline: 0;
}

.sbx-amazon__submit svg {
  width: 21px;
  height: 21px;
  vertical-align: middle;
  fill: #202f40;
}

.sbx-amazon__reset {
  display: none;
  position: absolute;
  top: 9px;
  right: 54px;
  margin: 0;
  border: 0;
  background: none;
  cursor: pointer;
  padding: 0;
  font-size: inherit;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  fill: rgba(0, 0, 0, 0.5);
}

.sbx-amazon__reset:focus {
  outline: 0;
}

.sbx-amazon__reset svg {
  display: block;
  margin: 4px;
  width: 13px;
  height: 13px;
}

.sbx-amazon__input:valid ~ .sbx-amazon__reset {
  display: block;
  -webkit-animation-name: sbx-reset-in;
  animation-name: sbx-reset-in;
  -webkit-animation-duration: 0.15s;
  animation-duration: 0.15s;
}

@-webkit-keyframes sbx-reset-in {
  0% {
    -webkit-transform: translate3d(-20%, 0, 0);
    transform: translate3d(-20%, 0, 0);
    opacity: 0;
  }
  100% {
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}

@keyframes sbx-reset-in {
  0% {
    -webkit-transform: translate3d(-20%, 0, 0);
    transform: translate3d(-20%, 0, 0);
    opacity: 0;
  }
  100% {
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}
</style>