import { Host, h } from '@stencil/core';
import { friendly_date } from '../../utils/utils';
export class TrssDataList {
  constructor() {
    this.listData = { items: [] };
    this.source = undefined;
    this.limit = 5;
    this.teaser = false;
  }
  /**
   * @slot default - Content that appears above the list. We recommend a header and description.
   */
  render() {
    return (h(Host, { class: "trss-data-list" }, h("slot", null), h("ul", null, this.listData.items.slice(0, this.limit).map((item = {}) => (h("li", null, h("h3", { class: "header" }, h("a", { href: item.url }, this.getEncodedText(item.title))), h("span", { class: "meta" }, friendly_date(item.date_published)), item.summary && this.teaser ? h("p", { class: "description" }, this.getEncodedText(item.summary)) : ''))))));
  }
  async componentWillRender() {
    if (!sessionStorage.getItem('trssFetchedData') || sessionStorage.getItem('trssFetchedData') === '{}') {
      let getApi = await fetch(this.source, { method: 'GET', headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } });
      sessionStorage.setItem('trssFetchedData', JSON.stringify(await getApi.json()));
      this.listData = JSON.parse(sessionStorage.getItem('trssFetchedData'));
    }
    else {
      this.listData = JSON.parse(sessionStorage.getItem('trssFetchedData'));
    }
  }
  getEncodedText(text) {
    var textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    const regex = /<script[\d\D]*?>[\d\D]*?<\/script>/gm;
    const result = textArea.value.replace(regex, '');
    return result;
  }
  static get is() { return "trss-data-list"; }
  static get originalStyleUrls() {
    return {
      "$": ["trss-data-list.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["trss-data-list.css"]
    };
  }
  static get properties() {
    return {
      "source": {
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
          "text": "The JSON source for the content list in this component."
        },
        "attribute": "source",
        "reflect": false
      },
      "limit": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Limit the number of items displayed."
        },
        "attribute": "limit",
        "reflect": false,
        "defaultValue": "5"
      },
      "teaser": {
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
          "text": "Whether or not to display the teaser text."
        },
        "attribute": "teaser",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
//# sourceMappingURL=trss-data-list.js.map
