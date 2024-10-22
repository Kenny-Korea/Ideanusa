<script lang="ts">
	export let title: string;
</script>

<section>
	<span class="title">{title}</span>
</section>

<style lang="scss">
	@import "$lib/assets/global.scss";
	section {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.title {
		margin: 2rem 0 1rem 0;
		font-size: 2rem;
		font-weight: 900;
		color: $main;
	}
</style>
