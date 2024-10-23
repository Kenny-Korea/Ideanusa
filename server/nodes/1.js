

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CgTp2Jwa.js","_app/immutable/chunks/scheduler.CKj-VH_E.js","_app/immutable/chunks/index.lLeAZDga.js","_app/immutable/chunks/entry.CEVtI5dU.js"];
export const stylesheets = [];
export const fonts = [];
