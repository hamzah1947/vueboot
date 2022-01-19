<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Vue Practice</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="m-auto">
          <b-navbar-nav id="nav">
            <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
            <template v-if="isLoggedIn">
              <b-nav-item
                ><router-link to="/task">Tasks</router-link></b-nav-item
              >
              <b-nav-item>
                <router-link to="/posts/index">Posts</router-link>
              </b-nav-item>
            </template>
          </b-navbar-nav>
        </b-navbar-nav>
        <b-navbar-nav>
          <span v-if="isLoggedIn">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <b-avatar size="sm"></b-avatar>
              </template>
              <b-dropdown-item @click="tryLogout">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </span>
          <span v-if="!isLoggedIn">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>Account</em>
              </template>
              <b-dropdown-item @click="navigateToLogin">Login</b-dropdown-item>
            </b-nav-item-dropdown>
          </span>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import router from "@/router";

const { mapActions, mapGetters } = createNamespacedHelpers("authenticate");
export default {
  name: "top-bar",
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    ...mapActions(["attemptLogout"]),
    navigateToLogin() {
      router.push("/login");
    },
    async tryLogout() {
      await this.attemptLogout();
      router.push("/");
    },
  },
  mounted() {
    console.log(this.isLoggedIn);
  },
};
</script>

<style scoped>
.navbar-collapse {
  color: black;
  text-decoration-color: black;
}
</style>
