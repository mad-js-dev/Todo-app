<script lang="ts">
    import IconButton from '../../components/molecules/IconButton.svelte';
    import BadgeList from '../../components/organisms/BadgeList.svelte';
    import ColumnsGrid from '../../components/templates/ColumnsGrid.svelte';

    let screenSize:number;
    
    const featureList:any = [
        {
            icon: "checkSquare", 
            title: "Basic project structure and component development.", 
            description: "Simplify your daily routine with our user-friendly interface. Adding, editing, and removing tasks has never been easier. Keep your to-do list organized and stay on top of your responsibilities effortlessly."
        },
        {
            icon: "square",
            title: "Local storage save",
            description: "*** (cooming soon)"
        },
        {
            icon: "square",
            title: "Adding BE & Builder.io integration",
            description: "*** (cooming soon)"
        },
        {
            icon: "square",
            title: "Adding capabilities to use different browsers / devices & login system (google authenticator)",
            description: "*** (cooming soon)"
        },
        {
            icon: "square",
            title: "Adding loginsystem (google authenticator)",
            description: "*** (cooming soon)"
        },
    ];
</script>


<svelte:window bind:innerWidth={screenSize} />
<ColumnsGrid --cols="2" --col1Width="4" --col2Width="8">
    <div slot="column1">
        <h1>Roadmap</h1>
        <p>Welcome to our Simple Task List App! Effortlessly manage your daily tasks with our user-friendly application. Stay organized and boost productivity as you create, edit, and complete tasks with ease. Experience a seamless way to streamline your to-do list.</p>
        <a href="/app">
            <IconButton 
                className="v-menu__button" 
                icon=""
                size="sm"
                theme="outline"
            >
                <svelte:fragment slot="label">
                    Try it now!
                </svelte:fragment>
            </IconButton>
        </a>
    </div>
    <div slot="column2">
        <BadgeList listData={featureList}/>
    </div>
</ColumnsGrid>