<script lang="ts">
	export let watermark = false
	export let size = 45
	export let hover = false
</script>

<svg
	version="1.1"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	width={size}
	height={size}
	viewBox="0 0 200 200"
	class="logo {watermark ? 'grayscale' : ''}"
>
	<path
		class="{hover ? 'fill-primary' : 'fill-primary-dark'} duration-150"
		d="M180.8,150.2c0,15.5-8.2,27.8-24.6,37.1c-15,8.5-33.3,12.7-54.8,12.7c-28.1,0-48.6-9.7-61.5-29.2
	c-9.8-14.9-14.8-34.8-14.8-59.7c0-25.1,6.1-48.3,18.3-69.7c15.7-27,37.1-40.5,64.3-40.5c2.1,0,5.6,0.8,10.5,2.3
	c13.6,4.3,25.3,14.2,35.1,29.4c9.4,14.3,14.1,27.9,14.1,40.8c0,23-5.7,34.5-17.2,34.5c-6.6,0-9.8-2.2-9.8-6.5
	c0-0.8,1.6-3.5,4.7-8.2c3.2-4.7,4.7-8.5,4.7-11.3c0-13.4-3.2-26.6-9.5-39.6c-8.2-17-19.5-25.5-33.8-25.5C92,16.8,79.3,23.9,68.5,38
	C60,49.2,54.3,61.8,51.4,75.8c-2.9,14.1-4.4,26.3-4.4,36.7c0,19.8,2.1,34.5,6.3,43.9c6.3,14.7,19,24.4,37.9,28.9
	c6.1,1.5,11,2.3,14.8,2.3c10.8,0,21-2.2,30.6-6.5c9.6-4.3,16.9-10.2,21.8-17.6c4.7-6.8,7-11.5,7-14.2c0-4.2-4-6.2-11.9-6.2
	c-16.2,0-29,1.8-38.6,5.5c-9.6,3.7-14.2,5.5-13.7,5.5c-7.7,0-11.6-5-11.6-15c0-2.3,1.5-4.1,4.6-5.7c3-1.5,11.6-3.2,25.7-5.1
	c13.3-1.9,22.5-2.8,27.4-2.8c9.4,0,17.3,2.3,23.9,6.8C177.5,136.9,180.8,142.8,180.8,150.2z"
	/>
	<path
		class="fill-primary"
		d="M182.1,189c-20.6,6.7-43.9,10-69.9,10c-19.3,0-32.5-6.4-39.6-19.2c-5.2-9-7.7-22.7-7.7-41.2
	c0-11.8,1.1-29.5,3.2-53c2.1-23.5,3.2-41,3.2-52.7c0-2.5-0.2-6.1-0.7-10.9c-0.5-4.8-0.7-8.4-0.7-10.9c0-1.9,0.1-3.9,0.3-6
	c2.5-2.5,5.8-3.7,10.1-3.7c7.8,0,11.8,7.8,11.8,23.5c0,13.6-1.5,33.9-4.4,61c-2.9,27.1-4.4,47.4-4.4,61c0,25.8,10.1,38.6,30.2,38.6
	c6.7,0,16.2-1.6,28.4-4.9c12.2-3.2,21.7-4.9,28.4-4.9c3.6,0,6.4,1.4,8.6,4.2C181,182.7,182.1,185.7,182.1,189z"
	/>
</svg>

<style lang="postcss">
	.logo {
		position: relative;
		right: 0.3rem;
		transition: 0.15s;
	}
</style>
