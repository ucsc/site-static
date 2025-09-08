'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5c8794aa.js');

/*
 Stencil Client Patch Esm v3.0.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["trss-breadcrumbs.cjs",[[4,"trss-breadcrumbs",{"separator":[1]}]]],["trss-card.cjs",[[4,"trss-card",{"imageUrl":[1,"image-url"],"imageAlt":[1,"image-alt"],"header":[1]}]]],["trss-carousel.cjs",[[0,"trss-carousel"]]],["trss-alert_7.cjs",[[2,"trss-ucsc-footer",{"year":[1]}],[6,"trss-ucsc-header",{"useLogo":[4,"use-logo"],"searchAction":[1,"search-action"],"searchQuery":[1,"search-query"]}],[4,"trss-alert",{"appearance":[1],"header":[1]}],[4,"trss-banner",{"appearance":[1],"header":[1]}],[4,"trss-data-list",{"source":[1],"limit":[2],"teaser":[4]}],[4,"trss-site-title",{"link":[1]}],[0,"trss-logo",{"display":[1],"withAnimation":[4,"with-animation"],"width":[513],"link":[1]}]]]], options);
  });
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map