import { Host, h } from '@stencil/core';
export class TrssBreadcrumbs {
  constructor() {
    this.separator = '/';
  }
  render() {
    return (h(Host, { class: "trss-breadcrumbs" }, h("slot", null)));
  }
  static get is() { return "trss-breadcrumbs"; }
  static get originalStyleUrls() {
    return {
      "$": ["trss-breadcrumbs.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["trss-breadcrumbs.css"]
    };
  }
  static get properties() {
    return {
      "separator": {
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
          "text": "The visual separator between links."
        },
        "attribute": "separator",
        "reflect": false,
        "defaultValue": "'/'"
      }
    };
  }
}
//# sourceMappingURL=trss-breadcrumbs.js.map
