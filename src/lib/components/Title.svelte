<script lang="ts">
	export let title: string;
</script>

<section>
	<span class="title">{title}</span>
</section>

<style lang="scss">
	section {
		width: 100%;
		height: 5rem;
		display: flex;
		padding-left: 2rem;
		/* justify-content: center; */
		align-items: center;
	}

	.title {
		font-size: 2rem;
		font-weight: bold;
	}
</style>
