var __rest = (this && this.__rest) || function (s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
import readme from './readme.md';
export default {
  title: 'List/Data List',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    source: { control: 'text', description: 'URL for the data this component will display' },
    limit: { control: 'number', description: 'Number of items to show' },
    slot: { control: 'text', description: 'The HTML content shown above the list.' },
  },
};
const Template = (_a) => {
  var { label } = _a, args = __rest(_a, ["label"]);
  // You can either use a function to create DOM elements or use a plain html string!
  return `
    <trss-data-list source="${args.source}" limit="${args.limit}">
      ${args.slot}
    </trss-data-list>
  `;
};
export const DataList = Template.bind({});
DataList.args = {
  source: 'https://news.ucsc.edu/feeds/latest.json',
  limit: 10,
  slot: '<h2>Objectively innovate empowered manufactured products whereas parallel platforms</h2><p>Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.</p>',
};
//# sourceMappingURL=trss-data-list.stories.js.map
