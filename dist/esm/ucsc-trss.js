import { p as promiseResolve, b as bootstrapLazy } from './index-1a8edb17.js';
export { s as setNonce } from './index-1a8edb17.js';

/*
 Stencil Client Patch Browser v3.0.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
        // TODO(STENCIL-661): Remove code related to the dynamic import shim
        // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["trss-breadcrumbs",[[4,"trss-breadcrumbs",{"separator":[1]}]]],["trss-card",[[4,"trss-card",{"imageUrl":[1,"image-url"],"imageAlt":[1,"image-alt"],"header":[1]}]]],["trss-carousel",[[0,"trss-carousel"]]],["trss-alert_7",[[2,"trss-ucsc-footer",{"year":[1]}],[6,"trss-ucsc-header",{"useLogo":[4,"use-logo"],"searchAction":[1,"search-action"],"searchQuery":[1,"search-query"]}],[4,"trss-alert",{"appearance":[1],"header":[1]}],[4,"trss-banner",{"appearance":[1],"header":[1]}],[4,"trss-data-list",{"source":[1],"limit":[2],"teaser":[4]}],[4,"trss-site-title",{"link":[1]}],[0,"trss-logo",{"display":[1],"withAnimation":[4,"with-animation"],"width":[513],"link":[1]}]]]], options);
});

//# sourceMappingURL=ucsc-trss.js.map