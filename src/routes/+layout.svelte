<script lang="ts">
import NavigationMenu from '../components/organisms/NavigationMenu.svelte';
import "@fontsource-variable/aleo";
import "@fontsource-variable/nunito";

export const data:any[] = [];
</script>

<div class="v-appWrapper">
    <iframe class="v-appWrapper__background" width="100%" height="100%" frameborder="0" src="https://www.shadertoy.com/embed/dtVyz3?gui=false&t=10&paused=false&muted=true" allowfullscreen></iframe>
    <NavigationMenu />
    <div class="v-contentWrapper">
        <slot />
    </div>
</div>


<style lang="scss">
.v-appWrapper {
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    position: relative;

    @media (min-width: 678px) {
        flex-direction: column;
        flex-wrap: nowrap;
    }
}

.v-contentWrapper {
    margin: 0;
    width: 100%;
    padding-top: 16px;
}

.v-appWrapper__background {
    position: fixed;
    top: 0; 
    left: 0;
    z-index: -1;
    filter: blur(1px);
}

:global {
    //https://fontsource.org/docs/getting-started/install
    //Aleo
    //nunito
    body {
        font-family: 'Aleo Variable', serif;
        margin: 0;

        @media (min-width: 1200px) {
            overflow: hidden;
        }
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: 'Nunito Variable', sans-serif;
        margin: 0;
    }
}
</style>