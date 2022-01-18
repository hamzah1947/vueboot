<template>
  <div>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <ValidationProvider rules="required|alpha" v-slot="{ failed, invalid }">
          <b-form-group
            id="fieldset-1"
            label="Enter Task name"
            label-for="input-1"
            label-cols-sm="4"
            label-cols-lg="3"
            content-cols-sm
            content-cols-lg="7"
          >
            <b-form-input
              id="input-1"
              v-model="newtask"
              trim
              v-bind:class="{ 'text-danger': failed && invalid }"
            ></b-form-input>
            <span v-if="failed && invalid" class="text-danger"
              >Task name is required*</span
            >
          </b-form-group>
        </ValidationProvider>
        <b-form-checkbox
          id="checkbox-1"
          v-model="isCompleted"
          name="checkbox-1"
          value="true"
          unchecked-value="false"
        >
          Task Complete
        </b-form-checkbox>
        <input
          type="submit"
          value="Submit"
          class="btn btn-outline-primary mt-5"
        />
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
	name: "add-task",
	data() {
		return {
			newtask: "",
			isCompleted: false,
		};
	},
	computed: {},
	methods: {
		...mapActions(["addNewTask", "filterTasks", "getAllTask"]),
		async onSubmit() {
			await this.addNewTask({
				title: this.newtask,
				completed: this.isCompleted,
			});
			this.$emit("task-added");
		},
	},
};
</script>

<style scoped>
.leftop {
  display: flex;
}
</style>
