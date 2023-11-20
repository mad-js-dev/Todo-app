

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.60d6caa5.js","_app/immutable/chunks/scheduler.041ed484.js","_app/immutable/chunks/index.d1b72ddb.js","_app/immutable/chunks/singletons.aeb66dfc.js","_app/immutable/chunks/index.b4115846.js","_app/immutable/chunks/paths.080e5d51.js"];
export const stylesheets = [];
export const fonts = [];
