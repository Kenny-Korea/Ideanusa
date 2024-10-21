<script lang="ts">
</script>

<header>
	<div class="wrapper">
		<img src="/images/logo.png" class="logo" alt="logo" />
		<nav>
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/contact">Contact</a>
		</nav>
	</div>
</header>

<style lang="scss">
	@import "$lib/assets/global.scss";

	header {
		width: 100%;
		height: 10rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

		.wrapper {
			width: 80%;
			min-width: 1280px;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.logo {
				width: 10rem;
			}

			nav {
				display: flex;
				justify-content: flex-end;
				width: 20rem;
				gap: 2rem;
				font-size: 1.2rem;

				a {
					text-decoration: none;
					color: $sub;
					color: rgb(255, 241, 232);
				}
			}
		}
	}
</style>
