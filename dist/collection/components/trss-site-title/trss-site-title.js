import { h } from '@stencil/core';
export class TrssSiteTitle {
  constructor() {
    this.link = undefined;
  }
  render() {
    return (h("div", { class: "trss-row__full" }, h("div", { class: "site-title trss-row__inner" }, h("p", null, h("a", { href: this.link }, h("slot", null))))));
  }
  static get is() { return "trss-site-title"; }
  static get originalStyleUrls() {
    return {
      "$": ["trss-site-title.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["trss-site-title.css"]
    };
  }
  static get properties() {
    return {
      "link": {
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
          "text": "Sets the URL for the title link."
        },
        "attribute": "link",
        "reflect": false
      }
    };
  }
}
//# sourceMappingURL=trss-site-title.js.map
