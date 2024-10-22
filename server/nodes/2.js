

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CHCw52xI.js","_app/immutable/chunks/scheduler.DT5mwt88.js","_app/immutable/chunks/index.D_sONqZ-.js"];
export const stylesheets = ["_app/immutable/assets/2.B0JJksQ8.css"];
export const fonts = [];
