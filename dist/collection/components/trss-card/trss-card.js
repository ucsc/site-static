import { h } from '@stencil/core';
export class TrssCard {
  constructor() {
    this.imageUrl = undefined;
    this.imageAlt = undefined;
    this.header = undefined;
  }
  render() {
    return (h("div", { class: "block" }, h("div", { class: "block-media" }, h("img", { alt: this.imageAlt, class: "block-image", src: this.imageUrl })), h("div", { class: "block-body" }, h("h3", { class: "block-title" }, this.header), h("p", { class: "block-description" }, h("slot", null)))));
  }
  static get is() { return "trss-card"; }
  static get originalStyleUrls() {
    return {
      "$": ["trss-card.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["trss-card.css"]
    };
  }
  static get properties() {
    return {
      "imageUrl": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The image included in the card."
        },
        "attribute": "image-url",
        "reflect": false
      },
      "imageAlt": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The alternative text for the card image."
        },
        "attribute": "image-alt",
        "reflect": false
      },
      "header": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The text for the headline of the card."
        },
        "attribute": "header",
        "reflect": false
      }
    };
  }
}
//# sourceMappingURL=trss-card.js.map
