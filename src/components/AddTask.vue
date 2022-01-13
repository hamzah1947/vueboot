<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <b-row>
        <b-col cols="6" class="leftop">
          <input
            type="text"
            name="inputbar"
            v-model="newtask"
            id="inputbar"
            placeholder="New task"
          />
          <input type="submit" value="Submit" />
        </b-col>
        <b-col>
          <input
            type="text"
            name="searchbar"
            v-model="searchtext"
            id="searchbar"
            placeholder="Search"
            @keyup="searchTask"
          />
        </b-col>
        <b-col>
          Records limit:
          <select v-model="limit" @change="changeLimit(limit)">
            <option value="200">200</option>
            <option value="100">100</option>
            <option value="10">10</option>
          </select>
        </b-col>
      </b-row>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "add-task",
  data() {
    return {
      newtask: "",
      limit: 200,
      searchtext: "",
    };
  },
  methods: {
    ...mapActions(["addNewTask", "filterTasks", "changeLimit", "searchTasks","getAllTask"]),
    handleSubmit() {
      this.addNewTask(this.newtask);
    },
    searchTask() {
      this.searchtext.length > 2
        ? this.searchTasks(this.searchtext)
        : this.getAllTask();
    },
  },
};
</script>

<style scoped>
.leftop {
  display: flex;
}
</style>