import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { I as IconButton } from "../../../chunks/IconButton.js";
import { B as BadgeList } from "../../../chunks/BadgeList.js";
import { C as ColumnsGrid } from "../../../chunks/ColumnsGrid.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const featureList = [
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
    }
  ];
  return ` <div style="display: contents; --cols:2; --col1Width:4; --col2Width:8;">${validate_component(ColumnsGrid, "ColumnsGrid").$$render($$result, {}, {}, {
    column2: () => {
      return `<div slot="column2">${validate_component(BadgeList, "BadgeList").$$render($$result, { listData: featureList }, {}, {})}</div>`;
    },
    column1: () => {
      return `<div slot="column1"><h1 data-svelte-h="svelte-1kkgkz2">Roadmap</h1> <p data-svelte-h="svelte-1fb7zlx">Welcome to our Simple Task List App! Effortlessly manage your daily tasks with our user-friendly application. Stay organized and boost productivity as you create, edit, and complete tasks with ease. Experience a seamless way to streamline your to-do list.</p> <a href="/app">${validate_component(IconButton, "IconButton").$$render(
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
      )}</a></div>`;
    }
  })}</div>`;
});
export {
  Page as default
};
