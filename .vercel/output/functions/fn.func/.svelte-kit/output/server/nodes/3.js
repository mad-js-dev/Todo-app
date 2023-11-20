

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.d5291934.js","_app/immutable/chunks/scheduler.e8433b4d.js","_app/immutable/chunks/index.b3abcb9e.js"];
export const stylesheets = [];
export const fonts = [];
