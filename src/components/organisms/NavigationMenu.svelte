<script lang="ts">
    import { signIn, signOut } from '@auth/sveltekit/client'
    import { page } from '$app/stores'
    import IconButton from '../molecules/IconButton.svelte';
    import type { iconName } from "../../types/iconName.d.ts";
    import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
    import { fade } from 'svelte/transition';
    $: isOpen = false;

    const menuHeight = tweened(0, {
		duration: 600,
		easing: cubicOut
	});
    const menuButtonOpacity = tweened(0, {
		duration: 600,
		easing: cubicOut
	});
    const closeButtonOpacity = tweened(100, {
		duration: 600,
		easing: cubicOut
	});

    const toggleMenu = () => {
        isOpen = !isOpen;
        if(isOpen) {
            menuHeight.set(82)
            menuButtonOpacity.set(0)
            closeButtonOpacity.set(100)
        } else {
            menuHeight.set(0)
            menuButtonOpacity.set(100)
            closeButtonOpacity.set(0)
        }
    };

    const routesData = [
        {path: "/", title: "Home", icon:"home" as iconName},
        {path: "/app", title: "App", icon:"cog" as iconName},
        {path: "/about", title: "About", icon:"question" as iconName},
        {path: "/roadmap", title: "Roadmap", icon:"question" as iconName}
    ]
</script>
    
<div class="v-menu">
    <nav>
        <div class="v-menu__header">
            <span class="v-menu__logo">Task App v0.1</span>
            <div class="v-menu__buttonWrapper">
                {#if isOpen}
                    <div class="v-menu__buttonClose" transition:fade>
                        <IconButton 
                            className="v-menu__button" 
                            icon="windowClose"
                            size="md"
                            theme="chromeless"
                            on:click="{toggleMenu}"
                            />
                    </div>
                    {:else}
                    <div class="v-menu__buttonOpen" transition:fade>
                        <IconButton 
                            className="v-menu__button" 
                            icon="menu"
                            size="md"
                            theme="chromeless"
                            on:click="{toggleMenu}"
                        />
                    </div>
                {/if}
            </div>
        </div>
        <ul class="v-menu__content" style:height={`${$menuHeight}vh`}>
            {#each routesData as route, i (i)}
                {#if isOpen}
                <li 
                    in:fade={{delay: 100 / routesData.length * i }}
                    out:fade={{delay: -100 / routesData.length * i }}
                >
                    <a href="{route.path}">
                        <IconButton 
                            className="v-menu__button" 
                            icon="{route.icon}"
                            size="sm"
                            theme="outline"
                            on:click="{toggleMenu}"
                        >
                            <svelte:fragment slot="label">
                                {route.title}
                            </svelte:fragment>
                        </IconButton>
                    </a>
                </li>
                {/if}
            {/each}
            <li 
                in:fade={{delay: 100 / routesData.length * i }}
                out:fade={{delay: -100 / routesData.length * i }}
            >
                {#if $page.data.session?.user}
                    <p>Signed in as {$page.data.session.user.email}</p>
                    <button on:click={signOut}>Sign out</button>
                {:else}
                    <p>Not signed in.</p>
                    <button on:click={() => signIn('google')}>Sign in</button>
                {/if}
            </li>
        </ul>
    </nav>
</div>

<style lang="scss">
$padding: map-get($macroSpacings, "sm");

.v-menu {
    width: 100vw;
    box-sizing: border-box;
    padding: $padding $padding 0 $padding;
    border-width: 0;
    border-bottom-width: 2px;
    border-style: solid;
    @include container-surface("surface", "onSurface", "outline");
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    
    &__header {
        display: flex;
        width: 100%;
        padding-bottom: $padding;
    }

    &__logo {
        width: 100%;
        font-size: 2.1em;
        font-weight: 800;
        text-transform: uppercase;
        padding-top: map-get($microSpacing, "xxs");
    }

    &__buttonWrapper {
        position: relative;
    }

    &__buttonClose,
    &__buttonOpen {
        position: absolute;
        right: 0;
    }


    &__content {
        overflow: hidden;
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            margin-bottom: calc($padding / 2);

            :global(.v-menu__button) {
                width: 100%;
                text-align: left;
            }
        }
    }
}
</style>