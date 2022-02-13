<script>
	import '../app.css'
	import Header from '$/layout/Header.svelte'
	import Footer from '$/layout/Footer.svelte'
</script>

<Header />
<div class="container mt-20">
	<slot />
</div>
<Footer />
