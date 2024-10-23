export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["fonts/Pretendard-Variable.woff2","images/bg-main.jpg","images/logo-black.png","images/logo.png","images/profile/aresty.png","images/profile/chandra.png","images/profile/fransisca.png","images/profile/kenny.png","images/profile/rankin.png","images/profile/ridla.png","images/promo.png","images/service/consulting.jpg","images/service/event.jpg","images/service/marketing.jpg","images/service/training.jpg","videos/video.mp4"]),
	mimeTypes: {".woff2":"font/woff2",".jpg":"image/jpeg",".png":"image/png",".mp4":"video/mp4"},
	_: {
		client: {"start":"_app/immutable/entry/start.D-Kpzczl.js","app":"_app/immutable/entry/app.B-H8vUkj.js","imports":["_app/immutable/entry/start.D-Kpzczl.js","_app/immutable/chunks/entry.CEVtI5dU.js","_app/immutable/chunks/scheduler.CKj-VH_E.js","_app/immutable/entry/app.B-H8vUkj.js","_app/immutable/chunks/scheduler.CKj-VH_E.js","_app/immutable/chunks/index.lLeAZDga.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/service",
				pattern: /^\/service\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
