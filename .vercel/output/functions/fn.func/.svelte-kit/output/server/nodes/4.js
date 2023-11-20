

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/app/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.098e6463.js","_app/immutable/chunks/scheduler.041ed484.js","_app/immutable/chunks/index.d1b72ddb.js","_app/immutable/chunks/index.b4115846.js","_app/immutable/chunks/IconButton.745d98e5.js","_app/immutable/chunks/index.ff29264b.js","_app/immutable/chunks/ColumnsGrid.bafb97d9.js"];
export const stylesheets = ["_app/immutable/assets/4.c3a3f70d.css","_app/immutable/assets/IconButton.7dc4673c.css","_app/immutable/assets/ColumnsGrid.6320e221.css"];
export const fonts = [];
