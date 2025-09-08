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
  title: 'Global/UCSC Nav Bar',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    search: { control: 'text', description: 'Location where the search form will go' },
    logo: { control: 'boolean', description: 'Add UCSC logo to left side' }
  },
};
const Template = (_a) => {
  var { label } = _a, args = __rest(_a, ["label"]);
  // You can either use a function to create DOM elements or use a plain html string!
  return `<trss-ucsc-navbar use-logo="${args.logo}" search="${args.search}"/>`;
};
export const UCSCNavBar = Template.bind({});
UCSCNavBar.args = {
  search: 'https://news.ucsc.edu',
  logo: true
};
//# sourceMappingURL=trss-ucsc-header.stories.js.map
