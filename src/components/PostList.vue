<template>
  <div class="p-5">
    <h3>Today's Posts</h3>
    <!-- <b-table
      id="post-table"
      striped
      hover
      :items="allPosts"
      @row-clicked="myRowClickHandler"
    ></b-table> -->

    <div>
      <b-card
        no-body
        class="overflow-hidden float-left ml-5 mb-5"
        v-for="post in allPosts"
        :key="post.id"
        style="max-width: 500px; max-height: 200px"
        @click="myRowClickHandler(post.id)"
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img
              :src="post.userImageSrc"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body :title="post.title">
              <b-card-text>
                {{ post.body }}
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
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
  methods: {
    ...mapPostActions(["fetchAllPosts"]),
    myRowClickHandler(id) {
      router.push(`/posts/${id}/comments/list`);
    },
  },
  mounted() {
    this.fetchAllPosts();
  },
};
</script>

<style></style>
