
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/coffees"
  },
  {
    "renderMode": 2,
    "route": "/product"
  },
  {
    "renderMode": 2,
    "route": "/article"
  },
  {
    "renderMode": 2,
    "route": "/recipes"
  },
  {
    "renderMode": 2,
    "route": "/login"
  }
],
  assets: {
    'index.csr.html': {size: 4919, hash: 'c4dbd5abcab2ac5b6a22ed74a34b08b806335844685e3d39a25526a23cf15c85', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1018, hash: '0143bd3f9e6596ccb426e13b761063e33065d397c3b67b9020eebbbd886007ba', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 13848, hash: '2f992d8726f0e7804db05c5f1bd140fd937a67ef48455f64197d7c7dbc46413c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'coffees/index.html': {size: 19731, hash: 'b2be5eb308cc5f6e7aa41c671ce5897cb5a7b2f8a79a1fd83209412afdde08cf', text: () => import('./assets-chunks/coffees_index_html.mjs').then(m => m.default)},
    'product/index.html': {size: 17873, hash: 'a9cf76cda1d2bf6221084140d2e2638c0d61763ac7fba1f12172864a784dabd3', text: () => import('./assets-chunks/product_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 16412, hash: '968f2f2fa0ed56fa743cd973a7474af94747bb10d33e1017ad2f9a28deb9b9ae', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'article/index.html': {size: 15201, hash: 'e49be44be6372b6798c8efb76aa0ef3f06f7f19fe08c1768c5fa26b5c33a0f01', text: () => import('./assets-chunks/article_index_html.mjs').then(m => m.default)},
    'recipes/index.html': {size: 15362, hash: '35aeacc91062bee28cc21e42870a22cf68e2600c8330781837beaa1fadfa9050', text: () => import('./assets-chunks/recipes_index_html.mjs').then(m => m.default)},
    'styles-PEKTXV37.css': {size: 231764, hash: 'xwu03csVHmA', text: () => import('./assets-chunks/styles-PEKTXV37_css.mjs').then(m => m.default)}
  },
};
