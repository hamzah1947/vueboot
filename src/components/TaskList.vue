<template>
  <div>
    <form @submit.prevent="">
      <div class="row form-inline">
        <div class="col">
          <div class="mb-3">
            <b-input-group>
              <!-- <b-input-group-prepend>
                <b-icon icon="search" is-text></b-icon>
              </b-input-group-prepend> -->
              <b-form-input
                v-model="searchtext"
                :type="'text'"
                @keyup="searchTask"
                :placeholder="'Filter by title'"
              ></b-form-input>
            </b-input-group>
          </div>
        </div>
        <div class="col">
          <div class="input-group mb-3 float-right">
            <span>
              Records per page:
              <select
                v-model="limit"
                class="form-control form-control-sm"
              >
                <option value="200">200</option>
                <option value="100">100</option>
                <option value="10">10</option>
              </select>
            </span>
          </div>
        </div>
      </div>
    </form>
    <div>
      <b-pagination
        v-model="currentPage"
        :total-rows="200"
        :per-page="limit"
        aria-controls="my-table"
      ></b-pagination>
      <b-table
        striped
        hover
        :items="myTasks"
        :per-page="limit"
        :current-page="currentPage"
        @row-clicked="myRowClickHandler"
      ></b-table>
      <p v-show="!myTasks.length">There are no records to show</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import router from "@/router";

export default {
  name: "task-list",
  data() {
    return {
      currentPage: 1,
      limit: 200,
      searchtext: "",
    };
  },
  computed: {
    ...mapGetters(["myTasks"])
  },
  methods: {
    ...mapActions(["getAllTask", "changeLimit", "searchTasks", "filterTasks"]),
    searchTask() {
      if (this.searchtext.length > 2) this.searchTasks(this.searchtext);
      else if (this.searchtext.length == 0) this.filterTasks();
    },
    myRowClickHandler(row, index) {
      console.log(row);
      console.log(index);
      router.push(`/taskdetail/${row.id}`);
    },
  },
  created() {
    this.getAllTask();
  },
};
</script>

<style>
</style>