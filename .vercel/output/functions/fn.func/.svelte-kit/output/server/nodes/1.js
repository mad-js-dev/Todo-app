

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.2e55f7e7.js","_app/immutable/chunks/scheduler.e8433b4d.js","_app/immutable/chunks/index.b3abcb9e.js","_app/immutable/chunks/singletons.140f2c19.js","_app/immutable/chunks/index.119155ed.js","_app/immutable/chunks/paths.a28d0910.js"];
export const stylesheets = [];
export const fonts = [];
