<script lang="ts">
    //import { signIn, signOut } from '@auth/sveltekit/client'
    import { page } from '$app/stores'
    import IconButton from '../molecules/IconButton.svelte';
    import type { iconName } from "../../types/iconName.d.ts";
    import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
    import { fade } from 'svelte/transition';
    let screenSize:number;
    $: isOpen = (screenSize) ? false : true;
    $: isDesktop = (screenSize < 1200) ? false : true;

    const menuHeight = tweened((!isDesktop) ? 82 : 0, {
		duration: 600,
        delay: 0.6,
		easing: cubicOut
	});
    const menuButtonOpacity = tweened(0, {
		duration: 600,
        delay: 0.6,
		easing: cubicOut
	});
    const closeButtonOpacity = tweened(100, {
		duration: 600,
        delay: 0.6,
		easing: cubicOut
	});

    const toggleMenu = () => {
        isOpen = !isOpen;
        if(isOpen) {
            (isDesktop) ? menuHeight.set(100) : menuHeight.set(82);
            menuButtonOpacity.set(0)
            closeButtonOpacity.set(100)
        } else {
            (isDesktop) ? menuHeight.set(100) : menuHeight.set(0);
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

<svelte:window bind:innerWidth={screenSize} />

<div 
    class="v-menu"
    class:v-menu--isOpen={isOpen}>
    <nav class="v-menu__wrapper">
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
                            color={isDesktop || (isOpen && screenSize < 1200) ? "#222" : "#EEE" }
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
                            color={isDesktop || (isOpen && screenSize < 1200) ? "#222" : "#EEE" }
                        />
                    </div>
                {/if}
            </div>
        </div>
        <ul class="v-menu__content" style:height={(isDesktop) ? '100%' : `${$menuHeight}%`}>
            {#each routesData as route, i (i)}
                {#if isOpen || isDesktop}
                <li 
                    in:fade={{delay: 100 / routesData.length * i }}
                    out:fade={{delay: -100 / routesData.length * i }}
                >
                    <a href="{route.path}">
                        <IconButton 
                            className="v-menu__button" 
                            icon="{route.icon}"
                            size="sm"
                            theme={screenSize < 1200 ? "outline" : "text"}
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
            <!--
            <li 
                in:fade={{delay: 100 / routesData.length }}
                out:fade={{delay: -100 / routesData.length }}
            >
                {#if $page.data.session?.user}
                <p>Signed in as {$page.data.session.user.email}</p>
                <button on:click={() => signOut()}>Sign out</button>
                {:else}
                <p>Not signed in.</p>
                <button on:click={() => signIn('google')}>Sign in</button>
                {/if}
            </li>
            -->
        </ul>
    </nav>
</div>

<style lang="scss">
$padding: map-get($macroSpacings, "sm");

.v-menu {
    width: 100vw;
    box-sizing: border-box;
    position: absolute;
    z-index: 1;

    &:before {
        //backdrop
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 0;
        background-color: rgba(0,0,0,0);
        backdrop-filter: blur(0px);
        transition: all 0.3s;
        pointer-events: none;
    }

    &__wrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        position: relative;
        z-index: 1;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        @include container-surface(("surface" 0), "onSurface");
    }
    
    &__header {
        display: flex;
        width: 100%;
        padding: $padding;
        color: getColorFromPalette("surfaceContainer-highest");
        transition: color 0.3s;
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
        width: 30%;
    }

    &__buttonClose,
    &__buttonOpen {
        position: absolute;
        right: 0;
    }

    &--isOpen {
        transition: all 0.3s;
        position: fixed;
        &:before {
            background-color: rgba(0,0,0,0.6);
            backdrop-filter: blur(5px);
            transition: all 0.3;
            pointer-events: not-allowed;
        }
        
        & .v-menu__header {
            color: getColorFromPalette("onSurface");
            transition: color 0.3s;
            @include container-surface(("surface"), "onSurface");
        }

        & .v-menu__content {
            @include container-surface(("surface"), "onSurface");

        }
    }


    &__content {
        overflow: hidden;
        list-style: none;
        padding: 0;
        margin: 0;
        width: 100%;
        padding: $padding;

        li {
            margin-bottom: calc($padding / 2);
        }

        :global(.v-menu__button) {
            width: 100%;
            text-align: left;
        }
    }
    
    @media (min-width: 1200px) {
        &__buttonClose,
        &__buttonOpen {
            display: none;
        }

        &__header {
            width: 35%;
        }

        
        &__content {
            width: 60%;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
        }

        :global(li .v-menu__button) {
            width: auto;
            text-align: left;
            margin: 0 16px;
        }
    }
}
</style>