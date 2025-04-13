
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://huthuthiddeli.github.io/TrueFill2Chall/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/TrueFill2Chall"
  },
  {
    "renderMode": 2,
    "route": "/TrueFill2Chall/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5427, hash: 'a5b34eb341e6b086d44c839064cac1c903f50d946b0232c541ee25cc04b5777e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1053, hash: 'b585be333de3a4e81412e7dd99daa59376da5c2ba48e72958fb60d3944c78c56', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6944, hash: '6682d0cf32ce95185d7eb3f49057d3fa350359cf529ee3b78a18ccfa29fb1698', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-22WW5YHL.css': {size: 11790, hash: 'fhEkokQneck', text: () => import('./assets-chunks/styles-22WW5YHL_css.mjs').then(m => m.default)}
  },
};
