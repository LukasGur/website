const appColors = {
	primary: '#1a85ff',
	'primary-lighter': '#1a85ff20',
	'primary-light': '#1a85ff10',
	'primary-dark': '#0c407a',
	evide: '#727cf4',
	'evide-lighter': '#727cf420',
	'evide-light': '#727cf410',
	diky: '#e66d45',
	'diky-lighter': '#e66d4520',
	'diky-light': '#e66d4510',
	rostislav: '#ed6e04',
	'rostislav-lighter': '#ed6e0420',
	'rostislav-light': '#ed6e0410',
	ramonedge: '#383f74',
	'ramonedge-lighter': '#383f7420',
	'ramonedge-light': '#383f7410',
	vikendo: '#f1523d',
	'vikendo-lighter': '#f1523d20',
	'vikendo-light': '#f1523d10',
	mycronic: '#0187be',
	'mycronic-lighter': '#0187be20',
	'mycronic-light': '#0187be10',
	entertrends: '#FED656',
	'entertrends-lighter': '#FED65620',
	'entertrends-light': '#FED65610',
	mojemakro: '#FFE61A',
	'mojemakro-lighter': '#FFE61A20',
	'mojemakro-light': '#FFE61A10',
	salescockpit: '#1B3B7B',
	'salescockpit-lighter': '#1B3B7B20',
	'salescockpit-light': '#1B3B7B10',
	edustories: '#0D00DC',
	'edustories-lighter': '#0D00DC20',
	'edustories-light': '#0D00DC10',
	typo: '#6f47d0',
	'typo-lighter': '#6f47d020',
	'typo-light': '#6f47d010'
}

const safeList = Object.keys(appColors).reduce((prev, color) => {
	return [
		...prev,
		`border-${color}`,
		`text-${color}`,
		`hover:bg-${color}`,
		`bg-${color}`
	]
}, [])

const config = {
	mode: 'jit',
	important: true,
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: safeList,
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				sm: '750px'
			}
		},
		fontFamily: {
			sans: ['Nunito Sans', 'sans-serif']
		},
		screens: {
			sm: '640px'
		},
		colors: {
			...appColors,
			gray: '#5c5c5c',
			'gray-lighter': '#8f8f8f',
			'gray-light': '#eee',
			black: '#333',
			'black-dark': 'black',
			white: 'white',
			linkedin: '#2867B2',
			svelte: '#ff3e00',
			vue: '#4dba87',
			nuxt: '#00DC82',
			typescript: '#007acc',
			tailwind: '#06b6d4',
			jira: '#0052CC',
			figma: '#F24E1E'
		}
	},
	plugins: []
}

module.exports = config
