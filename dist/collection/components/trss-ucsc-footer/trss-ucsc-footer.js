import { h } from '@stencil/core';
export class TrssUcscFooter {
  constructor() {
    this.year = new Date().getFullYear().toString();
  }
  render() {
    return (h("div", { class: "trss-ucsc-footer__outer" }, h("div", { class: "trss-ucsc-footer", role: "contentinfo" }, h("div", { class: "trss-ucsc-footer__inner" }, h("div", { class: "trss-ucsc-footer__inner-left" }, h("trss-logo", { width: "180", display: 'light', "with-animation": true })), h("div", { class: "trss-ucsc-footer__inner-right" }, h("ul", null, h("li", null, h("a", { href: "https://ada.ucsc.edu/report-accessibility-barrier/" }, "Report an accessibility barrier")), h("li", null, h("a", { href: "https://www.ucsc.edu/land-acknowledgment" }, "Land Acknowledgment")), h("li", null, h("a", { href: "https://jobs.ucsc.edu" }, "Employment")), h("li", null, h("a", { href: "https://its.ucsc.edu/terms/" }, "Privacy")), h("li", null, h("a", { href: "https://academicaffairs.ucsc.edu/accreditation/" }, "Accreditation")), h("li", null, "\u00A9", this.year, " UC Regents")))))));
  }
  static get is() { return "trss-ucsc-footer"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["trss-ucsc-footer.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["trss-ucsc-footer.css"]
    };
  }
  static get assetsDirs() { return ["assets"]; }
  static get properties() {
    return {
      "year": {
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
          "text": "The numeric year we use for the copyright."
        },
        "attribute": "year",
        "reflect": false,
        "defaultValue": "new Date().getFullYear().toString()"
      }
    };
  }
}
//# sourceMappingURL=trss-ucsc-footer.js.map
