<script lang="ts">
import { createEventDispatcher } from 'svelte';
import type { Task } from "../../types/Task.d.ts";
import IconButton from '../molecules/IconButton.svelte';
import type { iconName } from "../../types/IconName.d.ts";
import { slide } from 'svelte/transition';
import { scaleY } from '$lib/transitions';

const dispatch = createEventDispatcher();
export let list: Array<Task> = [];
export let condensed: Boolean = false;
export let extended: Boolean = false;

let typedSelectedTask:Task | null = null;
$: selectedTask = typedSelectedTask;
$: filterDone = 0;

let searchString = "";
let editString = "";

//CRUD
const createTask = () => {
    dispatch('createTask');
    selectedTask = readTasks()[0]
}

$: readTasks = (): Task[] => {
    let result = list.filter((task: Task) => {
        if (filterDone == 0) {
            return task
        } else if (filterDone == 1) {
            if (task.done == true) return task
        } else if (filterDone == 2) {
            if (task.done != true) return task
        }
    });

    if(searchString!="") {
        result = result.filter((task) => {
            const regex = new RegExp(searchString, "i");
            if (regex.test(task.description)) return task
        })
    }
    return result;
}

const updateTaskDescription = () => {
    dispatch('updateTask', selectedTask);
}

const updateTaskCheck = (task:Task) => {
    task.done = !task.done;
    dispatch('updateTask', task);
}

const deleteTask = () => {
    console.log("delete component level", selectedTask);
    dispatch('deleteTask', selectedTask);
    selectedTask = null;
}
//Internal handlers
$: doneFilterString = ((filterDone != 0) ? (filterDone != 1) ? 'Only done' : 'Not done' : 'All');

const updateSelectedTask = (task: Task | null) => {
    if(task != null) {
        selectedTask = list.filter((item) => {
            if(item.id == task.id) return item;
        })[0];
        editString = selectedTask.description;
    } else {
        selectedTask = null;
    }
}
const updateFilterDone = () => {
    if (filterDone < 2) {
        filterDone++
    } else {
        filterDone = 0
    }
}
</script>

