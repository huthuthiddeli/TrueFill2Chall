
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/TrueFill2Chall/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/TrueFill2Chall"
  },
  {
    "renderMode": 2,
    "route": "/TrueFill2Chall/more-information"
  },
  {
    "renderMode": 2,
    "route": "/TrueFill2Chall/not-found"
  },
  {
    "renderMode": 2,
    "redirectTo": "/TrueFill2Chall/not-found",
    "route": "/TrueFill2Chall/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5564, hash: '3b0e505513e82a34a2905c1281acd8e23d354a9f15837c48d1f991c689dfb014', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1022, hash: '8f61b891a24e4a0438a40ef8a2c5aa2e74d4b7daaafa07e9014ca347d7a9704f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'more-information/index.html': {size: 12668, hash: '299934fdb88d23870b63ca71bfff3e10fc2a6363be132de880ccef16372b0079', text: () => import('./assets-chunks/more-information_index_html.mjs').then(m => m.default)},
    'not-found/index.html': {size: 12668, hash: '299934fdb88d23870b63ca71bfff3e10fc2a6363be132de880ccef16372b0079', text: () => import('./assets-chunks/not-found_index_html.mjs').then(m => m.default)},
    'index.html': {size: 12668, hash: '299934fdb88d23870b63ca71bfff3e10fc2a6363be132de880ccef16372b0079', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-RRBI5E26.css': {size: 13829, hash: 'V2qVz8DoLto', text: () => import('./assets-chunks/styles-RRBI5E26_css.mjs').then(m => m.default)}
  },
};
