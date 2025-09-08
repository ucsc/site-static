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
  title: 'Banners/Site Title',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    link: { control: 'text', description: 'URL target for the link' },
    text: { control: 'text', description: 'Latin American &amp; Latino Studies' }
  },
};
const Template = (_a) => {
  var { label } = _a, args = __rest(_a, ["label"]);
  // You can either use a function to create DOM elements or use a plain html string!
  return `<trss-site-title link="${args.link}">${args.text}</trss-site-title>`;
};
export const SiteTitle = Template.bind({});
SiteTitle.args = {
  link: 'https://news.ucsc.edu',
  text: 'Campus News',
};
//# sourceMappingURL=trss-site-title.stories.js.map
