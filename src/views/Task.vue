<template>
  <div>
    <b-row>
      <b-col>
        <b-input-group class="p-3">
          <b-button variant="success" @click="handleNewTask" class="ml-auto"
            >Add Task</b-button
          >
        </b-input-group>
      </b-col>
    </b-row>
    <!-- <div class="sub-route">
      <router-link to="/task">Task List</router-link>
      <router-link to="/taskdetail">Add Task</router-link>
    </div> -->
    <b-row class="p-3 pt-0">
      <b-col>
        <router-view></router-view>
      </b-col>
    </b-row>
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
