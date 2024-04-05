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
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Installation', link: '/guides/installation/' },
					],
				},
				{
					label: 'Usage',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
