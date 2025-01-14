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
    logo: 'https://media.licdn.com/dms/image/D4D12AQEL7hUrxwEUOA/article-cover_image-shrink_720_1280/0/1710092544422?e=2147483647&v=beta&t=Ata_sW9vOoE972j7aGA16IwnSLjWd8fRS36lqbdcLsI', // Update to your preferred logo

    // Navigation Bar
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Theme 1', link: '/guide/introduction' },
      { text: 'Theme 2', link: '/theme2/multidimensional_models' },
      { text: 'Theme 3', link: '/theme3/kimball_method' },
      { text: 'Theme 4', link: '/theme4/page1_overview' },
      // New Theme 5 for UI
      { text: 'Desarollo', link: '/desarollo/fundamentals_of_user_interfaces' },
    ],

    // Sidebar configuration
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
      '/theme4/': [
        {
          text: 'Theme 4: Data Integration',
          collapsable: false,
          children: [
            '/theme4/page1_overview.md',
            '/theme4/lexique.md',
          ],
        },
      ],
      // NEW: Theme 5 for User-Interface Development
      '/desarollo/': [
        {
          text: 'Theme 5: UI Development',
          collapsable: false,
          children: [
            // Adjust the filenames and order as needed
            '/desarollo/fundamentals_of_user_interfaces.md',
            '/desarollo/hci_devices_interaction_styles.md',
            '/desarollo/usability_in_user_interfaces.md',
            '/desarollo/requirements_analysis_user_centered_design.md',
            '/desarollo/activity_design_ui_development.md',
            '/desarollo/information_design_user_interfaces.md',
            '/desarollo/ui_tools_prototyping_techniques.md',
            '/desarollo/web_accessibility_internationalization.md',
            '/desarollo/internationalization_accessibility_web_interfaces.md',
            '/desarollo/usability_evaluation_methods.md',
          ],
        },
      ],
    },
  }),
})