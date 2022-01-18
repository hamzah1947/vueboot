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
import { mapActions, mapGetters } from "vuex";
import router from "@/router";

export default {
  name: "post-list",
  computed: {
    ...mapGetters(["allPosts"]),
  },
  created() {
    console.log("Created");
    console.log(document.getElementById("post-table"));
  },
  methods: {
    ...mapActions(["fetchAllPosts"]),
    myRowClickHandler(row) {
      router.push(`/posts/${row.id}/comments/list`);
    },
  },
  mounted() {
    this.fetchAllPosts();
    console.log("Mounted");
    const randomitem = Math.random();
    console.log(randomitem);
    console.log(document.getElementById("post-table"));
  },
};
</script>

<style></style>
