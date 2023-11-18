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
];


export function storable(data:Task[]) {
    //console.log(browser && JSON.parse(localStorage.storable));
    console.log(browser && localStorage.storable ? JSON.parse(localStorage.storable) : dummyData)
    console.log(browser && localStorage.storable ? 'localStorage.storable' : 'dummyData')
    const { subscribe, set, update } = writable(data);
    if(browser) {
        if(localStorage.storable == undefined) {
            set(dummyData)
        } else {
            set(JSON.parse(localStorage.storable));
        }
    }
    /*
    browser &&
      localStorage.storable &&
      set(browser && localStorage.storable ? JSON.parse(localStorage.storable) : data);
    */
      
    return {
        subscribe,
        set,
        update: (taskToUpdate: Task) => update((n) => {
            const result = n.map((task) => {
                if(task.id == taskToUpdate.id) return taskToUpdate
                return task
            })
            console.log('meh0')
            browser && (localStorage.storable = JSON.stringify(n));

            return result;
        }),
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
        delete: (taskToRemove: Task) => update((n) => {
            const result = n.filter((task) => {
                if(task.id != taskToRemove.id) return task
            })
            browser && (localStorage.storable = JSON.stringify(result));
            return result;
        }),
        reset: () => set(dummyData)
    };
}
export const tasks = storable(dummyData);