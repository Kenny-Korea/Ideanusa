import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const css$2 = {
  code: '@charset "UTF-8";a.svelte-1oym7kl.svelte-1oym7kl,img.svelte-1oym7kl.svelte-1oym7kl,header.svelte-1oym7kl.svelte-1oym7kl,nav.svelte-1oym7kl.svelte-1oym7kl{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;font-family:SUIT-Regular}header.svelte-1oym7kl.svelte-1oym7kl,nav.svelte-1oym7kl.svelte-1oym7kl{display:block}button.a11y.svelte-1oym7kl.svelte-1oym7kl{display:flex;justify-content:center;align-items:center;border:none;background-color:transparent;margin:0;padding:0;cursor:pointer;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}button.svelte-1oym7kl.svelte-1oym7kl,a.svelte-1oym7kl.svelte-1oym7kl{-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@font-face{font-family:"Pretendard";src:url("../fonts/Pretendard-Variable.woff2") format("woff2");font-weight:500;font-style:normal}@font-face{font-family:"Pretendard";src:url("../fonts/Pretendard-Variable.woff2") format("woff2");font-weight:400;font-style:normal}@font-face{font-family:"SUIT-Regular";src:url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2") format("woff2");font-weight:normal;font-style:normal}header.svelte-1oym7kl.svelte-1oym7kl{position:sticky;width:100%;height:7rem;display:flex;justify-content:center;align-items:center}header.svelte-1oym7kl nav.svelte-1oym7kl{width:1280px;height:3rem;display:flex;justify-content:space-between;align-items:center}header.svelte-1oym7kl nav #logo.svelte-1oym7kl{width:10rem}header.svelte-1oym7kl nav a.svelte-1oym7kl{font-size:1.2rem;font-weight:900;color:#94618e;text-decoration:none}',
  map: '{"version":3,"file":"Header.svelte","sources":["Header.svelte"],"sourcesContent":["<script lang=\\"ts\\">const handleClickLogo = () => {\\n  location.href = \\"/\\";\\n};\\n<\/script>\\n\\n<header>\\n\\t<nav>\\n\\t\\t<button class=\\"a11y\\" on:click={handleClickLogo}>\\n\\t\\t\\t<img src=\\"/images/logo.png\\" id=\\"logo\\" alt=\\"logo\\" />\\n\\t\\t</button>\\n\\t\\t<a href=\\"/about\\">About</a>\\n\\t\\t<a href=\\"/service\\">Our Services</a>\\n\\t\\t<a href=\\"/people\\">Our People</a>\\n\\t\\t<a href=\\"/testimony\\">Testimony</a>\\n\\t\\t<a href=\\"/news\\">News</a>\\n\\t\\t<a href=\\"/contact\\">Contact</a>\\n\\t</nav>\\n</header>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\nhtml,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  font-family: SUIT-Regular;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\nsection {\\n  display: block;\\n}\\nbody {\\n  line-height: 1;\\n}\\nol,\\nul {\\n  list-style: none;\\n}\\nblockquote,\\nq {\\n  quotes: none;\\n}\\nblockquote:before,\\nblockquote:after,\\nq:before,\\nq:after {\\n  content: \\"\\";\\n  content: none;\\n}\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\nhtml {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n  font-size: calc(1rem + 0.2vw);\\n}\\nbody {\\n  margin: 0;\\n  padding: 0;\\n}\\nbutton.a11y {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border: none;\\n  background-color: transparent;\\n  margin: 0;\\n  padding: 0;\\n  cursor: pointer;\\n  -webkit-tap-highlight-color: transparent; /* iOS Safari */\\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\\n  -moz-user-select: none; /* Firefox */\\n  -ms-user-select: none; /* Internet Explorer/Edge */\\n  user-select: none; /* 비표준 브라우저 */\\n}\\nbutton,\\na,\\ndiv,\\ninput[type=button],\\ninput[type=submit] {\\n  -webkit-tap-highlight-color: transparent; /* iOS Safari */\\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\\n  -moz-user-select: none; /* Firefox */\\n  -ms-user-select: none; /* Internet Explorer/Edge */\\n  user-select: none; /* 비표준 브라우저 */\\n}\\n@font-face {\\n  font-family: \\"Pretendard\\";\\n  src: url(\\"../fonts/Pretendard-Variable.woff2\\") format(\\"woff2\\");\\n  font-weight: 500;\\n  font-style: normal;\\n}\\n@font-face {\\n  font-family: \\"Pretendard\\";\\n  src: url(\\"../fonts/Pretendard-Variable.woff2\\") format(\\"woff2\\");\\n  font-weight: 400;\\n  font-style: normal;\\n}\\n@font-face {\\n  font-family: \\"SUIT-Regular\\";\\n  src: url(\\"https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2\\") format(\\"woff2\\");\\n  font-weight: normal;\\n  font-style: normal;\\n}\\nheader {\\n  position: sticky;\\n  width: 100%;\\n  height: 7rem;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\nheader nav {\\n  width: 1280px;\\n  height: 3rem;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\nheader nav #logo {\\n  width: 10rem;\\n}\\nheader nav a {\\n  font-size: 1.2rem;\\n  font-weight: 900;\\n  color: #94618e;\\n  text-decoration: none;\\n}</style>\\n"],"names":[],"mappings":"AAmBmB,SAAS,OAAO,CAiBnC,+BAAC,CAUD,iCAAG,CA2CH,oCAAM,CAGN,iCAQM,CACJ,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CACT,SAAS,CAAE,IAAI,CACf,IAAI,CAAE,OAAO,CACb,cAAc,CAAE,QAAQ,CACxB,WAAW,CAAE,YACf,CAQA,oCAAM,CAGN,iCACQ,CACN,OAAO,CAAE,KACX,CAiCA,MAAM,mCAAM,CACV,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,WAAW,CAC7B,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,OAAO,CACf,2BAA2B,CAAE,WAAW,CACxC,mBAAmB,CAAE,IAAI,CACzB,gBAAgB,CAAE,IAAI,CACtB,eAAe,CAAE,IAAI,CACrB,WAAW,CAAE,IACf,CACA,oCAAM,CACN,+BAGmB,CACjB,2BAA2B,CAAE,WAAW,CACxC,mBAAmB,CAAE,IAAI,CACzB,gBAAgB,CAAE,IAAI,CACtB,eAAe,CAAE,IAAI,CACrB,WAAW,CAAE,IACf,CACA,UAAW,CACT,WAAW,CAAE,YAAY,CACzB,GAAG,CAAE,yCAAyC,CAAC,OAAO,OAAO,CAAC,CAC9D,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,MACd,CACA,UAAW,CACT,WAAW,CAAE,YAAY,CACzB,GAAG,CAAE,yCAAyC,CAAC,OAAO,OAAO,CAAC,CAC9D,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,MACd,CACA,UAAW,CACT,WAAW,CAAE,cAAc,CAC3B,GAAG,CAAE,yFAAyF,CAAC,OAAO,OAAO,CAAC,CAC9G,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,MACd,CACA,oCAAO,CACL,QAAQ,CAAE,MAAM,CAChB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MACf,CACA,qBAAM,CAAC,kBAAI,CACT,KAAK,CAAE,MAAM,CACb,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MACf,CACA,qBAAM,CAAC,GAAG,CAAC,oBAAM,CACf,KAAK,CAAE,KACT,CACA,qBAAM,CAAC,GAAG,CAAC,gBAAE,CACX,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,OAAO,CACd,eAAe,CAAE,IACnB"}'
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<header class="svelte-1oym7kl"><nav class="svelte-1oym7kl"><button class="a11y svelte-1oym7kl" data-svelte-h="svelte-32mhfm"><img src="/images/logo.png" id="logo" alt="logo" class="svelte-1oym7kl"></button> <a href="/about" class="svelte-1oym7kl" data-svelte-h="svelte-iphxk9">About</a> <a href="/service" class="svelte-1oym7kl" data-svelte-h="svelte-1408tvu">Our Services</a> <a href="/people" class="svelte-1oym7kl" data-svelte-h="svelte-r2ny4l">Our People</a> <a href="/testimony" class="svelte-1oym7kl" data-svelte-h="svelte-g8xamb">Testimony</a> <a href="/news" class="svelte-1oym7kl" data-svelte-h="svelte-13uzzsz">News</a> <a href="/contact" class="svelte-1oym7kl" data-svelte-h="svelte-1n9jr7">Contact</a></nav> </header>`;
});
const css$1 = {
  code: '@charset "UTF-8";span.svelte-1yqw44b,footer.svelte-1yqw44b{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;font-family:SUIT-Regular}footer.svelte-1yqw44b{display:block}@font-face{font-family:"Pretendard";src:url("../fonts/Pretendard-Variable.woff2") format("woff2");font-weight:500;font-style:normal}@font-face{font-family:"Pretendard";src:url("../fonts/Pretendard-Variable.woff2") format("woff2");font-weight:400;font-style:normal}@font-face{font-family:"SUIT-Regular";src:url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2") format("woff2");font-weight:normal;font-style:normal}footer.svelte-1yqw44b{width:100%;height:7rem;display:flex;justify-content:space-around;align-items:center;color:#fff;background-color:#94618e}',
  map: '{"version":3,"file":"Footer.svelte","sources":["Footer.svelte"],"sourcesContent":["<script lang=\\"ts\\"><\/script>\\n\\n<footer>\\n\\t<span>Terms and Conditions</span>\\n\\t<span>© PT Ideanusa Perintis Utama</span>\\n\\t<span>Privacy Policy</span>\\n</footer>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\nhtml,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  font-family: SUIT-Regular;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\nsection {\\n  display: block;\\n}\\nbody {\\n  line-height: 1;\\n}\\nol,\\nul {\\n  list-style: none;\\n}\\nblockquote,\\nq {\\n  quotes: none;\\n}\\nblockquote:before,\\nblockquote:after,\\nq:before,\\nq:after {\\n  content: \\"\\";\\n  content: none;\\n}\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\nhtml {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n  font-size: calc(1rem + 0.2vw);\\n}\\nbody {\\n  margin: 0;\\n  padding: 0;\\n}\\nbutton.a11y {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border: none;\\n  background-color: transparent;\\n  margin: 0;\\n  padding: 0;\\n  cursor: pointer;\\n  -webkit-tap-highlight-color: transparent; /* iOS Safari */\\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\\n  -moz-user-select: none; /* Firefox */\\n  -ms-user-select: none; /* Internet Explorer/Edge */\\n  user-select: none; /* 비표준 브라우저 */\\n}\\nbutton,\\na,\\ndiv,\\ninput[type=button],\\ninput[type=submit] {\\n  -webkit-tap-highlight-color: transparent; /* iOS Safari */\\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\\n  -moz-user-select: none; /* Firefox */\\n  -ms-user-select: none; /* Internet Explorer/Edge */\\n  user-select: none; /* 비표준 브라우저 */\\n}\\n@font-face {\\n  font-family: \\"Pretendard\\";\\n  src: url(\\"../fonts/Pretendard-Variable.woff2\\") format(\\"woff2\\");\\n  font-weight: 500;\\n  font-style: normal;\\n}\\n@font-face {\\n  font-family: \\"Pretendard\\";\\n  src: url(\\"../fonts/Pretendard-Variable.woff2\\") format(\\"woff2\\");\\n  font-weight: 400;\\n  font-style: normal;\\n}\\n@font-face {\\n  font-family: \\"SUIT-Regular\\";\\n  src: url(\\"https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2\\") format(\\"woff2\\");\\n  font-weight: normal;\\n  font-style: normal;\\n}\\nfooter {\\n  width: 100%;\\n  height: 7rem;\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n  color: #fff;\\n  background-color: #94618e;\\n}</style>\\n"],"names":[],"mappings":"AAQmB,SAAS,OAAO,CAInC,mBAAI,CAiEJ,qBAYM,CACJ,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CACT,SAAS,CAAE,IAAI,CACf,IAAI,CAAE,OAAO,CACb,cAAc,CAAE,QAAQ,CACxB,WAAW,CAAE,YACf,CAOA,qBAKQ,CACN,OAAO,CAAE,KACX,CA2DA,UAAW,CACT,WAAW,CAAE,YAAY,CACzB,GAAG,CAAE,yCAAyC,CAAC,OAAO,OAAO,CAAC,CAC9D,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,MACd,CACA,UAAW,CACT,WAAW,CAAE,YAAY,CACzB,GAAG,CAAE,yCAAyC,CAAC,OAAO,OAAO,CAAC,CAC9D,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,MACd,CACA,UAAW,CACT,WAAW,CAAE,cAAc,CAC3B,GAAG,CAAE,yFAAyF,CAAC,OAAO,OAAO,CAAC,CAC9G,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,MACd,CACA,qBAAO,CACL,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,YAAY,CAC7B,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,IAAI,CACX,gBAAgB,CAAE,OACpB"}'
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="svelte-1yqw44b" data-svelte-h="svelte-5c8p1f"><span class="svelte-1yqw44b">Terms and Conditions</span> <span class="svelte-1yqw44b">© PT Ideanusa Perintis Utama</span> <span class="svelte-1yqw44b">Privacy Policy</span> </footer>`;
});
const css = {
  code: "section.svelte-1pytxuw.svelte-1pytxuw{width:100%;display:flex;justify-content:center}section.svelte-1pytxuw main.svelte-1pytxuw{width:1280px;height:fit-content}",
  map: '{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Header from \\"$lib/components/Header.svelte\\";\\nimport \\"$lib/assets/global.scss\\";\\nimport Footer from \\"$lib/components/Footer.svelte\\";\\n<\/script>\\n\\n<Header />\\n<section>\\n\\t<main>\\n\\t\\t<slot />\\n\\t</main>\\n</section>\\n<Footer />\\n\\n<style lang=\\"scss\\">section {\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n}\\nsection main {\\n  width: 1280px;\\n  height: fit-content;\\n}</style>\\n"],"names":[],"mappings":"AAamB,qCAAQ,CACzB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MACnB,CACA,sBAAO,CAAC,mBAAK,CACX,KAAK,CAAE,MAAM,CACb,MAAM,CAAE,WACV"}'
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <section class="svelte-1pytxuw"><main class="svelte-1pytxuw">${slots.default ? slots.default({}) : ``}</main></section> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
