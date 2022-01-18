<template>
  <div>
    
    <h3 class="p-3">Todays task's</h3>
    <task-list></task-list>
    <!-- <add-task></add-task> -->
  </div>
</template>

<script>
import TaskList from "../components/TaskList.vue";
export default {
	name: "TaskView",
	components: { TaskList },
};
</script>

<style>
</style>