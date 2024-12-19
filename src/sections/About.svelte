<script lang="ts">
	import SvelteIcon from '$/components/icons/tools/SvelteIcon.svelte'
	import TypeScriptIcon from '$/components/icons/tools/TypeScriptIcon.svelte'
	import TailwindIcon from '$/components/icons/tools/TailwindIcon.svelte'
	import JiraIcon from '$/components/icons/tools/JiraIcon.svelte'
	import FigmaIcon from '$/components/icons/tools/FigmaIcon.svelte'
	import experienceYears from '../data/yearsOfExperience'
</script>

<section id="about" class="about mb-20">
	<h2 class="about__title">🙋‍♂️&nbsp;O&nbsp;mně</h2>
	<p class="about__text">
		Jmenuji se Lukáš Gurecký&nbsp;👈 a&nbsp;mám přes
		{experienceYears}&nbsp;{experienceYears > 4 ? 'let' : 'roky'}
		zkušeností s&nbsp;front-endem, tvorbou webových aplikací a&nbsp;SEO.
	</p>
	<p class="about__text">
		Nespím na vavřínech.&nbsp;🏖️ Stále se snažím nacházet nové technologie
		a&nbsp;způsoby vývoje, které mě posunou dál.&nbsp;🚀 Jsem přesvědčen
		o&nbsp;tom, že můj obor je nekonečný maraton vzdělávání, který mě neskutečně
		baví!&nbsp;🍀
	</p>
	<span class="about__text">
		Projekty momentálně vytvářím s&nbsp;těmito technologiemi:
		<strong class="tools">
			<span class="text-svelte">
				<SvelteIcon />
				Svelte<span class="text-gray-lighter">Kit</span>
			</span>
			<span class="text-typescript"> <TypeScriptIcon /> TypeScript</span>
			<span class="text-tailwind"><TailwindIcon /> Tailwind CSS</span>
			<span class="text-jira mr-0"><JiraIcon /> Jira</span>
			na tasky a&nbsp;<span class="text-figma mr-0"><FigmaIcon /> Figma</span>
			na obrázky
		</strong>
	</span>
	<div class="about__image">
		<img
			src="/images/me.webp"
			width="220"
			height="216"
			alt="Lukáš Gurecký"
			class="rounded"
			loading="lazy"
		/>
	</div>
</section>

<style lang="postcss">
	.about {
		position: relative;
	}
	.about__title {
		font-size: 1.666rem;
		margin-bottom: 0.5rem;
		font-weight: bold;
	}
	.about__text {
		margin-bottom: 1rem;
		max-width: 60%;
		display: block;
	}
	.about__image {
		position: absolute;
		right: 1rem;
		top: 3rem;
		width: 220px;
	}
	@media (max-width: theme('screens.sm')) {
		.about__text {
			max-width: 100%;
		}
		.about__image {
			display: none;
		}
	}
	.about__image::before {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: theme('colors.primary');
		bottom: -12px;
		right: -12px;
		border-radius: 4px;
		z-index: -1;
	}
	.tools > * {
		font-weight: normal;
		display: inline-block;
		margin-right: 0.5rem;
	}
</style>
