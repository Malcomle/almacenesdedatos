import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  base: '/almacenesdedatos/',
  title: 'Documentation',
  description: 'My VuePress Documentation Site',

  theme: defaultTheme({
    // Suppression du logo et de la navbar
    logo: null,
    navbar: false,

    // Ajout d'un menu latéral
    sidebar: {
      '/': [
        {
          text: 'Guide',
          collapsible: true,
          children: [
            '/get-started.md', // Remplacez par vos chemins réels
            '/test.md',
          ],
        },
      ],
    },
  }),

  bundler: viteBundler(),
})