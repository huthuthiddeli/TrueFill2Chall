
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
    "route": "/True-Fill2-Chall/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5429, hash: '8a57ba65d72fd1914993f759a6607f52bb37ebd70215f85e35d5731ae7d0931a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1055, hash: '6895862a97d45eeee4ea66afed549efabeaec946665041c2ef44ac4e9635ebf6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6946, hash: '69979279308f20aa2a86a6c35ee38f6cef622bff6ea83c22d1083019e44119af', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-22WW5YHL.css': {size: 11790, hash: 'fhEkokQneck', text: () => import('./assets-chunks/styles-22WW5YHL_css.mjs').then(m => m.default)}
  },
};
