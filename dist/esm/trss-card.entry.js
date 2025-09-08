import { r as registerInstance, h } from './index-1a8edb17.js';

const trssCardCss = ":host{display:block}.block-title{margin:0.5em 0 0.75rem}";

const TrssCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.imageUrl = undefined;
    this.imageAlt = undefined;
    this.header = undefined;
  }
  render() {
    return (h("div", { class: "block" }, h("div", { class: "block-media" }, h("img", { alt: this.imageAlt, class: "block-image", src: this.imageUrl })), h("div", { class: "block-body" }, h("h3", { class: "block-title" }, this.header), h("p", { class: "block-description" }, h("slot", null)))));
  }
};
TrssCard.style = trssCardCss;

export { TrssCard as trss_card };

//# sourceMappingURL=trss-card.entry.js.map