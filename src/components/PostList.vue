<template>
  <div>
    <h3>Post List</h3>
    <b-table
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
  name: "postlist",
  computed: {
    ...mapGetters(["allPosts"]),
  },
  methods: {
    ...mapActions(["fetchAllPosts"]),
    myRowClickHandler(row, index) {
      console.log(row);
      console.log(index);
      router.push(`/posts/details/${row.id}`);
    },
  },
  created() {
    this.fetchAllPosts();
  },
};
</script>

<style>
</style>