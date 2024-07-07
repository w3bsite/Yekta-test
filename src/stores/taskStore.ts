import type { Task } from "../models/Task";
import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
    state: () => ({
        taskList: [] as Task[],
    }),
});
