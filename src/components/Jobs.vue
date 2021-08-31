<template>
  <div id="jobs" class="section jobs container">
    <h2>Work Experience</h2>
    <div class="nav-header mt-5">
      <div
        class="nav-item"
        :class="{
          inactive: index != selectedIndex,
          active: index == selectedIndex,
        }"
        v-for="(job, index) in jobList"
        :key="'job-' + index"
        @click="selectedIndex = index"
      >
        <div
          class="w-100 h-100 d-flex align-items-center justify-content-center"
        >
          <strong>{{ job.company }}</strong>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <h3>{{ selectedJob.position }} <a :href="selectedJob.url" target="_blank" rel="noopener noreferrer">@ {{ selectedJob.company }}</a></h3>
      <p class="work-period">
        {{ selectedWorkPeriod }}
      </p>
      <p>
        <ul class="custom-list">
          <li v-for="(task, index) in selectedJob.tasks" :key="'task-' + index">
            {{ task.description }}
          </li>
        </ul>
      </p>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import data from "@/data/jobs.json";

export default {
  name: "Jobs",
  setup() {
    const jobList = computed(() => data.sort((a, b) => b.id - a.id));

    const index = ref(0);

    const selectedJob = computed(() => jobList.value[index.value]);

    const selectedIndex = computed({
      get() {
        return index.value;
      },
      set(val) {
        index.value = val;
      },
    });

    const selectedWorkPeriod = computed(() => {
      let from = selectedJob.value.from;
      let to = selectedJob.value.to;

      let period =
        to == undefined
          ? `${from.month} ${from.year} - present`
          : `${from.month} ${from.year == to.year ? "" : from.year + " "}- ${
              to.month
            } ${to.year}`;

      return period;
    });

    return {
      jobList,
      selectedIndex,
      selectedJob,
      selectedWorkPeriod,
    };
  },
};
</script>

<style lang="scss" scoped>
.work-period {
  font-size: 0.8rem;
}

.nav-header {
  width: 100%;
  height: 3rem;

  white-space: nowrap;
  overflow-x: auto;
  padding: 0;

  .nav-item {
    display: inline-block;
    min-width: 120px;
    height: 100%;
    border-bottom: $border-height solid $inactive;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    text-align: center;
    float: none;
    color: $inactive;
    cursor: pointer;

    &.active {
      color: $active;
      border-bottom: $border-height solid $active;
    }
  }
}
</style>
