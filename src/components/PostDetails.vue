<template>
  <div>
    <h3>All comments on selected post</h3>
    <b-table striped hover :items="allComments"></b-table>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapActions: mapCommentActions, mapGetters: mapCommentGetters } =
  createNamespacedHelpers("post/comment");

export default {
  name: "post-details",
  props: ["post_id"],
  computed: {
    ...mapCommentGetters(["allComments"]),
  },
  methods: {
    ...mapCommentActions(["fetchComments"]),
  },
  created() {
    this.fetchComments(this.post_id);
  },
};
</script>

<style></style>
