<script lang="ts">
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";
	import { tick } from "svelte";

	let showContent = false;

	onMount(async () => {
		console.log("Page mounted");
		await tick(); // DOM이 업데이트될 때까지 기다립니다.
		showContent = true; // 트랜지션을 트리거합니다.
	});
</script>

<section transition:fade>
	{#if showContent}
		<div class="title">
			<span in:fade={{ delay: 500 }}>A reliable agency in learning and human development.</span>
			<button in:fade={{ delay: 1000 }}>Our Services</button>
		</div>
	{/if}
</section>

<style lang="scss">
	section {
		position: relative;
		width: 100%;
		height: 100%;

		.title {
			position: absolute;
			top: 40%;
			width: 100%;
			height: 3rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 1rem;

			span {
				font-size: 2.3rem;
				font-weight: bold;
				color: #eee;
				font-weight: 900;
				text-shadow: rgba($color: #000000, $alpha: 0.2) 2px 2px 2px;
			}

			button {
				margin-top: 1rem;
				padding: 0.8rem 3rem;
				border: 1px solid #fff;
				color: #fff;
				font-size: 1.7rem;
				box-sizing: border-box;
				background-color: transparent;
				cursor: pointer;
				transition: background-color 1s ease;

				&:hover {
					background-color: rgba(90, 90, 90, 0.8);
				}
			}
		}
	}
</style>
