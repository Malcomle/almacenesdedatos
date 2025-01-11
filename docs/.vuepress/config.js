import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  // Site language
  lang: 'en-US',
  base: '/',

  // Site title and description
  title: 'Data Warehousing Guide',
  description: 'Comprehensive guide to Data Warehousing and OLAP Systems',

  // Bundler configuration
  bundler: viteBundler(),

  // Theme configuration
  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png', // Update to your preferred logo

    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Theme 1', link: '/guide/introduction' },
      { text: 'Theme 2', link: '/theme2/multidimensional_models' },
      { text: 'Theme 3', link: '/theme3/kimball_method' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          collapsable: false,
          children: [
            '/guide/introduction.md',
            '/guide/data_warehousing.md',
            '/guide/olap_vs_oltp.md',
            '/guide/dimensional_modeling.md',
            '/guide/key_takeaways.md',
          ],
        },
      ],
      '/theme2/': [
        {
          text: 'Theme 2',
          collapsable: false,
          children: [
            '/theme2/multidimensional_models.md',
            '/theme2/schema_designs.md',
            '/theme2/data_warehouse_principles.md',
            '/theme2/olap_operations.md',
            '/theme2/bitmap_indexes.md',
          ],
        },
      ],
      '/theme3/': [
        {
          text: 'Theme 3: Dimensional Design',
          collapsable: false,
          children: [
            '/theme3/kimball_method.md',
            '/theme3/fact_tables_dimensions.md',
            '/theme3/special_cases.md',
            '/theme3/bus_architecture.md',
            '/theme3/scd_types.md',
            '/theme3/advanced_hierarchies.md',
            '/theme3/advanced_use_cases.md',
            '/theme3/case_studies.md',
          ],
        },
      ],
    },
  }),
})