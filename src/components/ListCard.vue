<template>
    <div class="card  bg-base-100 shadow-xl">

        <div class="ml-auto  p-2">
            <button class='btn btn-circle btn-sm bg-red-500 text-base-100' @click="removeTask(task.id)">
                <IMdiClose></IMdiClose>
            </button>
        </div>
        <div class="card-body">
            <h2 class="card-title">{{ task.title }}</h2>
            <div class="divider"></div>
            <p>{{ task.content }}</p>
            <div class="card-actions justify-end">
                <select class="select select-bordered w-full max-w-xs" :value="task.state" @change="e => changeState(e)">
                    <option v-for="state, i in  taskStates" :key="i" :selected="task.state == state">{{ state }}
                    </option>
                </select>
            </div>

        </div>
    </div>
</template>
<script lang="ts" setup>
import { useTaskStore } from '../stores/taskStore';
// @ts-ignore
import IMdiClose from '~icons/mdi/close'
import type { Task } from '../models/Task';

const taskStates = ["not started yet", "started", "done", "failed"]

const task = defineProps<Task>()

const taskStore = useTaskStore()
const emit = defineEmits<{
    update: [state: string]
}>()

function changeState(e: any) {
    emit('update', e.target.value)
}



function removeTask(id: number) {
    const taskIndex = taskStore.taskList.findIndex((task: Task) => task.id == id)
    taskStore.taskList.splice(taskIndex, 1)

}


</script>
