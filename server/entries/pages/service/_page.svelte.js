import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
const css$1 = {
  code: "section.svelte-rg4lo4{width:640px;height:480px;padding:1rem;box-sizing:border-box;background-color:yellow}",
  map: '{"version":3,"file":"Description.svelte","sources":["Description.svelte"],"sourcesContent":["<script lang=\\"ts\\"><\/script>\\n\\n<section>hello</section>\\n\\n<style lang=\\"scss\\">section {\\n  width: 640px;\\n  height: 480px;\\n  padding: 1rem;\\n  box-sizing: border-box;\\n  background-color: yellow;\\n}</style>\\n"],"names":[],"mappings":"AAImB,qBAAQ,CACzB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,UAAU,CACtB,gBAAgB,CAAE,MACpB"}'
};
const Description = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="svelte-rg4lo4" data-svelte-h="svelte-i614wy">hello</section>`;
});
const css = {
  code: "section.svelte-1amzs4f.svelte-1amzs4f{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:repeat(3, 1fr)}section.svelte-1amzs4f img.svelte-1amzs4f{width:640px;height:480px;object-fit:cover}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Description from \\"$lib/components/service/Description.svelte\\";\\n<\/script>\\n\\n<section>\\n\\t<img src=\\"/images/service/consulting.jpg\\" alt=\\"consulting\\" />\\n\\t<Description />\\n\\t<Description />\\n\\t<img src=\\"/images/service/consulting.jpg\\" alt=\\"consulting\\" />\\n\\t<img src=\\"/images/service/consulting.jpg\\" alt=\\"consulting\\" />\\n\\t<Description />\\n</section>\\n\\n<style lang=\\"scss\\">section {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: repeat(3, 1fr);\\n}\\nsection img {\\n  width: 640px;\\n  height: 480px;\\n  object-fit: cover;\\n}</style>\\n"],"names":[],"mappings":"AAYmB,qCAAQ,CACzB,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,GAAG,CAC9B,kBAAkB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CACnC,CACA,sBAAO,CAAC,kBAAI,CACV,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,KACd"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="svelte-1amzs4f"><img src="/images/service/consulting.jpg" alt="consulting" class="svelte-1amzs4f"> ${validate_component(Description, "Description").$$render($$result, {}, {}, {})} ${validate_component(Description, "Description").$$render($$result, {}, {}, {})} <img src="/images/service/consulting.jpg" alt="consulting" class="svelte-1amzs4f"> <img src="/images/service/consulting.jpg" alt="consulting" class="svelte-1amzs4f"> ${validate_component(Description, "Description").$$render($$result, {}, {}, {})} </section>`;
});
export {
  Page as default
};
