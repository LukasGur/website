<script lang="ts">
	import Logo from '$/components/Logo.svelte'
	let hover = false
</script>

<header class="header">
	<div class="container header__content">
		<a
			href="/"
			class="logo"
			aria-label="homepage"
			on:mouseenter={() => (hover = true)}
			on:mouseleave={() => (hover = false)}
		>
			<Logo {hover} />
		</a>
		<nav class="navbar">
			<a class="navbar__item hidden sm:inline" href="#references">Reference</a>
			<a class="navbar__item" href="#about">O mně</a>
			<a class="navbar__item" href="#contact">Kontakt</a>
		</nav>
	</div>
</header>

<style lang="postcss">
	.header {
		width: 100%;
		padding: 1.2rem 0;
	}

	.header__content {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.navbar {
		display: flex;
		gap: 1.5rem;
	}

	.navbar__item {
		text-decoration: none;
		text-transform: lowercase;
		color: theme('colors.primary');
		transition: 0.15s;
	}
	.navbar__item:hover {
		filter: brightness(0.5);
	}
</style>
