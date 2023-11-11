<script lang="ts">
import IconButton from '../components/molecules/IconButton.svelte';
import NavigationMenu from '../components/organisms/NavigationMenu.svelte';
import "@fontsource-variable/aleo";
import "@fontsource-variable/nunito";


</script>

<div class="v-appWrapper">
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
    @media (min-width: 678px) {
        flex-direction: column;
        flex-wrap: nowrap;
    }
}

.v-contentWrapper {
    margin: 0;
    width: 100%;
}

:global {
    //https://fontsource.org/docs/getting-started/install
    //Aleo
    //nunito
    body {
        font-family: 'Aleo Variable', serif;
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: 'Nunito Variable', sans-serif;
        margin: 0;
    }
}
</style>