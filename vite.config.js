// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite'
import { resolve } from 'path'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	optimizeDeps: {
		include: ['broadcast-channel']
	},
	resolve: {
		alias: {
			$: resolve('./src')
		}
	}
}

export default config
