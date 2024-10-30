<script lang="ts">
	export let label: string | undefined;
</script>

<section>
	{#if label}
		<p class="label">{label}</p>
	{/if}
	<div class="input-wrapper">
		<slot />
	</div>
</section>

<style lang="scss">
	@import "$lib/assets/global.scss";

	section {
		width: 100%;
		margin: 2rem 0 1rem 0;
		box-sizing: border-box;
	}

	.label {
		font-size: 1rem;
		font-weight: 100;
		color: $main;
		margin-bottom: 1rem;
	}

	.input-wrapper {
		width: inherit;
		height: fit-content;
		box-sizing: border-box;
		background-color: #f8eee7;
		/* margin: 0 2rem; */
	}
</style>
