<template>
  <div>
    <div>
      <b-table striped hover :items="myTasks"></b-table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "task-list",
  computed: mapGetters(["myTasks"]),
  methods: {
    ...mapActions(["getAllTask"]),
  },
  created() {
    this.getAllTask();
  },
};
</script>

<style>
</style>