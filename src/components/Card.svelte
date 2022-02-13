<script lang="ts">
	export let slug: string
	export let imagePath: string
	export let imageAlt: string
</script>

<div
	class="card border border-gray-light border-{slug}-lighter bg-{slug}-light"
>
	<div class="card__content">
		<slot name="logo" />
		<h3 class="card__title"><slot name="title" /></h3>
		<p class="card__text">
			<slot name="text" />
		</p>
		<div class="card__buttons">
			<slot name="buttons" />
		</div>
	</div>
	{#if imagePath && imageAlt}
		<img class="card__image" src={imagePath} alt={imageAlt} />
	{/if}
</div>

<style lang="postcss">
	.card {
		display: flex;
		border-radius: 4px;
		padding: 1.5rem;
		position: relative;
		overflow: hidden;
		transition: 0.15s;
		margin-bottom: 2rem;
	}
	.card__content {
		max-width: 60%;
	}
	@media (max-width: theme('screens.sm')) {
		.card__content {
			max-width: 100%;
		}
	}
	.card__title {
		font-size: 1.4rem;
		font-weight: bold;
		margin-top: 1rem;
		margin-bottom: 4px;
	}
	.card__text {
		margin-bottom: 1rem;
		line-height: 1.5rem;
	}
	.card__buttons {
		display: flex;
		gap: 0.5rem;
	}
	.card__image {
		width: 245px;
		position: absolute;
		right: -4px;
		border-radius: 4px;
	}
	@media (max-width: theme('screens.sm')) {
		.card__image {
			display: none;
		}
	}
</style>
