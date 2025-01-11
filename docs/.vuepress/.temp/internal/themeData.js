export const themeData = JSON.parse("{\"logo\":\"https://vuejs.org/images/logo.png\",\"navbar\":[{\"text\":\"Home\",\"link\":\"/\"},{\"text\":\"Theme 1\",\"link\":\"/guide/introduction\"},{\"text\":\"Theme 2\",\"link\":\"/theme2/multidimensional_models\"},{\"text\":\"Theme 3\",\"link\":\"/theme3/kimball_method\"}],\"sidebar\":{\"/guide/\":[{\"text\":\"Guide\",\"collapsable\":false,\"children\":[\"/guide/introduction.md\",\"/guide/data_warehousing.md\",\"/guide/olap_vs_oltp.md\",\"/guide/dimensional_modeling.md\",\"/guide/key_takeaways.md\"]}],\"/theme2/\":[{\"text\":\"Theme 2\",\"collapsable\":false,\"children\":[\"/theme2/multidimensional_models.md\",\"/theme2/schema_designs.md\",\"/theme2/data_warehouse_principles.md\",\"/theme2/olap_operations.md\",\"/theme2/bitmap_indexes.md\"]}],\"/theme3/\":[{\"text\":\"Theme 3: Dimensional Design\",\"collapsable\":false,\"children\":[\"/theme3/kimball_method.md\",\"/theme3/fact_tables_dimensions.md\",\"/theme3/special_cases.md\",\"/theme3/bus_architecture.md\",\"/theme3/scd_types.md\",\"/theme3/advanced_hierarchies.md\",\"/theme3/advanced_use_cases.md\",\"/theme3/case_studies.md\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
