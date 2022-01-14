<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div class="row">
        <div class="col-sm-4 col-md-4 col-lg-4">
          <div class="input-group input-group-sm mb-3">
            <input
              type="text"
              name="inputbar"
              v-model="newtask"
              id="inputbar"
              placeholder="New task"
              class="form-control"
            />
            <div class="input-group-append">
              <input
                type="submit"
                value="Submit"
                class="btn btn-outline-secondary"
              />
            </div>
          </div>
        </div>
        <div class="col-sm-3 col-md-3 col-lg-3"></div>
        <div class="col-sm-5 col-md-5 col-lg-5"></div>
      </div>
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
    };
  },
  methods: {
    ...mapActions(["addNewTask", "filterTasks", "getAllTask"]),
    handleSubmit() {
      this.addNewTask(this.newtask);
    },
  },
};
</script>

<style scoped>
.leftop {
  display: flex;
}
</style>