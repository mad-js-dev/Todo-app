

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/roadmap/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.62d8caa4.js","_app/immutable/chunks/scheduler.e8433b4d.js","_app/immutable/chunks/index.b3abcb9e.js","_app/immutable/chunks/IconButton.221c3217.js","_app/immutable/chunks/BadgeList.ecb124ad.js","_app/immutable/chunks/ColumnsGrid.f8f92f95.js"];
export const stylesheets = ["_app/immutable/assets/IconButton.7dc4673c.css","_app/immutable/assets/BadgeList.efd34c94.css","_app/immutable/assets/ColumnsGrid.6320e221.css"];
export const fonts = [];
