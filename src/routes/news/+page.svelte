<script lang="ts">
</script>

<section>
	<div></div>
	<img src="./images/news/coming-soon.png" alt="coming-soon" />
</section>

<style lang="scss">
	@import "$lib/assets/global.scss";
	section {
		position: relative;
		width: 100%;
		display: flex;
		justify-content: center;

		div {
			position: absolute;
			top: 10%;
			width: 40%;
			height: 550px;
			background-color: #f3e7f2;
			z-index: -1;
		}

		img {
			width: 30%;
			height: auto;
		}
	}
</style>
