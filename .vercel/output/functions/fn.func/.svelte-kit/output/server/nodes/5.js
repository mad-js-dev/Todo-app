

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/roadmap/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.107c8859.js","_app/immutable/chunks/scheduler.041ed484.js","_app/immutable/chunks/index.d1b72ddb.js","_app/immutable/chunks/IconButton.745d98e5.js","_app/immutable/chunks/BadgeList.56374366.js","_app/immutable/chunks/ColumnsGrid.bafb97d9.js"];
export const stylesheets = ["_app/immutable/assets/IconButton.7dc4673c.css","_app/immutable/assets/BadgeList.efd34c94.css","_app/immutable/assets/ColumnsGrid.6320e221.css"];
export const fonts = [];
