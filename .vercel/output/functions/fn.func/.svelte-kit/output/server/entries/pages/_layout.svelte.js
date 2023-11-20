import { n as noop, j as assign, k as identity, c as create_ssr_component, a as subscribe, v as validate_component, l as add_styles, d as each, h as add_attribute, e as escape } from "../../chunks/ssr.js";
import { I as IconButton } from "../../chunks/IconButton.js";
import { w as writable } from "../../chunks/index.js";
const is_client = typeof window !== "undefined";
let now = is_client ? () => window.performance.now() : () => Date.now();
let raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
const tasks = /* @__PURE__ */ new Set();
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0)
    raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0)
    raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let {
      delay = 0,
      duration = 400,
      easing = identity,
      interpolate = get_interpolator
    } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > /** @type {number} */
      duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
const NavigationMenu_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".v-menu.svelte-1hosvrm.svelte-1hosvrm{width:100vw;box-sizing:border-box;padding:16px 16px 0 16px;border-width:0;border-bottom-width:2px;border-style:solid;background-color:lch(92 3.03 121.52/1);color:lch(10 3.03 121.52/1);border:2px solid lch(50 3.03 121.52/1);border-top-width:0;border-left-width:0;border-right-width:0}.v-menu__header.svelte-1hosvrm.svelte-1hosvrm{display:flex;width:100%;padding-bottom:16px}.v-menu__logo.svelte-1hosvrm.svelte-1hosvrm{width:100%;font-size:2.1em;font-weight:800;text-transform:uppercase;padding-top:4px}.v-menu__buttonWrapper.svelte-1hosvrm.svelte-1hosvrm{position:relative}.v-menu__buttonClose.svelte-1hosvrm.svelte-1hosvrm,.v-menu__buttonOpen.svelte-1hosvrm.svelte-1hosvrm{position:absolute;right:0}.v-menu__content.svelte-1hosvrm.svelte-1hosvrm{overflow:hidden;list-style:none;padding:0;margin:0}.v-menu__content.svelte-1hosvrm li.svelte-1hosvrm{margin-bottom:8px}.v-menu__content.svelte-1hosvrm li.svelte-1hosvrm .v-menu__button{width:100%;text-align:left}",
  map: null
};
const NavigationMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isOpen;
  let $menuHeight, $$unsubscribe_menuHeight;
  const menuHeight = tweened(0, { duration: 600, easing: cubicOut });
  $$unsubscribe_menuHeight = subscribe(menuHeight, (value) => $menuHeight = value);
  tweened(0, { duration: 600, easing: cubicOut });
  tweened(100, { duration: 600, easing: cubicOut });
  const routesData = [
    { path: "/", title: "Home", icon: "home" },
    { path: "/app", title: "App", icon: "cog" },
    {
      path: "/about",
      title: "About",
      icon: "question"
    },
    {
      path: "/roadmap",
      title: "Roadmap",
      icon: "question"
    }
  ];
  $$result.css.add(css$1);
  isOpen = false;
  $$unsubscribe_menuHeight();
  return `<div class="v-menu svelte-1hosvrm"><nav><div class="v-menu__header svelte-1hosvrm"><span class="v-menu__logo svelte-1hosvrm" data-svelte-h="svelte-19dxfrh">Task App v0.1</span> <div class="v-menu__buttonWrapper svelte-1hosvrm">${isOpen ? `<div class="v-menu__buttonClose svelte-1hosvrm">${validate_component(IconButton, "IconButton").$$render(
    $$result,
    {
      className: "v-menu__button",
      icon: "windowClose",
      size: "md",
      theme: "chromeless"
    },
    {},
    {}
  )}</div>` : `<div class="v-menu__buttonOpen svelte-1hosvrm">${validate_component(IconButton, "IconButton").$$render(
    $$result,
    {
      className: "v-menu__button",
      icon: "menu",
      size: "md",
      theme: "chromeless"
    },
    {},
    {}
  )}</div>`}</div></div> <ul class="v-menu__content svelte-1hosvrm"${add_styles({ "height": `${$menuHeight}vh` })}>${each(routesData, (route, i) => {
    return `${isOpen ? `<li class="svelte-1hosvrm"><a${add_attribute("href", route.path, 0)}>${validate_component(IconButton, "IconButton").$$render(
      $$result,
      {
        className: "v-menu__button",
        icon: route.icon,
        size: "sm",
        theme: "outline"
      },
      {},
      {
        label: () => {
          return `${escape(route.title)} `;
        }
      }
    )}</a> </li>` : ``}`;
  })} </ul></nav> </div>`;
});
const index$1 = "";
const index = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '.v-appWrapper.svelte-3vy05t{height:100vh;display:flex;flex-wrap:wrap;flex-direction:row}@media(min-width: 678px){.v-appWrapper.svelte-3vy05t{flex-direction:column;flex-wrap:nowrap}}.v-contentWrapper.svelte-3vy05t{margin:0;width:100%}body{font-family:"Aleo Variable", serif}h1,h2,h3,h4,h5,h6{font-family:"Nunito Variable", sans-serif;margin:0}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const data = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="v-appWrapper svelte-3vy05t">${validate_component(NavigationMenu, "NavigationMenu").$$render($$result, {}, {}, {})} <div class="v-contentWrapper svelte-3vy05t">${slots.default ? slots.default({}) : ``}</div> </div>`;
});
export {
  Layout as default
};
