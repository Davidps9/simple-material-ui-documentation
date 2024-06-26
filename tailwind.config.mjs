/** @type {import('tailwindcss').Config} */
import starlightPlugin from '@astrojs/starlight-tailwind';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'node_modules/simple-material-ui-library/**/*.{html,js,jsx,ts,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [starlightPlugin()],
}
