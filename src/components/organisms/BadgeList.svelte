<script lang="ts">
    import type { iconName } from "../../types/IconName.d.ts";
    import IconBadge from '../molecules/IconBadge.svelte';
    type BadgeListItem = { icon:iconName, title:string, description: string};
    export let listData: Array<BadgeListItem> = [];
</script>

<div class="o-badgeList">
    {#each listData as listItem}
    <div class="o-badgeList__item">
        <div class="o-badgeList__badgeWrapper">
            <IconBadge size="md" icon={listItem.icon} />
        </div>
        <div class="o-badgeList__contentWrapper">
            <h2 class="o-badgeList__title">{listItem.title}</h2>
            <p class="o-badgeList__description">{listItem.description}</p>
        </div>
    </div>
    {/each}
</div>

<style lang="scss">
    $spacing: map-get($macroSpacings, "md");
    .o-badgeList {
        &__item {
            display: flex;
            align-items: start;

            &:not(:last-child) {
                background: linear-gradient(to right, transparent 0,transparent $spacing, black $spacing + 1, transparent $spacing + 2);
            }
        }

        &__badgeWrapper {
        }

        &__contentWrapper {
            padding: 0 calc($spacing / 2);
            margin-bottom: calc($spacing / 2);
        }

        &__title:not(*:first-child) {
            margin-top: calc($spacing / 2);
        }

        &__description {

        }

    }
</style>