import comp from "/Users/malcommorel/Documents/sources/almacenesdedatos/docs/.vuepress/.temp/pages/test.html.vue"
const data = JSON.parse("{\"path\":\"/test.html\",\"title\":\"À propos\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"À propos\",\"description\":\"En savoir plus sur notre projet\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"test.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
