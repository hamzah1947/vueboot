<template>
  <div>
    <h3>Todays task's</h3>
    <add-task></add-task>
    <task-list></task-list>
  </div>
</template>

<script>
import AddTask from "../components/AddTask.vue";
import TaskList from "../components/TaskList.vue";
export default {
  name: "TaskView",
  components: { TaskList, AddTask },
};
</script>

<style>
</style>