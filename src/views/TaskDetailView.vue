<template>
  <div>
    <h3 class="p-3">User Details</h3>
    <b-form>
      <b-form-group :label="id"></b-form-group>
    </b-form>
    <b-table>
      
    </b-table>
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