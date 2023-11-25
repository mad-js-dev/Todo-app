<script lang="ts">
    import IconButton from '../components/molecules/IconButton.svelte';
    import BadgeList from '../components/organisms/BadgeList.svelte';
    import ColumnsGrid from '../components/templates/ColumnsGrid.svelte';

    let innerWidth:number;
    let innerHeight:number;
    $: position = 1;
    $: mouse = {x: 0, y: 0};
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

    const handleMousemove = (event:MouseEvent) => {
		mouse.x = event.clientX;
		mouse.y = event.clientY;
        console.log(innerHeight / 4, mouse.y);
        position = (innerWidth / 2 - mouse.x) /  (innerWidth / 4) * 15;
        if(position < -15 ) position = -15;
        if(position > 15 ) position = 15;
        if(mouse.y < innerHeight / 4)position = 0;
	}
</script>


<svelte:window bind:innerWidth bind:innerHeight />
<div
    class:v-home={true}
    class:v-home--left={position==0}
    class:v-home--right={position==2}
    on:mousemove={(e) => handleMousemove(e)}
    style="transform: perspective(1500px) rotateY({-position}deg);transition: transform 0.3s;transition-timing-function: ease-out;"
>
    <ColumnsGrid 
        --cols="2" 
        --col1Width="4" 
        --col2Width="8"
    >
        <div  
            slot="column1" 
            on:focus={() =>  null} 
            on:blur={() =>  null} 
            on:mouseover={() => position = 0 } 
            on:mouseout={() => position = 1 }
            role="region"
        >
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
        <div 
            slot="column2" 
            on:focus={() =>  null} 
            on:blur={() =>  null} 
            on:mouseover={() => position = 2} 
            on:mouseout={() => position = 1 }
            role="region"
        >
            <BadgeList listData={featureList}/>
        </div>
    </ColumnsGrid>
</div>

<style lang="scss">
    .v-home {
        margin: 16px;
        @media (min-width: 1200px) {
            :global(.t-columnsGrid__wrapper > div:first-child) {
                transform-origin: right center;
                transform: perspective(1500px) rotateY(15deg);
                transition: transform 0.3s;
            }
    
            :global(.t-columnsGrid__wrapper > div:last-child) {
                transform-origin: left center;
                transform: perspective(1500px) rotateY(-15deg);
                transition: transform 0.3s;
            }
    
            &--left {
                transform-origin: center;
                transform: perspective(1500px) rotateY(-15deg);
                transition: transform 0.3s;
            }
    
            &--right {
                transform-origin: center;
                transform: perspective(1500px) rotateY(15deg);
                transition: transform 0.3s;
            }
        }
    } 

</style>