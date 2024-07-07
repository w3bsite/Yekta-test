<template>
  <div class="flex flex-col    md:w-2/3 mx-auto">
    <InputForm class="my-20"></InputForm>
    <div class="flex justify-start space-x-10 ">
      <input type="text" placeholder="title" class="input input-bordered" v-model="listTitleFilter" />
      <input type="text" placeholder="description" class="input input-bordered" v-model="listContentFilter" />
      <select class="select  select-bordered" v-model="listStateFilter">
        <option v-for="state, i in  taskStates" :selected="listStateFilter == state" :key="i">
          {{ state }}
        </option>
      </select>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-2 gap-12 my-20">
      <div v-for="task  in filterdList" :key="task.id">
        <ListCard v-if="task?.id" v-bind="task" @update="(val: string) => updateState(task.id, val)"></ListCard>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useTaskStore } from './stores/taskStore';
import InputForm from './components/InputForm.vue'
import ListCard from './components/ListCard.vue'

import { ref, computed } from 'vue';
import { Task } from './models/Task';

const taskStore = useTaskStore()
// Filters
const taskStates = ["all", "not started yet", "started", "done", "failed"]
const listStateFilter = ref('all')
const listTitleFilter = ref('')
const listContentFilter = ref('')


const filterdList = computed(() => {

  return taskStore.taskList.filter((task: Task) => {
    let title = true
    let content = true
    let state = true
    if (listTitleFilter.value) { title = task.title.includes(listTitleFilter.value) }
    if (listContentFilter.value) { content = task.content.includes(listContentFilter.value) }
    if (listStateFilter.value != 'all') { state = task.state == listStateFilter.value }

    return title && content && state

  })
})

function updateState(id: number, val: string) {
  const target = taskStore.taskList.find((task: Task) => task.id == id)
  if (target)
    target.state = val
}
</script>
