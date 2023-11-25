<script lang="ts">
import type { iconName } from "../../types/iconName.d.ts";
import CustomIcon from '../atoms/customIcon.svelte';


export let icon: iconName | "" = "edit";
export let className: string = "";
export let color: string = "#000";
export let size: "sm" | "md" | "lg" = "sm"
export let theme: "default" | "chromeless" | "outline" | "text" = "default"
</script>

<button 
    class="{className} m-iconButton" 
    class:m-iconButton--sm={size == "sm"}
    class:m-iconButton--md={size == "md"}
    class:m-iconButton--lg={size == "lg"}
    class:m-iconButton--chromeless={theme == "chromeless"}
    class:m-iconButton--outline={theme == "outline"}
    class:m-iconButton--text={theme == "text"}
    on:click
>
    {#if icon != ""}
    <CustomIcon name={icon} --text-color={color} />
    {/if}
    
    {#if $$slots.label }
    <span class="m-iconButton__label">
        <slot name="label"/>
    </span>
    {/if}
</button>

<style lang="scss">
$sizes: ("sm", "md", "lg");
$area-sizings: (1.5em, 1.9em, 2.4em);
$font-sizings: (1em, 1.2em, 1.6em);

$bottom-spacings: (map-get($microSpacing, 2), map-get($microSpacing, 3), map-get($microSpacing, 4));
.m-iconButton {
    border-width: 2px;
    border-style: solid;
    border-radius: 3px;
    padding: 6px;
    

    &__label {
        &:not(*:first-child) {
            margin-left: 6px;
        }
        font-weight: 800;
        text-transform: uppercase;
    }

    &:hover {
        cursor: pointer;
    }

    & :global(svg) {
        margin: 0;
        display: inline-block;
        vertical-align: middle;
    }
    
    & :global(.m-iconButton__label) {
        display: inline-block;
        vertical-align: middle;
    }

    /* Themes */

    @for $i from 1 through length($sizes) {
        &--#{nth($sizes, $i)} {
            & :global(svg) {
                height: nth($area-sizings, $i);
                width: nth($area-sizings, $i);
            }
            .m-iconButton__label {
                font-size: nth($bottom-spacings, $i);
                margin-top: nth($bottom-spacings, $i);
            }
        }
    }

    &--chromeless {
        @include container-surface(("surfaceContainer-medium", 0), "onSurface", ("outline", 0));
    }

    &--outline {
        @include container-surface("surfaceContainer-medium", "primary", "outline");

        & :global(svg) {
            fill: getColorFromPalette("primary");
        }
    }

    &--text {
        background-color: rgba(0, 0, 0, 0);
        border: none;
        border-bottom: 2px solid #FFF;
        color: #FFF;
        &:hover {
            border-bottom: 2px solid getColorFromPalette("primary");;
        }
        :global(svg) {
            fill: #FFF;
        }
    }
}
</style>
