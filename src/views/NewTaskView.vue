<template>
  <div>
    <h3 class="p-3">Add new Task</h3>
    <div id="newtaskdiv">
      <add-task @task-added="handleAddition"></add-task>
    </div>
  </div>
</template>

<script>
import AddTask from "../components/AddTask.vue";
import router from "@/router";

export default {
	name: "new-task-view",
	components: {
		AddTask,
	},
	methods: {
		handleAddition() {
			router.push("/task");
		},
	},
};
</script>

<style scoped>
#newtaskdiv {
  text-align: left;
}
</style>