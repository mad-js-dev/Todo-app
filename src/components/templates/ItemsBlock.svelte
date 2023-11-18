<script lang="ts">
    const itemAmount = Object.keys($$slots).length;
    export let childComponent:any;
    export let children:any = [];
</script>

<div class="t-itemsBlock">
    {#each children as child, i}
    <div>
        <svelte:component this={childComponent} label={child}/>
    </div>
    {/each}
</div>


<style lang="scss">
    .t-itemsBlock {
        $gap: var(--gap, 0%);
        $columns:  var(--cols, 1);

        display: flex;
        flex-direction: row;
        gap: $gap;
        flex-wrap: wrap;   
        justify-content: space-between;
        margin: 0 auto;
        width: 100%;

        & > div {
            flex-basis: calc((100% / $columns) - $gap);
        }
    }
</style>