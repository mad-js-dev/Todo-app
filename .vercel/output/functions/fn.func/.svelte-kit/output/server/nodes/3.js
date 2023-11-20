

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.d65bec9e.js","_app/immutable/chunks/scheduler.041ed484.js","_app/immutable/chunks/index.d1b72ddb.js"];
export const stylesheets = [];
export const fonts = [];
