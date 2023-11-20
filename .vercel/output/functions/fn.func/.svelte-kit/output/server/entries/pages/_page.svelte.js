import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { I as IconButton } from "../../chunks/IconButton.js";
import { B as BadgeList } from "../../chunks/BadgeList.js";
import { C as ColumnsGrid } from "../../chunks/ColumnsGrid.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const featureList = [
    {
      icon: "tasks",
      title: "Effortless Task Management",
      description: "Simplify your daily routine with our user-friendly interface. Adding, editing, and removing tasks has never been easier. Keep your to-do list organized and stay on top of your responsibilities effortlessly."
    },
    {
      icon: "search",
      title: "Filter for Efficiency",
      description: "Enhance your focus by sorting tasks as unfinished or finished. Our powerful filter and search features allow you to quickly find what you need. Customizing your task list has never been this convenient."
    },
    {
      icon: "jedi",
      title: "Sleek & Minimal Design",
      description: "Enjoy a clean and modern workspace that boosts productivity. Our minimalist design provides an uncluttered environment for managing your tasks with ease."
    },
    {
      icon: "phone",
      title: "Seamless Cross-Platform Use",
      description: "Access your task list from any device – desktop, tablet, or mobile phone. Our app ensures your tasks are synchronized, providing access to your to-do list anytime, anywhere."
    }
  ];
  return ` <div style="display: contents; --cols:2; --col1Width:4; --col2Width:8;">${validate_component(ColumnsGrid, "ColumnsGrid").$$render($$result, {}, {}, {
    column2: () => {
      return `<div slot="column2">${validate_component(BadgeList, "BadgeList").$$render($$result, { listData: featureList }, {}, {})}</div>`;
    },
    column1: () => {
      return `<div slot="column1"><div><h1 data-svelte-h="svelte-apyqcb">My Tasks App</h1> <p data-svelte-h="svelte-1fb7zlx">Welcome to our Simple Task List App! Effortlessly manage your daily tasks with our user-friendly application. Stay organized and boost productivity as you create, edit, and complete tasks with ease. Experience a seamless way to streamline your to-do list.</p> <a href="/app">${validate_component(IconButton, "IconButton").$$render(
        $$result,
        {
          className: "v-menu__button",
          icon: "",
          size: "sm",
          theme: "outline"
        },
        {},
        {
          label: () => {
            return `Try it now!`;
          }
        }
      )}</a></div></div>`;
    }
  })}</div>`;
});
export {
  Page as default
};
