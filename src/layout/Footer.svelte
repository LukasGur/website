<script lang="ts">
	import Logo from '$/components/Logo.svelte'
	let hover = false
</script>

<footer id="footer" class="container">
	<a
		href="/"
		aria-label="homepage"
		on:mouseenter={() => (hover = true)}
		on:mouseleave={() => (hover = false)}
	>
		<Logo {hover} watermark={!hover} size="25" />
	</a>
	© Lukáš Gurecký
</footer>

<style lang="postcss">
	#footer {
		padding: 20px 1rem;
		color: theme('colors.gray-lighter');
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		font-size: 12px;
	}

	#footer::before {
		content: '';
		background-color: #e8e8e8;
		height: 1px;
		left: 1rem;
		right: 1rem;
		top: 0;
		position: absolute;
	}
</style>
