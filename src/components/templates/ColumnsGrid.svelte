<script lang="ts">
    const itemAmount = Object.keys($$slots).length;
    export const columns: number = (itemAmount <= 12) ? itemAmount : 12;

</script>
<div class="t-columnsGrid">
    <div class="t-columnsGrid__wrapper">
        {#if $$slots.column1 }
            <div><slot name="column1" /></div>
        {/if}
        {#if $$slots.column2 }
            <div><slot name="column2" /></div>
        {/if}
        {#if $$slots.column3 }
            <div><slot name="column3" /></div>
        {/if}
        {#if $$slots.column4 }
            <div><slot name="column4" /></div>
        {/if}
        {#if $$slots.column5 }
            <div><slot name="column5" /></div>
        {/if}
        {#if $$slots.column6 }
            <div><slot name="column6" /></div>
        {/if}
        {#if $$slots.column7 }
            <div><slot name="column7" /></div>
        {/if}
        {#if $$slots.column8 }
            <div><slot name="column8" /></div>
        {/if}
        {#if $$slots.column9 }
            <div><slot name="column9" /></div>
        {/if}
        {#if $$slots.column10 }
            <div><slot name="column10" /></div>
        {/if}
        {#if $$slots.column11 }
            <div><slot name="column11" /></div>
        {/if}
        {#if $$slots.column12 }
            <div><slot name="column12" /></div>
        {/if}
    </div>
</div>


<style lang="scss">

    .t-columnsGrid__wrapper {
        $gap: var(--gap, 0%);
        $columns:  var(--cols, 1);

        $colsWidth: var(--colWidth);
        $columnsWidths: (
            var(--col1Width, 12 / $columns),
            var(--col2Width, 12 / $columns),
            var(--col3Width, 12 / $columns),
            var(--col4Width, 12 / $columns),
            var(--col5Width, 12 / $columns),
            var(--col6Width, 12 / $columns),
            var(--col7Width, 12 / $columns),
            var(--col8Width, 12 / $columns),
            var(--col9Width, 12 / $columns),
            var(--col10Width, 12 / $columns),
            var(--col11Width, 12 / $columns),
            var(--col12Width, 12 / $columns)
        );

        display: flex;
        flex-direction: column;
        gap: $gap;
        flex-wrap: wrap;   
        justify-content: flex-start;
        margin: 0 auto;
        width: 100%;
        min-height: 100vh;
        margin-top: 10vh;

        

        & > div {
            background-color: rgba(255,255,255,0.7);
            padding: 16px;
            box-sizing: border-box;
            /*
            &:first-child {
                transform-origin: right center;
                transform: perspective(1000px) rotateY(10deg);
            }
            &:last-child {
                //transform-origin: left center;
                //transform: perspective(1000px) rotateY(-10deg);
            }
            */
        }

        @media (max-width: 678px) {
            & > div {
                padding: map-get($macroSpacings, "sm");
            }
        }

        @media (min-width: 679px) and (max-width: 1199px) {
            & > div {
                padding: map-get($macroSpacings, "lg") map-get($macroSpacings, "xl") map-get($macroSpacings, "sm") map-get($macroSpacings, "xl");
            }

            @for $i from 1 through 12 {
                & > div:nth-child(#{$i}) {
                    flex-basis: 100%;
                }
            }
        }

        @media (min-width: 1200px) {
            max-width: 1200px;
            min-height: initial;
            justify-content: space-between;
            padding: 10vh;
            $gap: map-get($macroSpacings, "md");
            gap: $gap;
            flex-direction: row;
            height: 70vh;

            @for $i from 1 through 12 {
                & :global([slot="column#{$i}"]) {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    max-height: 100%;
                    
                }

                & :global([slot="column#{$i}"] > *)  {
                    max-height: 70vh;
                }

                & > div:nth-child(#{$i}) {
                    flex-basis: calc((100% / 12) * nth($columnsWidths, $i) - calc($gap / 2));
                }
            }

            &__wrapper {
                flex-wrap: nowrap;
            }

            & :global(* > *)  {
                max-height: 70vh;
            }
            
        }
    }
</style>