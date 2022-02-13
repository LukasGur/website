<script lang="ts">
	import EvideLogo from '$/components/icons/references/EvideLogo.svelte'
	import Diky2020Logo from '$/components/icons/references/Diky2020Logo.svelte'
	import GitHubLogo from '$/components/icons/GitHubLogo.svelte'
</script>

<section class="intro">
	<div class="w-full">
		<div class="intro__title">
			Ahoj jsem Lukáš 👋
			<h1>Front-end developer 👨🏻‍💻.</h1>
			Zakladatel
			<a href="https://evide.cz/" class="evide" target="_blank">
				<EvideLogo size="35" />
				<span class="underline"> Evide </span>
			</a>
			&&nbsp;nadšenec&nbsp;do solidárních
			<span class="inline-block">
				projektů
				<a href="https://diky2020.cz/" class="diky" target="_blank">
					<Diky2020Logo size="35" />
					<span class="underline"> Diky2020 </span>
				</a>
			</span>
		</div>
		<span>
			Nakoukni do mého
			<a
				href="https://github.com/LukasGur"
				target="_blank"
				rel="nofollow"
				class="github"
			>
				<span class="underline">GitHubu</span>
				<GitHubLogo />
			</a>
		</span>
	</div>
</section>

<style lang="postcss">
	.intro {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 58vh;
		position: relative;
		top: -65px;
	}
	.intro__title {
		font-weight: bold;
		font-size: 2.2rem;
		margin-bottom: 3.8rem;
		line-height: 3rem;
	}
	@media (max-width: theme('screens.sm')) {
		.intro {
			height: 50vh;
		}
		.intro__title {
			font-size: 1.7rem;
			line-height: 2.5rem;
		}
	}

	.github {
		font-weight: bold;
		transition: 0.15s;
	}
	.github:hover {
		color: theme('colors.black-dark');
	}

	.evide {
		color: theme('colors.evide');
		transition: 0.15s;
		display: inline-block;
	}
	.diky {
		color: theme('colors.diky');
		transition: 0.15s;
		display: inline-block;
	}
	.evide:hover,
	.diky:hover {
		filter: brightness(0.7);
	}
</style>
