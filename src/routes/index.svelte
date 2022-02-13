<script lang="ts">
	import Intro from '$/sections/Intro.svelte'
	import ReferenceList from '$/sections/ReferenceList.svelte'
	import About from '$/sections/About.svelte'
	import Contact from '$/sections/Contact.svelte'
	import experienceYears from '../data/yearsOfExperience'
</script>

<svelte:head>
	<title>Vue.js a Svelte front-end developer Brno - Lukáš Gurecký 👀</title>
	<meta
		name="description"
		content="Jsem Vue.js a Svelte front-end devloper z Brna. Mám více než {experienceYears} {experienceYears >
		4
			? 'let'
			: 'roky'} zkušeností a pár projektů za sebou. Pojď společně vytvořit něco úžasného! 🚀"
	/>
</svelte:head>

<Intro />
<ReferenceList />
<About />
<Contact />
