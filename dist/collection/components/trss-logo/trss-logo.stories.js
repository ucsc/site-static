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
  title: 'Global/Logo',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    display: {
      control: { type: 'select' },
      options: ['dark', 'light'],
      description: 'Whether or not to display the logo in blue or white.',
      defaultValue: { summary: 'dark' }
    },
    width: { control: 'text', description: 'How wide the logo should appear. Height is calculated automatically' },
    link: { control: 'text', description: 'Where the logo should link to. Default is https://www.ucsc.edu' }
  },
};
const Template = (_a) => {
  var { label } = _a, args = __rest(_a, ["label"]);
  // You can either use a function to create DOM elements or use a plain html string!
  return `
    <trss-logo width=${args.width} display=${args.display} link=${args.link} />
  `;
};
export const Logo = Template.bind({});
Logo.args = {
  display: 'dark',
  width: '320',
  link: 'https://www.ucsc.edu'
};
//# sourceMappingURL=trss-logo.stories.js.map
