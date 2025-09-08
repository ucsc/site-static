import { h } from '@stencil/core';
export class TrssAlert {
  constructor() {
    this.appearance = 'notice';
    this.header = undefined;
  }
  /**
   * @slot header - Header content for the alert.
   * @slot description - Text content for alert.
   */
  getAppearance() {
    return 'trss-alert trss-alert--' + this.appearance;
  }
  render() {
    return (h("div", { class: this.appearance ? this.getAppearance() : 'trss-alert trss-alert--notice', role: "complementary" }, h("div", { class: "trss-row__inner" }, h("h3", { class: "header" }, h("slot", { name: "header" })), h("div", { class: "description" }, h("slot", { name: "description" })))));
  }
  static get is() { return "trss-alert"; }
  static get originalStyleUrls() {
    return {
      "$": ["trss-alert.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["trss-alert.css"]
    };
  }
  static get properties() {
    return {
      "appearance": {
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
          "text": "This sets the color scheme for the alert."
        },
        "attribute": "appearance",
        "reflect": false,
        "defaultValue": "'notice'"
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
          "text": "The text for the headline of the alert."
        },
        "attribute": "header",
        "reflect": false
      }
    };
  }
}
//# sourceMappingURL=trss-alert.js.map
