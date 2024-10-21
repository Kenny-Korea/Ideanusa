<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import "$lib/assets/global.scss";
</script>

<section>
	<Header />
	<div class="gradient">
		<main>
			<slot />
		</main>
	</div>
</section>

<style lang="scss">
	section {
		@import "$lib/assets/global.scss";

		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100vw;
		height: 100vh;
		/* background-image: url("/images/bg-main.jpg");
		background-size: cover;
		animation: zoomIn 1s ease-in-out forwards;  */

		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-image: url("/images/bg-main.jpg");
			background-size: cover;
			background-position: center;
			animation: zoomIn 3s ease-in-out forwards; /* 애니메이션 추가 */
			z-index: -1; /* 배경 이미지가 다른 요소 뒤에 위치하도록 */
		}
	}

	@keyframes zoomIn {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(1.1); /* 약간 더 커지도록 설정 */
		}
	}

	.gradient {
		width: 100%;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
		display: flex;
		justify-content: center;
	}

	main {
		width: 80%;
		min-width: 1280px;
		height: 100vh;
	}
</style>
