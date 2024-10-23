

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.OcKZKhFu.js","_app/immutable/chunks/scheduler.CKj-VH_E.js","_app/immutable/chunks/index.lLeAZDga.js"];
export const stylesheets = [];
export const fonts = [];
