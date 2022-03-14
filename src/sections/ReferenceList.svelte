<script lang="ts">
	import Card from '$/components/Card.svelte'
	import ProjcetIcon from '$/components/ProjectIcon.svelte'
	import redefences from '../data/references'

	interface referenceItem {
		slug: string
		title: string
		text: string
		link?: string
		imageName?: string
		imageAlt?: string
	}

	const data: referenceItem[] = redefences
</script>

<section id="references" class="mb-20">
	<h2 class="hidden">Reference</h2>
	{#each data as item}
		<Card
			slug={item.slug}
			imagePath={`images/webp/${item.imageName}.webp`}
			imageAlt={item.imageAlt}
		>
			<svelte:fragment slot="logo">
				<ProjcetIcon project={item.slug} />
			</svelte:fragment>
			<svelte:fragment slot="title">{item.title}</svelte:fragment>
			<svelte:fragment slot="text">
				{@html item.text}
			</svelte:fragment>
			<svelte:fragment slot="buttons">
				{@const slug = item.slug}
				{#if item.link}
					<a
						href={item.link}
						target="_blank"
						rel="nofollow"
						class="btn border-{slug} text-{slug} hover:bg-{slug}"
					>
						navštívit produkt
					</a>
				{/if}
			</svelte:fragment>
		</Card>
	{/each}
	<!-- <button
		class="btn border-primary text-primary hover:bg-primary block mx-auto"
		on:click|preventDefault={() => (showMore = !showMore)}
	>
		{showMore ? 'skrýt' : 'zobrazit více'}
	</button> -->
</section>
