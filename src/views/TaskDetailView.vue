<template>
  <div>
    Task Details & User Details
    <b-form>
      <b-form-group :label="id"></b-form-group>
    </b-form>
    {{ currentUser }}
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "TaskDetailView",
  computed: {
    ...mapGetters(["currentUser"]),
  },
  methods: {
    ...mapActions(["fetchUser"]),
  },
  created() {
    this.fetchUser(this.id);
  },
  props: ["id"],
};
</script>

<style>
</style>