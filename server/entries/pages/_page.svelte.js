import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { e as escape } from "../../chunks/escape.js";
const css$2 = {
  code: "section.svelte-12j41tf{width:100%;height:fit-content;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#ffffff;box-sizing:border-box}",
  map: '{"version":3,"file":"Content.svelte","sources":["Content.svelte"],"sourcesContent":["<script lang=\\"ts\\"><\/script>\\n\\n<section>\\n\\t<slot />\\n</section>\\n\\n<style lang=\\"scss\\">section {\\n  width: 100%;\\n  height: fit-content;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: #ffffff;\\n  box-sizing: border-box;\\n}</style>\\n"],"names":[],"mappings":"AAMmB,sBAAQ,CACzB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,WAAW,CACnB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,gBAAgB,CAAE,OAAO,CACzB,UAAU,CAAE,UACd"}'
};
const Content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section class="svelte-12j41tf">${slots.default ? slots.default({}) : ``} </section>`;
});
const css$1 = {
  code: '@charset "UTF-8";span.svelte-1qguayf,section.svelte-1qguayf{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;font-family:SUIT-Regular}section.svelte-1qguayf{display:block}@font-face{font-family:"Pretendard";src:url("../fonts/Pretendard-Variable.woff2") format("woff2");font-weight:500;font-style:normal}@font-face{font-family:"Pretendard";src:url("../fonts/Pretendard-Variable.woff2") format("woff2");font-weight:400;font-style:normal}@font-face{font-family:"SUIT-Regular";src:url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2") format("woff2");font-weight:normal;font-style:normal}section.svelte-1qguayf{width:100%;display:flex;justify-content:center}.title.svelte-1qguayf{margin:2rem 0 1rem 0;font-size:2rem;font-weight:900;color:#94618e}',
  map: '{"version":3,"file":"Title.svelte","sources":["Title.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let title;\\n<\/script>\\n\\n<section>\\n\\t<span class=\\"title\\">{title}</span>\\n</section>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\nhtml,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  font-family: SUIT-Regular;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\nsection {\\n  display: block;\\n}\\nbody {\\n  line-height: 1;\\n}\\nol,\\nul {\\n  list-style: none;\\n}\\nblockquote,\\nq {\\n  quotes: none;\\n}\\nblockquote:before,\\nblockquote:after,\\nq:before,\\nq:after {\\n  content: \\"\\";\\n  content: none;\\n}\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\nhtml {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n  font-size: calc(1rem + 0.2vw);\\n}\\nbody {\\n  margin: 0;\\n  padding: 0;\\n}\\nbutton.a11y {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border: none;\\n  background-color: transparent;\\n  margin: 0;\\n  padding: 0;\\n  cursor: pointer;\\n  -webkit-tap-highlight-color: transparent; /* iOS Safari */\\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\\n  -moz-user-select: none; /* Firefox */\\n  -ms-user-select: none; /* Internet Explorer/Edge */\\n  user-select: none; /* 비표준 브라우저 */\\n}\\nbutton,\\na,\\ndiv,\\ninput[type=button],\\ninput[type=submit] {\\n  -webkit-tap-highlight-color: transparent; /* iOS Safari */\\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\\n  -moz-user-select: none; /* Firefox */\\n  -ms-user-select: none; /* Internet Explorer/Edge */\\n  user-select: none; /* 비표준 브라우저 */\\n}\\n@font-face {\\n  font-family: \\"Pretendard\\";\\n  src: url(\\"../fonts/Pretendard-Variable.woff2\\") format(\\"woff2\\");\\n  font-weight: 500;\\n  font-style: normal;\\n}\\n@font-face {\\n  font-family: \\"Pretendard\\";\\n  src: url(\\"../fonts/Pretendard-Variable.woff2\\") format(\\"woff2\\");\\n  font-weight: 400;\\n  font-style: normal;\\n}\\n@font-face {\\n  font-family: \\"SUIT-Regular\\";\\n  src: url(\\"https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2\\") format(\\"woff2\\");\\n  font-weight: normal;\\n  font-style: normal;\\n}\\nsection {\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n}\\n.title {\\n  margin: 2rem 0 1rem 0;\\n  font-size: 2rem;\\n  font-weight: 900;\\n  color: #94618e;\\n}</style>\\n"],"names":[],"mappings":"AAOmB,SAAS,OAAO,CAInC,mBAAI,CAwEJ,sBAKM,CACJ,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CACT,SAAS,CAAE,IAAI,CACf,IAAI,CAAE,OAAO,CACb,cAAc,CAAE,QAAQ,CACxB,WAAW,CAAE,YACf,CAYA,sBAAQ,CACN,OAAO,CAAE,KACX,CA2DA,UAAW,CACT,WAAW,CAAE,YAAY,CACzB,GAAG,CAAE,yCAAyC,CAAC,OAAO,OAAO,CAAC,CAC9D,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,MACd,CACA,UAAW,CACT,WAAW,CAAE,YAAY,CACzB,GAAG,CAAE,yCAAyC,CAAC,OAAO,OAAO,CAAC,CAC9D,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,MACd,CACA,UAAW,CACT,WAAW,CAAE,cAAc,CAC3B,GAAG,CAAE,yFAAyF,CAAC,OAAO,OAAO,CAAC,CAC9G,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,MACd,CACA,sBAAQ,CACN,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MACnB,CACA,qBAAO,CACL,MAAM,CAAE,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CACrB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,OACT"}'
};
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  $$result.css.add(css$1);
  return `<section class="svelte-1qguayf"><span class="title svelte-1qguayf">${escape(title)}</span> </section>`;
});
const css = {
  code: '@charset "UTF-8";div.svelte-trbk8p.svelte-trbk8p,span.svelte-trbk8p.svelte-trbk8p,img.svelte-trbk8p.svelte-trbk8p,section.svelte-trbk8p.svelte-trbk8p,video.svelte-trbk8p.svelte-trbk8p{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;font-family:SUIT-Regular}section.svelte-trbk8p.svelte-trbk8p{display:block}div.svelte-trbk8p.svelte-trbk8p{-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@font-face{font-family:"Pretendard";src:url("../lib/fonts/Pretendard-Variable.woff2") format("woff2");font-weight:500;font-style:normal}@font-face{font-family:"Pretendard";src:url("../lib/fonts/Pretendard-Variable.woff2") format("woff2");font-weight:400;font-style:normal}@font-face{font-family:"SUIT-Regular";src:url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2") format("woff2");font-weight:normal;font-style:normal}section.svelte-trbk8p.svelte-trbk8p{width:100%;display:flex;flex-direction:column;justify-content:center}section.svelte-trbk8p video.svelte-trbk8p{width:100%;height:auto}.grid-container.svelte-trbk8p.svelte-trbk8p{width:100%;display:grid;gap:10px}.grid-container.value.svelte-trbk8p.svelte-trbk8p{grid-template-columns:1fr 5fr;grid-template-rows:repeat(2, 1fr)}.grid-container.mission.svelte-trbk8p.svelte-trbk8p{grid-template-columns:1fr 20fr;grid-template-rows:repeat(2, 1fr)}.grid-item.svelte-trbk8p.svelte-trbk8p{padding:1rem;font-size:1.05rem}.grid-item.svelte-trbk8p.svelte-trbk8p:nth-child(odd){color:#94618e;font-weight:900}.vision.svelte-trbk8p.svelte-trbk8p{margin:1rem;font-size:1.2rem}.mission.svelte-trbk8p.svelte-trbk8p{width:100%;font-size:1.05rem;line-height:1.5rem}',
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Content from \\"$lib/components/Content.svelte\\";\\nimport Title from \\"$lib/components/Title.svelte\\";\\nimport { onMount } from \\"svelte\\";\\nimport { fade } from \\"svelte/transition\\";\\nlet sectionVisible = false;\\nonMount(() => {\\n  console.log(\\"Page loaded\\");\\n  sectionVisible = true;\\n});\\n<\/script>\\n\\n<section\\n\\ttransition:fade={{ duration: 5000 }}\\n\\tstyle=\\"visibility: {sectionVisible ? 'visible' : 'hidden'};\\"\\n>\\n\\t<video width=\\"640\\" height=\\"360\\" controls preload=\\"auto\\" poster=\\"poster.jpg\\" autoplay muted>\\n\\t\\t<track src=\\"subtitles_en.vtt\\" kind=\\"captions\\" srclang=\\"en\\" label=\\"English\\" />\\n\\t\\t<source src=\\"/videos/video.mp4\\" type=\\"video/mp4\\" />\\n\\t\\t브라우저가 비디오 태그를 지원하지 않습니다.\\n\\t</video>\\n\\t<Title title=\\"Our Value\\" />\\n\\t<Content>\\n\\t\\t<div class=\\"grid-container value\\">\\n\\t\\t\\t<div class=\\"grid-item\\">Honesty</div>\\n\\t\\t\\t<div class=\\"grid-item\\">\\n\\t\\t\\t\\tEmphasizing truthfulness, transparency, and integrity in all interactions.\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"grid-item\\">Inspiration</div>\\n\\t\\t\\t<div class=\\"grid-item\\">\\n\\t\\t\\t\\tMotivating and uplifting others through positive actions, words, and example.\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"grid-item\\">Purpose-driven</div>\\n\\t\\t\\t<div class=\\"grid-item\\">\\n\\t\\t\\t\\tActing with intention and alignment toward a greater goal or mission that transcends\\n\\t\\t\\t\\tindividual interests.\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</Content>\\n\\t<Title title=\\"Our Vision\\" />\\n\\t<Content>\\n\\t\\t<span class=\\"vision\\">Empowering people to be able to contribute more to the nation</span>\\n\\t</Content>\\n\\t<Title title=\\"Our Mission\\" />\\n\\t<Content>\\n\\t\\t<div class=\\"grid-container mission\\">\\n\\t\\t\\t<div class=\\"grid-item\\">1.</div>\\n\\t\\t\\t<div class=\\"grid-item\\">\\n\\t\\t\\t\\tCreating training materials and consulting services that are always developing, providing\\n\\t\\t\\t\\tsolutions that are right on target, easy to understand and easy to apply.\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"grid-item\\">2.</div>\\n\\t\\t\\t<div class=\\"grid-item\\">\\n\\t\\t\\t\\tProvide training and consulting services that are right on target and according to needs.\\n\\t\\t\\t</div>\\n\\t\\t</div></Content\\n\\t>\\n\\t<img src=\\"/images/promo.png\\" alt=\\"promo\\" />\\n</section>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\nhtml,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  font-family: SUIT-Regular;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\nsection {\\n  display: block;\\n}\\nbody {\\n  line-height: 1;\\n}\\nol,\\nul {\\n  list-style: none;\\n}\\nblockquote,\\nq {\\n  quotes: none;\\n}\\nblockquote:before,\\nblockquote:after,\\nq:before,\\nq:after {\\n  content: \\"\\";\\n  content: none;\\n}\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\nhtml {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n  font-size: calc(1rem + 0.2vw);\\n}\\nbody {\\n  margin: 0;\\n  padding: 0;\\n}\\nbutton.a11y {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border: none;\\n  background-color: transparent;\\n  margin: 0;\\n  padding: 0;\\n  cursor: pointer;\\n  -webkit-tap-highlight-color: transparent; /* iOS Safari */\\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\\n  -moz-user-select: none; /* Firefox */\\n  -ms-user-select: none; /* Internet Explorer/Edge */\\n  user-select: none; /* 비표준 브라우저 */\\n}\\nbutton,\\na,\\ndiv,\\ninput[type=button],\\ninput[type=submit] {\\n  -webkit-tap-highlight-color: transparent; /* iOS Safari */\\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\\n  -moz-user-select: none; /* Firefox */\\n  -ms-user-select: none; /* Internet Explorer/Edge */\\n  user-select: none; /* 비표준 브라우저 */\\n}\\n@font-face {\\n  font-family: \\"Pretendard\\";\\n  src: url(\\"../lib/fonts/Pretendard-Variable.woff2\\") format(\\"woff2\\");\\n  font-weight: 500;\\n  font-style: normal;\\n}\\n@font-face {\\n  font-family: \\"Pretendard\\";\\n  src: url(\\"../lib/fonts/Pretendard-Variable.woff2\\") format(\\"woff2\\");\\n  font-weight: 400;\\n  font-style: normal;\\n}\\n@font-face {\\n  font-family: \\"SUIT-Regular\\";\\n  src: url(\\"https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2\\") format(\\"woff2\\");\\n  font-weight: normal;\\n  font-style: normal;\\n}\\nsection {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\nsection video {\\n  width: 100%;\\n  height: auto;\\n}\\n.grid-container {\\n  width: 100%;\\n  display: grid;\\n  gap: 10px;\\n}\\n.grid-container.value {\\n  grid-template-columns: 1fr 5fr; /* 왼쪽 열은 좁게, 오른쪽 열은 넓게 설정 */\\n  grid-template-rows: repeat(2, 1fr);\\n}\\n.grid-container.mission {\\n  grid-template-columns: 1fr 20fr;\\n  grid-template-rows: repeat(2, 1fr);\\n}\\n.grid-item {\\n  padding: 1rem;\\n  font-size: 1.05rem;\\n}\\n.grid-item:nth-child(odd) {\\n  color: #94618e;\\n  font-weight: 900;\\n}\\n.vision {\\n  margin: 1rem;\\n  font-size: 1.2rem;\\n}\\n.mission {\\n  width: 100%;\\n  font-size: 1.05rem;\\n  line-height: 1.5rem;\\n}</style>\\n"],"names":[],"mappings":"AA2DmB,SAAS,OAAO,CAGnC,+BAAG,CACH,gCAAI,CAuBJ,+BAAG,CAiDH,mCAAO,CAKP,iCAAM,CACJ,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CACT,SAAS,CAAE,IAAI,CACf,IAAI,CAAE,OAAO,CACb,cAAc,CAAE,QAAQ,CACxB,WAAW,CAAE,YACf,CAYA,mCAAQ,CACN,OAAO,CAAE,KACX,CAkDA,+BAEmB,CACjB,2BAA2B,CAAE,WAAW,CACxC,mBAAmB,CAAE,IAAI,CACzB,gBAAgB,CAAE,IAAI,CACtB,eAAe,CAAE,IAAI,CACrB,WAAW,CAAE,IACf,CACA,UAAW,CACT,WAAW,CAAE,YAAY,CACzB,GAAG,CAAE,6CAA6C,CAAC,OAAO,OAAO,CAAC,CAClE,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,MACd,CACA,UAAW,CACT,WAAW,CAAE,YAAY,CACzB,GAAG,CAAE,6CAA6C,CAAC,OAAO,OAAO,CAAC,CAClE,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,MACd,CACA,UAAW,CACT,WAAW,CAAE,cAAc,CAC3B,GAAG,CAAE,yFAAyF,CAAC,OAAO,OAAO,CAAC,CAC9G,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,MACd,CACA,mCAAQ,CACN,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MACnB,CACA,qBAAO,CAAC,mBAAM,CACZ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACV,CACA,2CAAgB,CACd,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IACP,CACA,eAAe,kCAAO,CACpB,qBAAqB,CAAE,GAAG,CAAC,GAAG,CAC9B,kBAAkB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CACnC,CACA,eAAe,oCAAS,CACtB,qBAAqB,CAAE,GAAG,CAAC,IAAI,CAC/B,kBAAkB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CACnC,CACA,sCAAW,CACT,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,OACb,CACA,sCAAU,WAAW,GAAG,CAAE,CACxB,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,GACf,CACA,mCAAQ,CACN,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,MACb,CACA,oCAAS,CACP,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,OAAO,CAClB,WAAW,CAAE,MACf"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section style="${"visibility: " + escape("hidden", true) + ";"}" class="svelte-trbk8p"><video width="640" height="360" controls preload="auto" poster="poster.jpg" autoplay muted class="svelte-trbk8p" data-svelte-h="svelte-1r8xmff"><track src="subtitles_en.vtt" kind="captions" srclang="en" label="English"><source src="/videos/video.mp4" type="video/mp4">
		브라우저가 비디오 태그를 지원하지 않습니다.</video> ${validate_component(Title, "Title").$$render($$result, { title: "Our Value" }, {}, {})} ${validate_component(Content, "Content").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="grid-container value svelte-trbk8p" data-svelte-h="svelte-1xlqjng"><div class="grid-item svelte-trbk8p">Honesty</div> <div class="grid-item svelte-trbk8p">Emphasizing truthfulness, transparency, and integrity in all interactions.</div> <div class="grid-item svelte-trbk8p">Inspiration</div> <div class="grid-item svelte-trbk8p">Motivating and uplifting others through positive actions, words, and example.</div> <div class="grid-item svelte-trbk8p">Purpose-driven</div> <div class="grid-item svelte-trbk8p">Acting with intention and alignment toward a greater goal or mission that transcends
				individual interests.</div></div>`;
    }
  })} ${validate_component(Title, "Title").$$render($$result, { title: "Our Vision" }, {}, {})} ${validate_component(Content, "Content").$$render($$result, {}, {}, {
    default: () => {
      return `<span class="vision svelte-trbk8p" data-svelte-h="svelte-1q4qwsz">Empowering people to be able to contribute more to the nation</span>`;
    }
  })} ${validate_component(Title, "Title").$$render($$result, { title: "Our Mission" }, {}, {})} ${validate_component(Content, "Content").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="grid-container mission svelte-trbk8p" data-svelte-h="svelte-ky4w45"><div class="grid-item svelte-trbk8p">1.</div> <div class="grid-item svelte-trbk8p">Creating training materials and consulting services that are always developing, providing
				solutions that are right on target, easy to understand and easy to apply.</div> <div class="grid-item svelte-trbk8p">2.</div> <div class="grid-item svelte-trbk8p">Provide training and consulting services that are right on target and according to needs.</div></div>`;
    }
  })} <img src="/images/promo.png" alt="promo" class="svelte-trbk8p"> </section>`;
});
export {
  Page as default
};