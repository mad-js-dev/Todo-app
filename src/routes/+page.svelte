<script lang="ts">
    import IconButton from '../components/molecules/IconButton.svelte';
    import BadgeList from '../components/organisms/BadgeList.svelte';
    import ColumnsGrid from '../components/templates/ColumnsGrid.svelte';

    let screenSize:number;
    
    const featureList:any = [
        {
            icon: "tasks", 
            title: "Effortless Task Management", 
            description: "Simplify your daily routine with our user-friendly interface. Adding, editing, and removing tasks has never been easier. Keep your to-do list organized and stay on top of your responsibilities effortlessly."
        },
        {
            icon: "search",
            title: "Filter for Efficiency",
            description: "Enhance your focus by sorting tasks as unfinished or finished. Our powerful filter and search features allow you to quickly find what you need. Customizing your task list has never been this convenient."},
        {
            icon: "jedi",
            title: "Sleek & Minimal Design",
            description: "Enjoy a clean and modern workspace that boosts productivity. Our minimalist design provides an uncluttered environment for managing your tasks with ease."},
        {
            icon: "phone",
            title: "Seamless Cross-Platform Use",
            description: "Access your task list from any device – desktop, tablet, or mobile phone. Our app ensures your tasks are synchronized, providing access to your to-do list anytime, anywhere."},
    ];
</script>


<svelte:window bind:innerWidth={screenSize} />
<ColumnsGrid --cols="2" --col1Width="4" --col2Width="8">
    <div slot="column1">
        <div>
            <h1>My Tasks App</h1>
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
    </div>
    <div slot="column2">
        <BadgeList listData={featureList}/>
    </div>
</ColumnsGrid>