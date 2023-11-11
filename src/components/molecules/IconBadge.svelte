<script lang="ts">
import type { iconName } from "../../types/iconName.d.ts";
import CustomIcon from '../atoms/customIcon.svelte';

export let icon: iconName = "edit";
export let className: string = "";
export let size: "sm" | "md" | "lg" = "sm"
</script>

<div 
    class="{className} m-iconbadge"
    class:m-iconbadge--sm={size == "sm"}
    class:m-iconbadge--md={size == "md"}
    class:m-iconbadge--lg={size == "lg"}
>
    <CustomIcon className="m-iconbadge__icon" name={icon} />
</div>

<style lang="scss">
    .m-iconbadge {
        display: block;
        border-radius: 50%;
        box-shadow: 0px 0px 5px #000;
        background-color: white;
        
        &--sm {
            $size: 48px;
            width: $size;
            height: $size;
            & :global(svg) {
                margin: 12px;
                height: 1.5em;
                width: 1.5em;
            }
        }

        &--md {
            $size: 56px;
            width: $size;
            height: $size;
            & :global(svg) {
                margin: 13px;
                height: 1.9em;
                width: 1.9em;
            }
        }

        &--lg {
            $size: 64px;
            width: $size;
            height: $size;
            & :global(svg) {
                margin: 13px;
                height: 2.4em;
                width: 2.4em;
            }
        }
    }
</style>