import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'SMUL',
    social: {
      github: 'https://github.com/davidps9/ui-library'
    },
    sidebar: [{
      label: 'Quick Start',
      autogenerate: {
        directory: 'guides'
      }
    }, {
      label: 'Usage',
      items: [
        { label: 'Simple Button', link: '/reference/button' },
        { label: 'Simple Avatar', link: '/reference/avatar' },
        { label: 'Simple Card', link: '/reference/card' },
        { label: 'Simple Switch', link: '/reference/switch' },
        { label: 'Types', link: '/reference/proptypes' },
      ]
    }]
  }), react(), tailwind({})]
});