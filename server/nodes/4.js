

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/service/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.CE9lOkUe.js","_app/immutable/chunks/scheduler.CKj-VH_E.js","_app/immutable/chunks/index.lLeAZDga.js"];
export const stylesheets = ["_app/immutable/assets/4.ClXxCM_x.css"];
export const fonts = [];
