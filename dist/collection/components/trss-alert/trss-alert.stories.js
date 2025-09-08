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
  title: 'Banners/Alert',
  parameters: {
    markdown: readme,
    notes: readme
  },
  argTypes: {
    appearance: {
      control: { type: 'select' },
      options: ['notice', 'clear', 'warning', 'emergency'],
      description: 'This sets the color scheme of the alert ribbon.',
      defaultValue: { summary: 'notice' }
    },
    header: { control: 'text', description: 'The header text for the alert ribbon.' },
    description: { control: 'text', description: 'The text description of the alert ribbon.' }
  },
};
const Template = (_a) => {
  var { label } = _a, args = __rest(_a, ["label"]);
  return `<trss-alert appearance="${args.appearance}"><div slot="header">${args.header}</div> <div slot="description">${args.description}</div></trss-alert>`;
};
export const Alert = Template.bind({});
Alert.args = {
  appearance: 'notice',
  header: 'Headline for the NOTICE appearance',
  description: 'Indoor face covering requirements remain in effect.&nbsp;<a href="https://slugstrong.ucsc.edu">Stay informed</a>.'
};
//# sourceMappingURL=trss-alert.stories.js.map
