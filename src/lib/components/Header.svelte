<script lang="ts">
	const handleClickLogo = () => {
		location.href = "/";
	};
</script>

<header>
	<nav>
		<button class="a11y" on:click={handleClickLogo}>
			<img src="/images/logo.png" id="logo" alt="logo" />
		</button>
		<a href="/about">About</a>
		<a href="/service">Our Services</a>
		<a href="/people">Our People</a>
		<a href="/testimony">Testimony</a>
		<a href="/news">News</a>
		<a href="/contact">Contact</a>
	</nav>
</header>

<style lang="scss">
	@import "$lib/assets/global.scss";
	header {
		position: sticky;
		width: 100%;
		height: 7rem;
		display: flex;
		justify-content: center;
		align-items: center;

		nav {
			width: 1280px;
			height: 3rem;
			display: flex;
			justify-content: space-between;
			align-items: center;

			#logo {
				width: 10rem;
			}

			a {
				font-size: 1.2rem;
				font-weight: 900;
				color: $main;
				text-decoration: none;
			}
		}
	}
</style>
