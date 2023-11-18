<script lang="ts">
import { get } from 'svelte/store';
import { browser } from '$app/environment';
import { storable } from '../../stores/stores';
import TaskList from '../../components/organisms/TaskList.svelte';
import ColumnsGrid from '../../components/templates/ColumnsGrid.svelte';
let screenSize:number;

$: store = storable(browser && localStorage.storable ? localStorage.storable : []);

</script>

<svelte:window bind:innerWidth={screenSize} />
<ColumnsGrid --cols="2" --col1Width="4" --col2Width="8">
    <div slot="column1">
        <div>
            <h2>Very very long lorem ipsum long lorem ipsum title</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus, sapien varius maximus hendrerit, diam tellus cursus mi, eu tempor turpis est sed diam. Donec tortor mauris, condimentum imperdiet imperdiet nec, tempor a odio. Aenean sed vehicula neque.
            </p>
        </div>
    </div>
    <div slot="column2">
        <TaskList 
            list={$store} 
            on:createTask={store.create}
            on:updateTask={(event) => store.update(event.detail)}
            on:deleteTask={(event) => store.delete(event.detail)}
            condensed={screenSize < 768}
            extended={screenSize > 768 && screenSize < 1200}
        />
    </div>
</ColumnsGrid>

<style lang="scss">
:global(.o-taskList) {
    min-height: 60vh;
}
</style>
