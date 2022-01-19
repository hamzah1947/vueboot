<template>
  <div>
    <h3 class="p-3">User Details</h3>
    <b-card no-body class="overflow-hidden m-auto" style="max-width: 700px">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            :src="localuser.imageurl"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body :title="localuser.name">
            <b-card-text>
              This is a wider card with supporting text as a natural lead-in to
              additional content. This content is a little bit longer.
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <!-- {{ localuser }} -->
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const {
  mapActions: mapUserActions,
  mapGetters: mapUserGetters,
  mapState: mapUserState,
} = createNamespacedHelpers("task/user");
export default {
  name: "TaskDetailView",
  computed: {
    ...mapUserGetters(["currentUser"]),
    ...mapUserState({
      localuser: (state) => state.user,
    }),
  },
  methods: {
    ...mapUserActions(["fetchUser"]),
  },
  mounted() {
    this.fetchUser(this.id);
  },
  props: ["id"],
};
</script>

<style></style>
