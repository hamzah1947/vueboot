<template>
  <div>
    <div class="row mt-4 float-right">
      <div class="col">
        <div class="input-group">
          <b-button variant="success" @click="handleNewTask">Add Task</b-button>
        </div>
      </div>
    </div>
    <!-- <div class="sub-route">
      <router-link to="/task">Task List</router-link>
      <router-link to="/taskdetail">Add Task</router-link>
    </div> -->

    <router-view></router-view>
  </div>
</template>

<script>
import router from "@/router";
export default {
	name: "task-view",
	methods: {
		handleNewTask() {
			router.push("/task/new");
		},
	},
};
</script>

<style scoped>
.sub-route {
  padding: 1rem;
}
.sub-route a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 5px;
  border-radius: 5px;
}

.sub-route a.router-link-exact-active {
  color: #f1f1f1;
  background-color: #2dabff;
}
</style>
