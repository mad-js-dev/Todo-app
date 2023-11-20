import { c as create_ssr_component, e as escape, v as validate_component, d as each } from "./ssr.js";
import { C as CustomIcon } from "./IconButton.js";
const IconBadge_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".m-iconbadge.svelte-1d1bfbc{display:block;border-radius:50%;box-shadow:0px 0px 5px #000;background-color:white}.m-iconbadge--sm.svelte-1d1bfbc{width:48px;height:48px}.m-iconbadge--sm.svelte-1d1bfbc svg{margin:12px;height:1.5em;width:1.5em}.m-iconbadge--md.svelte-1d1bfbc{width:56px;height:56px}.m-iconbadge--md.svelte-1d1bfbc svg{margin:13px;height:1.9em;width:1.9em}.m-iconbadge--lg.svelte-1d1bfbc{width:64px;height:64px}.m-iconbadge--lg.svelte-1d1bfbc svg{margin:13px;height:2.4em;width:2.4em}",
  map: null
};
const IconBadge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon = "edit" } = $$props;
  let { className = "" } = $$props;
  let { size = "sm" } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$1);
  return `<div class="${[
    escape(className, true) + " m-iconbadge svelte-1d1bfbc",
    (size == "sm" ? "m-iconbadge--sm" : "") + " " + (size == "md" ? "m-iconbadge--md" : "") + " " + (size == "lg" ? "m-iconbadge--lg" : "")
  ].join(" ").trim()}">${validate_component(CustomIcon, "CustomIcon").$$render(
    $$result,
    {
      className: "m-iconbadge__icon",
      name: icon
    },
    {},
    {}
  )} </div>`;
});
const BadgeList_svelte_svelte_type_style_lang = "";
const css = {
  code: ".o-badgeList__item.svelte-1nc00rz{display:flex;align-items:start}.o-badgeList__item.svelte-1nc00rz:not(:last-child){background:linear-gradient(to right, transparent 0, transparent 32px, black 33px, transparent 34px)}.o-badgeList__contentWrapper.svelte-1nc00rz{padding:0 16px;margin-bottom:16px}.o-badgeList__title.svelte-1nc00rz:not(*:first-child){margin-top:16px}",
  map: null
};
const BadgeList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { listData = [] } = $$props;
  if ($$props.listData === void 0 && $$bindings.listData && listData !== void 0)
    $$bindings.listData(listData);
  $$result.css.add(css);
  return `<div class="o-badgeList">${each(listData, (listItem) => {
    return `<div class="o-badgeList__item svelte-1nc00rz"><div class="o-badgeList__badgeWrapper">${validate_component(IconBadge, "IconBadge").$$render($$result, { size: "md", icon: listItem.icon }, {}, {})}</div> <div class="o-badgeList__contentWrapper svelte-1nc00rz"><h2 class="o-badgeList__title svelte-1nc00rz">${escape(listItem.title)}</h2> <p class="o-badgeList__description">${escape(listItem.description)}</p></div> </div>`;
  })} </div>`;
});
export {
  BadgeList as B
};
