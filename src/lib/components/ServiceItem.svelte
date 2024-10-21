<script lang="ts">
	import type { IServiceItem } from "$lib/types/type";

	export let data: IServiceItem;

	const handleClickServiceItem = () => {
		console.log("ServiceItem clicked");
	};
</script>

<div class="service-item">
	<div class="title">{data.title}</div>
	<img src={data.image} alt={data.title} />
	<div class="overlay">
		<div class="description">
			{#each data.description as desc}
				<p>{desc}</p>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	@import "$lib/assets/global.scss";
	.service-item {
		position: relative;
		width: 100%;
		height: 30rem;
		overflow: hidden;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.title {
		background-color: $main;
		position: absolute;
		top: 0;
		left: 0;
		width: 15rem;
		height: 4rem;
		display: flex;
		align-items: center;
		padding-left: 1rem;
		font-size: 2rem;
		font-weight: bold;
	}

	.title::after {
		content: "";
		position: absolute;
		right: -1%;
		top: 0;
		width: 0;
		height: 0;
		border-left: 1rem solid $main; /* 삼각형의 색상과 사각형의 색상을 동일하게 설정 */
		border-top: 2rem solid transparent;
		border-bottom: 2rem solid transparent;
	}

	.overlay {
		position: absolute;
		box-sizing: border-box;
		bottom: -100%; /* 초기 위치를 아래로 설정 */
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		color: #ffffff;
		transition: bottom 0.3s ease-in-out;
		padding: 1rem;
	}

	.service-item:hover .overlay {
		bottom: -20%; /* 마우스를 올리면 위로 슬라이드 */
	}

	.description {
		display: flex;
		flex-direction: column;
	}
</style>