<div 
class="o-taskList"
class:o-taskList--condensed={condensed}
class:o-taskList--extended={extended}
class:o-taskList--edit={selectedTask}>
    <div class="o-taskList__header">
        <div>
            <input class="o-taskList__searchField" type="text" placeholder="Search" bind:value={searchString}>
            <div class="o-taskList__filterDone">
            {#if filterDone == 0}
                <IconButton icon="minusSquare" on:click={updateFilterDone}>
                    <svelte:fragment slot="label">
                        {`Show: ${doneFilterString}`}
                    </svelte:fragment>
                </IconButton>
            {:else if filterDone == 1}
                <IconButton icon="square" on:click={updateFilterDone}>
                    <svelte:fragment slot="label">
                        {`Show: ${doneFilterString}`}
                    </svelte:fragment>
                </IconButton>
            {:else}
                <IconButton icon="checkSquare" on:click={updateFilterDone}>
                    <svelte:fragment slot="label">
                        {`Show: ${doneFilterString}`}
                    </svelte:fragment>
                </IconButton>
            {/if}
            </div>
        </div>
    <div>
            <IconButton className="o-taskList__createTask" icon="plusSquare" on:click={createTask}>
                Create task
            </IconButton>
        </div>
    </div>
    {#if selectedTask != null}
    <div class="o-taskList__editor" transition:slide>
        <div>
            <label>Description: 
                <input 
                    class="o-taskList__searhField" 
                    type="text" 
                    placeholder="Description" 
                    bind:value={selectedTask.description} 
                    on:input={updateTaskDescription}
                >
            </label>
        </div>
        <div>
            <IconButton className="o-taskList__removeItem" icon="trashAlt" on:click={() => deleteTask()}>
                Delete task
            </IconButton>
            <IconButton className="o-taskList__closeItem" icon="checkSquare" on:click={() => updateSelectedTask(null)}>
                Close
            </IconButton>
        </div>
    </div>
    {/if}

    <div class="o-taskList__content">
        {#each readTasks() as listItem (listItem.id)}
        <div class="o-taskList__item" transition:slide>
            <div class="o-taskList__itemCheck">
                <div>
                    {#if listItem.done}
                        <IconButton className="o-taskList__check" icon="square" theme="chromeless" on:click={() => updateTaskCheck(listItem)}/>
                    {:else }
                        <IconButton className="o-taskList__check" icon="checkSquare" theme="chromeless" on:click={() => updateTaskCheck(listItem)}/>
                    {/if}
                </div>
            </div>
            <div class="o-taskList__itemDescription">
                <span>{ listItem.description }</span>
            </div>
            <div>
                <IconButton className="o-taskList__itemedit" icon="edit" on:click={() => updateSelectedTask(listItem)}>
                    Edit task
                </IconButton>
            </div>
        </div>
        {/each}
    </div>
</div>
<style lang="scss">
.o-taskList {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    @include container-surface("surface", "onSurface", "outline");
    $padding: map-get($microSpacing, "sm");
    
    &__header {
        display: flex;
        flex-direction: row;
        width: 100%;
        padding-top: $padding;
        padding-bottom: $padding;

        &>div:first-child {
            flex-basis: 100%;
            padding-left: $padding;
        }

        &>div:last-child {
            flex-basis: 30%;
            text-align: right;
            padding-right: $padding;
        }
    }
    
    &__searchField {
        margin: 0 map-get($microSpacing, "lg") map-get($microSpacing, "xxs") 0;
        height: 1.8rem;
        width: 100%;
        margin-bottom: calc($padding / 2);
    }

    &__filterDone {
        display: inline-block;
        cursor: pointer;
    }

    &__editor {
        display: flex;
        width: 100%;
        height: 0px;
        background:
            linear-gradient(to bottom, getColorFromPalette("surfaceDim", 1, -10), getColorFromPalette("surfaceDim", 0, -10) 10%),
            linear-gradient(to top, getColorFromPalette("surfaceDim", 1, -10), getColorFromPalette("surfaceDim", 0, -10) 10%),
            getColorFromPalette("surfaceDim");
        padding-top: $padding;
        padding-bottom: $padding;

        & > div:first-child {
            flex-basis: 65%;
            padding-left: $padding;
        }

        & > div:last-child {
            flex-basis: 35%;
            text-align: right;
            padding-right: $padding;
        }

        & :global(.m-iconButton) {
            margin: 0 0 0 map-get($microSpacing, "sm");
        }
    }

    &--edit .o-taskList__editor {
        height: 50px;
    }

    &__content {
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: 320px;
        overflow-x: auto;
        padding: 0 map-get($microSpacing, "sm") map-get($microSpacing, "sm") map-get($microSpacing, "sm");
    }

    &__item {
        display: flex;
        align-items: center;
        gap: map-get($microSpacing, "sm");
        padding: map-get($microSpacing, "sm") map-get($microSpacing, "sm");
    }

    &__itemCheck {
        display: inline-block;
        padding: map-get($microSpacing, "xxs");
        width: map-get($macroSpacings, "md");
        height: map-get($macroSpacings, "md");

        :global(.m-iconButton) {
            border: 0;
        }
    }

    &__itemDescription {
        flex-grow: 1;
    }

    @media (min-width: 769px) and (max-width: 1199px) {
        .o-taskList__content {
            flex-direction: row;
            min-height: initial;
            flex-wrap: wrap;
        }

        .o-taskList__item {
            width: 50%;

            &:nth-child(4n + 1),
            &:nth-child(4n + 2) {
                @include container-surface("surfaceBright");
                transition: all 0.3s;
            }
        }
    }

    @media (min-width: 1200px) {

        .o-taskList__item {

            &:nth-child(odd) {
                @include container-surface("surfaceBright");
                transition: all 0.3s;
            }
        }
    }

}


.o-taskList--condensed {
    .o-taskList__item:nth-child(odd) {
        @include container-surface("surfaceBright");
        transition: all 0.3s;
    }
}

.o-taskList--extended {
    .o-taskList__content {
        flex-direction: row;
        min-height: initial;
        flex-wrap: wrap;
    }

    .o-taskList__item {
        width: 40%;
        flex-grow: 1;
        
        &:nth-child(4n + 1),
        &:nth-child(4n + 2) {
            @include container-surface("surfaceBright");
        }
    }
}

</style>
  