
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://huthuthiddeli.github.io/True-Fill2-Chall/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/True-Fill2-Chall"
  },
  {
    "renderMode": 2,
    "route": "/True-Fill2-Chall/more-information"
  },
  {
    "renderMode": 2,
    "route": "/True-Fill2-Chall/not-found"
  },
  {
    "renderMode": 2,
    "redirectTo": "/True-Fill2-Chall/not-found",
    "route": "/True-Fill2-Chall/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5597, hash: '2f3d80c2dbed787b6178b1e5ff2830d9767cf4f24f246a0cd2e1dba47c26d61c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1055, hash: '11e00b8a526e98c40610455d9174df9c0ecde198690c8e95397816f3d0966738', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'not-found/index.html': {size: 10212, hash: '90823c05ddd75bec64be0e957e9d7f8f6e45067294fec1e6e4e1772bec6a2dba', text: () => import('./assets-chunks/not-found_index_html.mjs').then(m => m.default)},
    'index.html': {size: 12701, hash: '44f23117c1b428f6f28ad5feecb531735291d02572e4ab207c46395a9c2aa0aa', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'more-information/index.html': {size: 8173, hash: '18465c22f38ce79ea0ee50029b20cb95d48c30e7c464e1873599eb4582c09d3a', text: () => import('./assets-chunks/more-information_index_html.mjs').then(m => m.default)},
    'styles-RRBI5E26.css': {size: 13829, hash: 'V2qVz8DoLto', text: () => import('./assets-chunks/styles-RRBI5E26_css.mjs').then(m => m.default)}
  },
};
