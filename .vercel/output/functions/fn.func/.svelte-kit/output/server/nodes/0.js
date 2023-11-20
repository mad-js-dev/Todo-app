import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.13ad8d5c.js","_app/immutable/chunks/scheduler.041ed484.js","_app/immutable/chunks/index.d1b72ddb.js","_app/immutable/chunks/IconButton.745d98e5.js","_app/immutable/chunks/paths.080e5d51.js","_app/immutable/chunks/index.b4115846.js","_app/immutable/chunks/index.ff29264b.js"];
export const stylesheets = ["_app/immutable/assets/0.a9259c21.css","_app/immutable/assets/IconButton.7dc4673c.css"];
export const fonts = ["_app/immutable/assets/aleo-vietnamese-wght-normal.94be9847.woff2","_app/immutable/assets/aleo-latin-ext-wght-normal.a8856d2d.woff2","_app/immutable/assets/aleo-latin-wght-normal.30f111ef.woff2","_app/immutable/assets/nunito-cyrillic-ext-wght-normal.e82ee1d4.woff2","_app/immutable/assets/nunito-cyrillic-wght-normal.76baf7dd.woff2","_app/immutable/assets/nunito-vietnamese-wght-normal.b13b3f5f.woff2","_app/immutable/assets/nunito-latin-ext-wght-normal.f682eec1.woff2","_app/immutable/assets/nunito-latin-wght-normal.1a48b70f.woff2"];
