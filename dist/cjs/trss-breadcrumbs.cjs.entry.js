'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5c8794aa.js');

const trssBreadcrumbsCss = ":host{display:block}.trss-breadcrumbs{display:block;margin-bottom:1rem;font-size:0.85rem}.trss-breadcrumbs ul,.trss-breadcrumbs ol{margin:0;padding:0;display:flex;justify-content:flex-start;list-style:none;gap:0.35rem}.trss-breadcrumbs ul li,.trss-breadcrumbs ol li{display:inline;list-style:none;font-weight:600;color:#555}.trss-breadcrumbs a{display:block;font-weight:normal}.trss-breadcrumbs a:after{content:\"/\";font-weight:800;color:#555;display:inline-block;margin-left:0.35rem}.trss-breadcrumbs a:focus:hover,.trss-breadcrumbs a:focus:active,.trss-breadcrumbs a:focus:focus,.trss-breadcrumbs a:hover:hover,.trss-breadcrumbs a:hover:active,.trss-breadcrumbs a:hover:focus,.trss-breadcrumbs a:active:hover,.trss-breadcrumbs a:active:active,.trss-breadcrumbs a:active:focus{color:#01589d;text-decoration:underline;text-decoration-color:#ffc500;text-decoration-skip-ink:auto;text-decoration-thickness:0.12em;text-underline-offset:0.2em;text-decoration-skip-ink:auto}";

const TrssBreadcrumbs = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.separator = '/';
  }
  render() {
    return (index.h(index.Host, { class: "trss-breadcrumbs" }, index.h("slot", null)));
  }
};
TrssBreadcrumbs.style = trssBreadcrumbsCss;

exports.trss_breadcrumbs = TrssBreadcrumbs;

//# sourceMappingURL=trss-breadcrumbs.cjs.entry.js.map