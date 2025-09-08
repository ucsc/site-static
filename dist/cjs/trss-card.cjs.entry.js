'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5c8794aa.js');

const trssCardCss = ":host{display:block}.block-title{margin:0.5em 0 0.75rem}";

const TrssCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.imageUrl = undefined;
    this.imageAlt = undefined;
    this.header = undefined;
  }
  render() {
    return (index.h("div", { class: "block" }, index.h("div", { class: "block-media" }, index.h("img", { alt: this.imageAlt, class: "block-image", src: this.imageUrl })), index.h("div", { class: "block-body" }, index.h("h3", { class: "block-title" }, this.header), index.h("p", { class: "block-description" }, index.h("slot", null)))));
  }
};
TrssCard.style = trssCardCss;

exports.trss_card = TrssCard;

//# sourceMappingURL=trss-card.cjs.entry.js.map