<script lang="ts">
import { tasks } from '../../stores/stores';
import TaskList from '../../components/organisms/TaskList.svelte';
import ColumnsGrid from '../../components/templates/ColumnsGrid.svelte';
let screenSize:number;

const updateTask = (event:CustomEvent) => {
    tasks.update(event.detail);
};

const deleteTask = (event:CustomEvent) => {
    tasks.delete(event.detail);
};

</script>

<svelte:window bind:innerWidth={screenSize} />
<ColumnsGrid --cols="2" --col1Width="4" --col2Width="8">
    <div slot="column1">
        <h2>Very very long lorem ipsum long lorem ipsum title</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus, sapien varius maximus hendrerit, diam tellus cursus mi, eu tempor turpis est sed diam. Donec tortor mauris, condimentum imperdiet imperdiet nec, tempor a odio. Aenean sed vehicula neque.
        </p>
    </div>
    <div slot="column2">
        <TaskList 
            list={$tasks} 
            on:createTask={tasks.create}
            on:updateTask={updateTask}
            on:deleteTask={deleteTask}
            condensed={screenSize < 768}
            extended={screenSize > 768 && screenSize < 1200}
        />
    </div>
</ColumnsGrid>
