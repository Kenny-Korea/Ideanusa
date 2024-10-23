<script lang="ts">
	import Description from "$lib/components/service/Description.svelte";
</script>

<section>
	<img src="/images/service/consulting.jpg" alt="consulting" />
	<Description />
	<Description />
	<img src="/images/service/consulting.jpg" alt="consulting" />
	<img src="/images/service/consulting.jpg" alt="consulting" />
	<Description />
</section>

<style lang="scss">
	section {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: repeat(3, 1fr);

		img {
			width: 640px;
			height: 480px;
			object-fit: cover;
		}
	}
</style>
