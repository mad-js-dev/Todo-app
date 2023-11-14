import { setContext } from 'svelte';
import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import type { Task } from "../types/Task.js";

const dummyData: Task[] = [
    {
        id: 0,
        description: "Finish the report for the upcoming meeting",
        done: false
    } as Task,
    {
        id: 1,
        description: "Clean the garage",
        done: true
    } as Task,
    {
        id: 2,
        description: "Buy groceries for the week",
        done: false
    } as Task,
    {
        id: 3,
        description: "Schedule a doctor's appointment",
        done: true
    } as Task,
    {
        id: 4,
        description: "Pay the monthly bills",
        done: true
    } as Task,
    {
        id: 5,
        description: "Organize the bookshelf",
        done: false
    } as Task,
    {
        id: 6,
        description: "Call a friend or family member",
        done: false
    } as Task,
    {
        id: 7,
        description: "Plan a weekend getaway",
        done: false
    } as Task,
    {
        id: 8,
        description: "Update your resume",
        done: true
    } as Task
];

function createTaskStore() {
    const initialValue = browser ? window.localStorage.getItem('ToDoApp') != null ? JSON.parse(window.localStorage.getItem('ToDoApp') || "") : dummyData : dummyData;
    const { subscribe, set, update } = writable(initialValue);

    return {
        subscribe,
        create: () => update((n) => {
            const task = {
                id: Date.now(),
                description: "New task",
                done: false,
            } as Task;
            console.log(n)
            n.unshift(task);
            return n;
        }),
        read: () => update((n) => n),
        update: (taskToUpdate: Task) => update((n) => {
            const result = n.map((task) => {
                if(task.id == taskToUpdate.id) return taskToUpdate
                return task
            })
            if (browser) {
                window.localStorage.setItem('ToDoApp', JSON.stringify(n));
            }
            return result;
        }),
        delete: (taskToRemove: Task) => update((n) => {
            const result = n.filter((task) => {
                if(task.id != taskToRemove.id) return task
            })
            console.log(result);
            return result;
        }),
        reset: () => set(dummyData)
    };
}
export const tasks = createTaskStore();