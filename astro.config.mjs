import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [

		starlight({
			title: 'SMUL',
			social: {
				github: 'https://github.com/davidps9/ui-library',
			},
			sidebar: [
				{
					label: 'Quick Start',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Usage',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
