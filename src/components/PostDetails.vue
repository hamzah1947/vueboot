<template>
  <div>
    <h3>All comments on selected post</h3>
    <b-table striped hover :items="allComments"></b-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "post-details",
  props: ["post_id"],
  computed: {
    ...mapGetters(["allComments"]),
  },
  methods: {
    ...mapActions(["fetchComments"]),
  },
  created() {
    this.fetchComments(this.post_id);
  },
};
</script>

<style></style>
