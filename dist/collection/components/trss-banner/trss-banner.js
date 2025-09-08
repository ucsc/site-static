import { h } from '@stencil/core';
export class TrssBanner {
  constructor() {
    this.appearance = 'blue';
    this.header = undefined;
  }
  /**
   * @slot header - Header content for the alert.
   * @slot description - Text content for alert.
   */
  getAppearance() {
    return 'trss-banner trss-banner--' + this.appearance;
  }
  render() {
    const here = window.location.hostname;
    const sites = ["aarcc.ucsc.edu", "airc.ucsc.edu", "aapirc.ucsc.edu", "basicneeds.ucsc.edu", "baytreeconference.ucsc.edu", "elcentro.ucsc.edu", "collegenine.ucsc.edu", "conflictresolution.ucsc.edu", "caps.ucsc.edu", "cowell.ucsc.edu", "deanofstudents.ucsc.edu", "drc.ucsc.edu", "studentsuccess.ucsc.edu", "childcare.ucsc.edu", "eop.ucsc.edu", "firstgen.ucsc.edu", "hsi.ucsc.edu", "johnrlewis.ucsc.edu", "kresge.ucsc.edu", "kresgeproject.ucsc.edu", "lss.ucsc.edu", "queer.ucsc.edu", "merrill.ucsc.edu", "oakes.ucsc.edu", "oakescara.ucsc.edu", "pocsc.ucsc.edu", "porter.ucsc.edu", "practicalactivism.ucsc.edu", "rachelcarson.ucsc.edu", "reporthate.ucsc.edu", "respondent.ucsc.edu", "families.ucsc.edu", "someca.ucsc.edu", "stars.ucsc.edu", "stevenson.ucsc.edu", "sfac.ucsc.edu", "healthcenter.ucsc.edu", "studenthealth.ucsc.edu", "shop.ucsc.edu", "soar.ucsc.edu", "volunteer.ucsc.edu", "caps.ucsc.edu", "care.ucsc.edu", "careers.ucsc.edu", "catering.ucsc.edu", "ches.ucsc.edu", "conferenceservices.ucsc.edu", "dining.ucsc.edu", "nutrition.sa.ucsc.edu", "orientation.ucsc.edu", "renaissancescholars.ucsc.edu", "resourcecenters.ucsc.edu", "housing.ucsc.edu", "womenscenter.ucsc.edu", "undergroundscholars.ucsc.edu", "ucenter.ucsc.edu", "weareslugs.ucsc.edu"];
    return (h("div", { class: this.appearance ? this.getAppearance() : 'trss-banner trss-banner--blue', "aria-hidden": sites.includes(here) ? 'false' : 'true', role: "complementary" }, h("div", { class: "trss-row__inner" }, h("slot", { name: "header" }), h("slot", { name: "description" }))));
  }
  static get is() { return "trss-banner"; }
  static get originalStyleUrls() {
    return {
      "$": ["trss-banner.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["trss-banner.css"]
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
        "defaultValue": "'blue'"
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
//# sourceMappingURL=trss-banner.js.map
