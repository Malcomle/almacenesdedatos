export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/malcommorel/Documents/sources/almacenesdedatos/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/malcommorel/Documents/sources/almacenesdedatos/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/test.html", { loader: () => import(/* webpackChunkName: "test.html" */"/Users/malcommorel/Documents/sources/almacenesdedatos/docs/.vuepress/.temp/pages/test.html.js"), meta: {"title":"À propos"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/malcommorel/Documents/sources/almacenesdedatos/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
