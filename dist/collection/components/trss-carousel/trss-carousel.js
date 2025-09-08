import { Host, h } from '@stencil/core';
export class TrssCarousel {
  render() {
    return (h(Host, null, h("section", { "aria-label": "Header" }, h("div", { class: "trss-carousel" }, h("button", { class: "trss-hero-button prev" }, "\u2190"), h("button", { class: "trss-hero-button next" }, "\u2192"), h("ul", null, h("li", { class: "frame" }, h("img", { src: "https://source.unsplash.com/5SPIwSCxOGI/", alt: "Camera" })), h("li", { class: "frame" }, h("img", { src: "https://source.unsplash.com/Q1PcwcvuFa0/", alt: "Camera" })), h("li", { class: "frame" }, h("img", { src: "https://source.unsplash.com/-bX6sdYw48s/", alt: "Camera" })))))));
  }
  static get is() { return "trss-carousel"; }
  static get originalStyleUrls() {
    return {
      "$": ["trss-carousel.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["trss-carousel.css"]
    };
  }
}
//# sourceMappingURL=trss-carousel.js.map
