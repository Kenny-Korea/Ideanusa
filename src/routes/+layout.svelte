<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import "$lib/assets/global.scss";
	import Footer from "$lib/components/Footer.svelte";
</script>

<Header />
<section>
	<main>
		<slot />
	</main>
</section>
<Footer />

<style lang="scss">
	section {
		width: 100%;
		display: flex;
		justify-content: center;

		main {
			width: 1280px;
			height: fit-content;
		}
	}
</style>
