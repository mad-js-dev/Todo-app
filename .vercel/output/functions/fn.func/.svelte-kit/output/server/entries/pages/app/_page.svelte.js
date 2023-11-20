import { c as create_ssr_component, j as createEventDispatcher, k as add_attribute, v as validate_component, e as escape, d as each, a as subscribe, n as noop } from "../../../chunks/ssr.js";
import { w as writable } from "../../../chunks/index.js";
import { I as IconButton } from "../../../chunks/IconButton.js";
import { C as ColumnsGrid } from "../../../chunks/ColumnsGrid.js";
const dummyData = [
  {
    id: 0,
    description: "Finish the report for the upcoming meeting",
    done: false
  },
  {
    id: 1,
    description: "Clean the garage",
    done: true
  },
  {
    id: 2,
    description: "Buy groceries for the week",
    done: false
  },
  {
    id: 3,
    description: "Schedule a doctor's appointment",
    done: true
  }
];
function storable(data) {
  console.log(dummyData);
  console.log("dummyData");
  const { subscribe: subscribe2, set, update } = writable(data);
  return {
    subscribe: subscribe2,
    set,
    update: (taskToUpdate) => update((n) => {
      const result = n.map((task) => {
        if (task.id == taskToUpdate.id)
          return taskToUpdate;
        return task;
      });
      console.log("meh0");
      return result;
    }),
    create: () => update((n) => {
      const task = {
        id: Date.now(),
        description: "New task",
        done: false
      };
      console.log(n);
      n.unshift(task);
      return n;
    }),
    read: () => update((n) => n),
    delete: (taskToRemove) => update((n) => {
      const result = n.filter((task) => {
        if (task.id != taskToRemove.id)
          return task;
      });
      return result;
    }),
    reset: () => set(dummyData)
  };
}
storable(dummyData);
const TaskList_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".o-taskList.svelte-1moi4f6.svelte-1moi4f6{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;background-color:lch(92 3.03 121.52/1);color:lch(10 3.03 121.52/1);border:2px solid lch(50 3.03 121.52/1)}.o-taskList__header.svelte-1moi4f6.svelte-1moi4f6{display:flex;flex-direction:row;width:100%;padding-top:16px;padding-bottom:16px}.o-taskList__header.svelte-1moi4f6>div.svelte-1moi4f6:first-child{flex-basis:100%;padding-left:16px}.o-taskList__header.svelte-1moi4f6>div.svelte-1moi4f6:last-child{flex-basis:30%;text-align:right;padding-right:16px}.o-taskList__searchField.svelte-1moi4f6.svelte-1moi4f6{margin:0 64px 4px 0;height:1.8rem;width:100%;margin-bottom:8px}.o-taskList__filterDone.svelte-1moi4f6.svelte-1moi4f6{display:inline-block;cursor:pointer}.o-taskList__editor.svelte-1moi4f6.svelte-1moi4f6{display:flex;width:100%;height:0px;background:linear-gradient(to bottom, lch(77 3.03 121.52/1), lch(77 3.03 121.52/0) 10%), linear-gradient(to top, lch(77 3.03 121.52/1), lch(77 3.03 121.52/0) 10%), lch(87 3.03 121.52/1);padding-top:16px;padding-bottom:16px}.o-taskList__editor.svelte-1moi4f6>div.svelte-1moi4f6:first-child{flex-basis:65%;padding-left:16px}.o-taskList__editor.svelte-1moi4f6>div.svelte-1moi4f6:last-child{flex-basis:35%;text-align:right;padding-right:16px}.o-taskList__editor.svelte-1moi4f6 .m-iconButton{margin:0 0 0 16px}.o-taskList--edit.svelte-1moi4f6 .o-taskList__editor.svelte-1moi4f6{height:50px}.o-taskList__content.svelte-1moi4f6.svelte-1moi4f6{display:flex;flex-direction:column;width:100%;overflow-x:auto;padding:0 0 16px 0}.o-taskList__item.svelte-1moi4f6.svelte-1moi4f6{display:flex;align-items:center;gap:16px;padding:16px 16px}.o-taskList__itemCheck.svelte-1moi4f6.svelte-1moi4f6{display:inline-block;padding:4px;width:32px;height:32px}.o-taskList__itemCheck.svelte-1moi4f6 .m-iconButton{border:0}.o-taskList__itemDescription.svelte-1moi4f6.svelte-1moi4f6{flex-grow:1}@media(min-width: 769px) and (max-width: 1199px){.o-taskList.svelte-1moi4f6 .o-taskList__content.svelte-1moi4f6{flex-direction:row;min-height:initial;flex-wrap:wrap}.o-taskList.svelte-1moi4f6 .o-taskList__item.svelte-1moi4f6{width:50%}.o-taskList.svelte-1moi4f6 .o-taskList__item.svelte-1moi4f6:nth-child(4n+1),.o-taskList.svelte-1moi4f6 .o-taskList__item.svelte-1moi4f6:nth-child(4n+2){background-color:lch(98 3.03 121.52/1);color:lch(10 3.03 121.52/1);transition:all 0.3s}}@media(min-width: 1200px){.o-taskList.svelte-1moi4f6 .o-taskList__item.svelte-1moi4f6:nth-child(odd){background-color:lch(98 3.03 121.52/1);color:lch(10 3.03 121.52/1);transition:all 0.3s}}.o-taskList--condensed.svelte-1moi4f6 .o-taskList__item.svelte-1moi4f6:nth-child(odd){background-color:lch(98 3.03 121.52/1);color:lch(10 3.03 121.52/1);transition:all 0.3s}.o-taskList--extended.svelte-1moi4f6 .o-taskList__content.svelte-1moi4f6{flex-direction:row;min-height:initial;flex-wrap:wrap}.o-taskList--extended.svelte-1moi4f6 .o-taskList__item.svelte-1moi4f6{width:40%;flex-grow:1}.o-taskList--extended.svelte-1moi4f6 .o-taskList__item.svelte-1moi4f6:nth-child(4n+1),.o-taskList--extended.svelte-1moi4f6 .o-taskList__item.svelte-1moi4f6:nth-child(4n+2){background-color:lch(98 3.03 121.52/1);color:lch(10 3.03 121.52/1)}",
  map: null
};
let typedSelectedTask = null;
const TaskList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selectedTask;
  let filterDone;
  let readTasks;
  let doneFilterString;
  createEventDispatcher();
  let { list = [] } = $$props;
  let { condensed = false } = $$props;
  let { extended = false } = $$props;
  let searchString = "";
  if ($$props.list === void 0 && $$bindings.list && list !== void 0)
    $$bindings.list(list);
  if ($$props.condensed === void 0 && $$bindings.condensed && condensed !== void 0)
    $$bindings.condensed(condensed);
  if ($$props.extended === void 0 && $$bindings.extended && extended !== void 0)
    $$bindings.extended(extended);
  $$result.css.add(css$1);
  selectedTask = typedSelectedTask;
  filterDone = 0;
  readTasks = () => {
    let result = list.filter((task) => {
      if (filterDone == 0) {
        return task;
      } else if (filterDone == 1) {
        if (task.done == true)
          return task;
      } else if (filterDone == 2) {
        if (task.done != true)
          return task;
      }
    });
    return result;
  };
  doneFilterString = filterDone != 0 ? filterDone != 1 ? "Only done" : "Not done" : "All";
  return `<div class="${[
    "o-taskList svelte-1moi4f6",
    (condensed ? "o-taskList--condensed" : "") + " " + (extended ? "o-taskList--extended" : "") + " " + (selectedTask ? "o-taskList--edit" : "")
  ].join(" ").trim()}"><div class="o-taskList__header svelte-1moi4f6"><div class="svelte-1moi4f6"><input class="o-taskList__searchField svelte-1moi4f6" type="text" placeholder="Search"${add_attribute("value", searchString, 0)}> <div class="o-taskList__filterDone svelte-1moi4f6">${filterDone == 0 ? `${validate_component(IconButton, "IconButton").$$render($$result, { icon: "minusSquare" }, {}, {
    label: () => {
      return `${escape(`Show: ${doneFilterString}`)}`;
    }
  })}` : `${filterDone == 1 ? `${validate_component(IconButton, "IconButton").$$render($$result, { icon: "square" }, {}, {
    label: () => {
      return `${escape(`Show: ${doneFilterString}`)}`;
    }
  })}` : `${validate_component(IconButton, "IconButton").$$render($$result, { icon: "checkSquare" }, {}, {
    label: () => {
      return `${escape(`Show: ${doneFilterString}`)}`;
    }
  })}`}`}</div></div> <div class="svelte-1moi4f6">${validate_component(IconButton, "IconButton").$$render(
    $$result,
    {
      className: "o-taskList__createTask",
      icon: "plusSquare"
    },
    {},
    {
      default: () => {
        return `Create task`;
      }
    }
  )}</div></div> ${selectedTask != null ? `<div class="o-taskList__editor svelte-1moi4f6"><div class="svelte-1moi4f6"><label>Description: 
                <input class="o-taskList__searhField" type="text" placeholder="Description"${add_attribute("value", selectedTask.description, 0)}></label></div> <div class="svelte-1moi4f6">${validate_component(IconButton, "IconButton").$$render(
    $$result,
    {
      className: "o-taskList__removeItem",
      icon: "trashAlt"
    },
    {},
    {
      default: () => {
        return `Delete task`;
      }
    }
  )} ${validate_component(IconButton, "IconButton").$$render(
    $$result,
    {
      className: "o-taskList__closeItem",
      icon: "checkSquare"
    },
    {},
    {
      default: () => {
        return `Close`;
      }
    }
  )}</div></div>` : ``} <div class="o-taskList__content svelte-1moi4f6">${each(readTasks(), (listItem) => {
    return `<div class="o-taskList__item svelte-1moi4f6"><div class="o-taskList__itemCheck svelte-1moi4f6"><div>${listItem.done ? `${validate_component(IconButton, "IconButton").$$render(
      $$result,
      {
        className: "o-taskList__check",
        icon: "square",
        theme: "chromeless"
      },
      {},
      {}
    )}` : `${validate_component(IconButton, "IconButton").$$render(
      $$result,
      {
        className: "o-taskList__check",
        icon: "checkSquare",
        theme: "chromeless"
      },
      {},
      {}
    )}`} </div></div> <div class="o-taskList__itemDescription svelte-1moi4f6"><span>${escape(listItem.description)}</span></div> <div>${validate_component(IconButton, "IconButton").$$render(
      $$result,
      {
        className: "o-taskList__itemedit",
        icon: "edit"
      },
      {},
      {
        default: () => {
          return `Edit task
                `;
        }
      }
    )}</div> </div>`;
  })}</div> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".o-taskList{min-height:60vh}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let store;
  let $store, $$unsubscribe_store = noop, $$subscribe_store = () => ($$unsubscribe_store(), $$unsubscribe_store = subscribe(store, ($$value) => $store = $$value), store);
  let screenSize;
  $$result.css.add(css);
  $$subscribe_store(store = storable([]));
  $$unsubscribe_store();
  return ` <div style="display: contents; --cols:2; --col1Width:4; --col2Width:8;">${validate_component(ColumnsGrid, "ColumnsGrid").$$render($$result, {}, {}, {
    column2: () => {
      return `<div slot="column2">${validate_component(TaskList, "TaskList").$$render(
        $$result,
        {
          list: $store,
          condensed: screenSize < 768,
          extended: screenSize > 768
        },
        {},
        {}
      )}</div>`;
    },
    column1: () => {
      return `<div slot="column1" data-svelte-h="svelte-1ounhmo"><div><h2>Very very long lorem ipsum long lorem ipsum title</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus, sapien varius maximus hendrerit, diam tellus cursus mi, eu tempor turpis est sed diam. Donec tortor mauris, condimentum imperdiet imperdiet nec, tempor a odio. Aenean sed vehicula neque.</p></div></div>`;
    }
  })}</div>`;
});
export {
  Page as default
};
