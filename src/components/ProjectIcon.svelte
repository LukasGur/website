<script lang="ts">
	import EvideLogo from '$/components/icons/references/EvideLogo.svelte'
	import Diky2020Logo from '$/components/icons/references/Diky2020Logo.svelte'
	import RostislavGureckyLogo from '$/components/icons/references/RostislavGureckyLogo.svelte'
	import SkalovaLogo from '$/components/icons/references/SkalovaLogo.svelte'
	import EnterTrendsLogo from '$/components/icons/references/EnterTrendsLogo.svelte'
	import BotCalculatorLogo from '$/components/icons/references/BotCalculatorLogo.svelte'
	import TypoDomainsLogo from '$/components/icons/references/TypoDomainsLogo.svelte'
	import RamonegeLogo from '$/components/icons/references/RamonegeLogo.svelte'
	import VikendoLogo from '$/components/icons/references/VikendoLogo.svelte'
	import Logo from '$/components/Logo.svelte'

	export let project: string
</script>

{#if project === 'evide'}
	<EvideLogo />
{:else if project === 'diky'}
	<Diky2020Logo />
{:else if project === 'rostislav'}
	<RostislavGureckyLogo />
{:else if project === 'skalova'}
	<SkalovaLogo />
{:else if project === 'entertrends'}
	<EnterTrendsLogo />
{:else if project === 'bot'}
	<BotCalculatorLogo />
{:else if project === 'typo'}
	<TypoDomainsLogo />
{:else if project === 'ramonedge'}
	<RamonegeLogo />
{:else if project === 'vikendo'}
	<VikendoLogo />
{:else if project === 'primary'}
	<Logo />
{/if}
