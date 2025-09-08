'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5c8794aa.js');

/*
 Stencil Client Patch Browser v3.0.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('ucsc-trss.cjs.js', document.baseURI).href));
    const opts = {};
    // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
        // TODO(STENCIL-661): Remove code related to the dynamic import shim
        // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["trss-breadcrumbs.cjs",[[4,"trss-breadcrumbs",{"separator":[1]}]]],["trss-card.cjs",[[4,"trss-card",{"imageUrl":[1,"image-url"],"imageAlt":[1,"image-alt"],"header":[1]}]]],["trss-carousel.cjs",[[0,"trss-carousel"]]],["trss-alert_7.cjs",[[2,"trss-ucsc-footer",{"year":[1]}],[6,"trss-ucsc-header",{"useLogo":[4,"use-logo"],"searchAction":[1,"search-action"],"searchQuery":[1,"search-query"]}],[4,"trss-alert",{"appearance":[1],"header":[1]}],[4,"trss-banner",{"appearance":[1],"header":[1]}],[4,"trss-data-list",{"source":[1],"limit":[2],"teaser":[4]}],[4,"trss-site-title",{"link":[1]}],[0,"trss-logo",{"display":[1],"withAnimation":[4,"with-animation"],"width":[513],"link":[1]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=ucsc-trss.cjs.js.map