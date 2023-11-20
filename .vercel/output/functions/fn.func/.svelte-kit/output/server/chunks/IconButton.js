import { c as create_ssr_component, v as validate_component, e as escape, b as compute_slots } from "./ssr.js";
import "svelte-icons-pack/ai/AiOutlineNodeExpand.js";
import FaEdit from "svelte-icons-pack/fa/FaEdit.js";
import FaSquare from "svelte-icons-pack/fa/FaSquare.js";
import FaPlusSquare from "svelte-icons-pack/fa/FaPlusSquare.js";
import FaCheckSquare from "svelte-icons-pack/fa/FaCheckSquare.js";
import FaTrashAlt from "svelte-icons-pack/fa/FaTrashAlt.js";
import FaWindowClose from "svelte-icons-pack/fa/FaWindowClose.js";
import FaMinusSquare from "svelte-icons-pack/fa/FaMinusSquare.js";
import FaSolidHome from "svelte-icons-pack/fa/FaSolidHome.js";
import FaSolidCog from "svelte-icons-pack/fa/FaSolidCog.js";
import FaSolidQuestion from "svelte-icons-pack/fa/FaSolidQuestion.js";
import FaSolidBars from "svelte-icons-pack/fa/FaSolidBars.js";
import FaSolidSearch from "svelte-icons-pack/fa/FaSolidSearch.js";
import FaSolidTasks from "svelte-icons-pack/fa/FaSolidTasks.js";
import FaSolidJedi from "svelte-icons-pack/fa/FaSolidJedi.js";
import FaSolidMobileAlt from "svelte-icons-pack/fa/FaSolidMobileAlt.js";
const CustomIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const Icon = require("svelte-icons-pack");
  let { name = "edit" } = $$props;
  let { className = "" } = $$props;
  const getIcon = (iconName) => {
    switch (iconName) {
      case "edit":
        return FaEdit;
      case "square":
        return FaSquare;
      case "plusSquare":
        return FaPlusSquare;
      case "minusSquare":
        return FaMinusSquare;
      case "checkSquare":
        return FaCheckSquare;
      case "trashAlt":
        return FaTrashAlt;
      case "windowClose":
        return FaWindowClose;
      case "home":
        return FaSolidHome;
      case "cog":
        return FaSolidCog;
      case "question":
        return FaSolidQuestion;
      case "menu":
        return FaSolidBars;
      case "search":
        return FaSolidSearch;
      case "tasks":
        return FaSolidTasks;
      case "jedi":
        return FaSolidJedi;
      case "phone":
        return FaSolidMobileAlt;
    }
  };
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `${validate_component(Icon, "Icon").$$render($$result, { class: className, src: getIcon(name) }, {}, {})}`;
});
const IconButton_svelte_svelte_type_style_lang = "";
const css = {
  code: ".m-iconButton.svelte-1xy3hzp{border-width:2px;border-style:solid;border-radius:3px;padding:6px}.m-iconButton__label.svelte-1xy3hzp{font-weight:800;text-transform:uppercase}.m-iconButton__label.svelte-1xy3hzp:not(*:first-child){margin-left:6px}.m-iconButton.svelte-1xy3hzp:hover{cursor:pointer}.m-iconButton.svelte-1xy3hzp svg{margin:0;display:inline-block;vertical-align:middle}.m-iconButton.svelte-1xy3hzp .m-iconButton__label{display:inline-block;vertical-align:middle}.m-iconButton--sm.svelte-1xy3hzp svg{height:1.5em;width:1.5em}.m-iconButton--md.svelte-1xy3hzp svg{height:1.9em;width:1.9em}.m-iconButton--lg.svelte-1xy3hzp svg{height:2.4em;width:2.4em}.m-iconButton--chromeless.svelte-1xy3hzp{background-color:lch(94 3.03 121.52/0);color:lch(10 3.03 121.52/1);border-color:lch(50 3.03 121.52/0)}.m-iconButton--outline.svelte-1xy3hzp{background-color:lch(94 3.03 121.52/1);color:lch(40 44.2 135.48/1);border:2px solid lch(50 3.03 121.52/1)}.m-iconButton--outline.svelte-1xy3hzp svg{fill:lch(40 44.2 135.48/1)}",
  map: null
};
const IconButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { icon = "edit" } = $$props;
  let { className = "" } = $$props;
  let { size = "sm" } = $$props;
  let { theme = "default" } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  $$result.css.add(css);
  return `<button class="${[
    escape(className, true) + " m-iconButton svelte-1xy3hzp",
    (size == "sm" ? "m-iconButton--sm" : "") + " " + (size == "md" ? "m-iconButton--md" : "") + " " + (size == "lg" ? "m-iconButton--lg" : "") + " " + (theme == "chromeless" ? "m-iconButton--chromeless" : "") + " " + (theme == "outline" ? "m-iconButton--outline" : "")
  ].join(" ").trim()}">${icon != "" ? `${validate_component(CustomIcon, "CustomIcon").$$render($$result, { name: icon }, {}, {})}` : ``} ${$$slots.label ? `<span class="m-iconButton__label svelte-1xy3hzp">${slots.label ? slots.label({}) : ``}</span>` : ``} </button>`;
});
export {
  CustomIcon as C,
  IconButton as I
};
