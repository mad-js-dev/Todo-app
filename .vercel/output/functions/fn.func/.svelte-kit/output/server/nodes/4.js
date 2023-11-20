

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/app/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.6cd26e22.js","_app/immutable/chunks/scheduler.e8433b4d.js","_app/immutable/chunks/index.b3abcb9e.js","_app/immutable/chunks/index.119155ed.js","_app/immutable/chunks/IconButton.221c3217.js","_app/immutable/chunks/index.e0ae0a7d.js","_app/immutable/chunks/ColumnsGrid.f8f92f95.js"];
export const stylesheets = ["_app/immutable/assets/4.c3a3f70d.css","_app/immutable/assets/IconButton.7dc4673c.css","_app/immutable/assets/ColumnsGrid.6320e221.css"];
export const fonts = [];
