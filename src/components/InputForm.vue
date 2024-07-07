<template>
    <div class="flex">
        <div class="w-full mx-auto ">
            <div class="card bg-base-100  shadow-xl">
                <form @submit.prevent="addTask">
                    <div class="card-body">
                        <input type="text" placeholder="Title" class="input input-bordered   max-w-xs"
                            v-model="currentTask.title" />
                        <textarea type="text" @keyup.enter="addTask" placeholder="Task decription"
                            class="textarea textarea-bordered " v-model="currentTask.content" />
                        <div class="card-actions justify-end">
                            <button class='btn btn-accent w-36 ' type="submit">Add</button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useTaskStore } from '../stores/taskStore';
import { reactive } from 'vue';

const taskStore = useTaskStore()
const currentTask = reactive({
    id: 0,
    title: '',
    content: '',
    state: 'not started yet'
})
function addTask() {
    const task = { ...currentTask }
    task.id = taskStore.taskList.length + 1
    taskStore.taskList.push(task)
}
</script>
