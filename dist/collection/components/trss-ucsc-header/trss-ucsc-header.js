import { h } from '@stencil/core';
export class TrssUcscHeader {
  constructor() {
    this.useLogo = undefined;
    this.searchAction = undefined;
    this.searchQuery = undefined;
  }
  parentClasses() {
    return 'has-logo trss-row__inner';
  }
  render() {
    return (h("div", { class: "trss-row__full trss-ucsc-header" }, h("slot", null), h("div", { class: this.useLogo ? this.parentClasses() : 'trss-row__inner' }, this.useLogo ? (h("div", { class: "trss-ucsc-header__left" }, h("trss-logo", { width: "180", display: 'light', "with-animation": true }))) : null, h("div", { class: "trss-ucsc-header__right", id: "trss-ucsc-header__show" }, h("ul", { class: "trss-ucsc-header__navigation" }, h("li", null, h("a", { href: "https://my.ucsc.edu", title: "The student portal" }, "MyUCSC")), h("li", null, h("a", { href: "https://www.ucsc.edu/people/", title: "Campus directory" }, "People")), h("li", null, h("a", { href: "https://www.ucsc.edu/calendars/", title: "Upcoming events, academic, and administrative calendars" }, "Calendars")), h("li", null, h("a", { href: "https://www.ucsc.edu/campus/visit/maps-directions/" }, "Maps")), h("li", null, h("a", { href: "https://www.ucsc.edu/azindex/", title: "A to Z index of UCSC websites" }, "A-Z Index"))), h("div", { class: "trss-ucsc-header__search", role: "search" }, h("form", { role: "search", method: "get", action: this.searchAction, id: "cse-search-box" }, h("div", null, h("label", { class: "trss-hide", htmlFor: this.searchQuery }, "Search"), h("input", { class: "query", id: this.searchQuery, name: this.searchQuery, placeholder: "Search", type: "text", value: "" }), h("input", { type: "submit", value: "Search" }))))))));
  }
  static get is() { return "trss-ucsc-header"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["trss-ucsc-header.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["trss-ucsc-header.css"]
    };
  }
  static get properties() {
    return {
      "useLogo": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Whether or not to display the UCSC logo"
        },
        "attribute": "use-logo",
        "reflect": false
      },
      "searchAction": {
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
          "text": "The URL for the search form action attribute"
        },
        "attribute": "search-action",
        "reflect": false
      },
      "searchQuery": {
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
          "text": "The query parameter for the search string"
        },
        "attribute": "search-query",
        "reflect": false
      }
    };
  }
}
//# sourceMappingURL=trss-ucsc-header.js.map
