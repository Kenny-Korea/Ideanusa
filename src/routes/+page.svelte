<script lang="ts">
	import Content from "$lib/components/Content.svelte";
	import Title from "$lib/components/Title.svelte";
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

	let sectionVisible = false;

	onMount(() => {
		console.log("Page loaded");
		sectionVisible = true;
	});
</script>

<section
	transition:fade={{ duration: 5000 }}
	style="visibility: {sectionVisible ? 'visible' : 'hidden'};"
>
	<video width="640" height="360" controls preload="auto" poster="poster.jpg" autoplay muted>
		<track src="subtitles_en.vtt" kind="captions" srclang="en" label="English" />
		<source src="/videos/video.mp4" type="video/mp4" />
		브라우저가 비디오 태그를 지원하지 않습니다.
	</video>
	<Title title="Our Value" />
	<Content>
		<div class="grid-container value">
			<div class="grid-item">Honesty</div>
			<div class="grid-item">
				Emphasizing truthfulness, transparency, and integrity in all interactions.
			</div>
			<div class="grid-item">Inspiration</div>
			<div class="grid-item">
				Motivating and uplifting others through positive actions, words, and example.
			</div>
			<div class="grid-item">Purpose-driven</div>
			<div class="grid-item">
				Acting with intention and alignment toward a greater goal or mission that transcends
				individual interests.
			</div>
		</div>
	</Content>
	<Title title="Our Vision" />
	<Content>
		<span class="vision">Empowering people to be able to contribute more to the nation</span>
	</Content>
	<Title title="Our Mission" />
	<Content>
		<div class="grid-container mission">
			<div class="grid-item">1.</div>
			<div class="grid-item">
				Creating training materials and consulting services that are always developing, providing
				solutions that are right on target, easy to understand and easy to apply.
			</div>
			<div class="grid-item">2.</div>
			<div class="grid-item">
				Provide training and consulting services that are right on target and according to needs.
			</div>
		</div></Content
	>
	<img src="/images/promo.png" alt="promo" />
</section>

<style lang="scss">
	@import "$lib/assets/global.scss";
	section {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;

		video {
			width: 100%;
			height: auto;
		}
	}

	.grid-container {
		width: 100%;
		display: grid;
		gap: 10px;

		&.value {
			grid-template-columns: 1fr 5fr; /* 왼쪽 열은 좁게, 오른쪽 열은 넓게 설정 */
			grid-template-rows: repeat(2, 1fr);
		}

		&.mission {
			grid-template-columns: 1fr 20fr;
			grid-template-rows: repeat(2, 1fr);
		}
	}

	.grid-item {
		padding: 1rem;
		font-size: 1.05rem;

		&:nth-child(odd) {
			color: $main;
			font-weight: 900;
		}
	}

	.vision {
		margin: 1rem;
		font-size: 1.2rem;
	}

	.mission {
		width: 100%;
		font-size: 1.05rem;
		line-height: 1.5rem;
	}
</style>
