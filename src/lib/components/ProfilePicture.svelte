<script lang="ts">
	import type { Expert } from '$lib/data/data.experts';

	export let expert: Expert;
</script>

<div class="wrapper">
	<img src={expert.src} alt={expert.name} />
</div>

<style>
	.wrapper {
		width: 150px;
		height: 150px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		overflow: hidden;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
