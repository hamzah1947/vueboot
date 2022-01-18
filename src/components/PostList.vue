<template>
  <div>
    <h3>Post List</h3>
    <b-table
      id="post-table"
      striped
      hover
      :items="allPosts"
      @row-clicked="myRowClickHandler"
    ></b-table>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import router from "@/router";

const { mapActions: mapPostActions, mapGetters: mapPostGetters } =
  createNamespacedHelpers("post");
export default {
  name: "post-list",
  computed: {
    ...mapPostGetters(["allPosts"]),
  },
  created() {
    console.log("Created");
    console.log(document.getElementById("post-table"));
  },
  methods: {
    ...mapPostActions(["fetchAllPosts"]),
    myRowClickHandler(row) {
      router.push(`/posts/${row.id}/comments/list`);
    },
  },
  mounted() {
    this.fetchAllPosts();
    console.log("Mounted");
    console.log(document.getElementById("post-table"));
  },
};
</script>

<style></style>
