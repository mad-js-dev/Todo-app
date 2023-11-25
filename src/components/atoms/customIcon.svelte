<script lang="ts">
//Icon library (Preferably fontawsome): https://leshak.github.io/svelte-icons-pack/#/pack/fa
import Icon from 'svelte-icons-pack';
import AiOutlineNodeExpand from 'svelte-icons-pack/ai/AiOutlineNodeExpand';
import type { iconName } from "../../types/iconName.d.ts";
import FaEdit from "svelte-icons-pack/fa/FaEdit";
import FaSquare from "svelte-icons-pack/fa/FaSquare";
import FaPlusSquare from "svelte-icons-pack/fa/FaPlusSquare";
import FaCheckSquare from "svelte-icons-pack/fa/FaCheckSquare";
import FaTrashAlt from "svelte-icons-pack/fa/FaTrashAlt";
import FaWindowClose from "svelte-icons-pack/fa/FaWindowClose";
import FaMinusSquare from "svelte-icons-pack/fa/FaMinusSquare";
import FaSolidHome from "svelte-icons-pack/fa/FaSolidHome";
import FaSolidCog from "svelte-icons-pack/fa/FaSolidCog";
import FaSolidQuestion from "svelte-icons-pack/fa/FaSolidQuestion";
import FaSolidBars from "svelte-icons-pack/fa/FaSolidBars";
import FaSolidSearch from "svelte-icons-pack/fa/FaSolidSearch";
import FaSolidTasks from "svelte-icons-pack/fa/FaSolidTasks";
import FaSolidJedi from "svelte-icons-pack/fa/FaSolidJedi";
import FaSolidMobileAlt from "svelte-icons-pack/fa/FaSolidMobileAlt";

export let name: iconName = "edit";
export let className: string = "";
const getIcon = (iconName: string) => {
    switch (iconName) {
        case "edit":
            return FaEdit;
            break;
        case "square":
            return FaSquare;
            break;
        case "plusSquare":
            return FaPlusSquare;
            break;
        case "minusSquare":
            return FaMinusSquare;
            break;
        case "checkSquare":
            return FaCheckSquare;
            break;
        case "trashAlt":
            return FaTrashAlt;
            break;
        case "windowClose":
            return FaWindowClose;
            break;
        case "home":
            return FaSolidHome;
            break;
        case "cog":
            return FaSolidCog;
            break;
        case "question":
            return FaSolidQuestion;
            break;
        case "menu":
            return FaSolidBars;
            break;
        case "search":
            return FaSolidSearch;
            break;
        case "tasks":
            return FaSolidTasks;
            break;
        case "jedi": 
            return FaSolidJedi;
            break;
        case "phone": 
            return FaSolidMobileAlt;
            break;
    }
}

</script>

<Icon class="{className}" src={getIcon(name)} />

<style lang="scss">
    :global(svg) {
        fill: var(--text-color);
    }
</style>