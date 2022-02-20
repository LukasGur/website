<script lang="ts">
	import { page } from '$app/stores'
	$: {
		/* @ts-ignore */
		if (typeof gtag !== 'undefined') {
			console.log($page.url)
			/* @ts-ignore */
			gtag('config', 'G-YMPL50YVZ7', {
				page_path: $page.url
			})
		}
	}
</script>
