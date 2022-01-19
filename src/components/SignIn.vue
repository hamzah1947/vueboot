<template>
  <div>
    <b-form class="mt-5 text-left" @submit.prevent="tryLogin" variant="info">
      <p class="h4 text-center mb-4">Sign in</p>
      <b-form-group id="input-1" label="Enter username" label-for="username-1">
        <b-form-input id="username-1" trim></b-form-input>
      </b-form-group>
      <br />
      <label for="defaultFormLoginPasswordEx" class="grey-text"
        >Your password</label
      >
      <b-input
        type="password"
        id="defaultFormLoginPasswordEx"
        class="form-control"
      />
      <div class="text-center mt-4">
        <b-button class="btn btn-indigo" type="submit">Login</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import router from "@/router";

const { mapActions } = createNamespacedHelpers("authenticate");

export default {
  name: "sign-in",
  methods: {
    ...mapActions(["attemptLogin"]),
    async tryLogin() {
      await this.attemptLogin();
      router.push("/");
    },
  },
};
</script>

<style scoped>
form {
  padding: 1rem;
  width: 40%;
  margin: auto;
}
</style>
