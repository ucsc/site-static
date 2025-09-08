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
  title: 'Blocks/Card',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    header: { control: 'text', description: 'Headline text for the block' },
    description: { control: 'text', description: 'The text description of the story the card is teasing.' }
  },
};
const Template = (_a) => {
  var { label } = _a, args = __rest(_a, ["label"]);
  // You can either use a function to create DOM elements or use a plain html string!
  return `
    <trss-card header="${args.header}" image-url="${args.imageUrl}" image-alt="${args.imageAlt}">${args.description}</trss-card>
  `;
};
export const Card = Template.bind({});
Card.args = {
  header: 'Objectively innovate empowered manufactured products whereas parallel platforms',
  description: 'Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.',
  imageUrl: 'https://via.placeholder.com/480x150',
  imageAlt: 'Text description for the image'
};
//# sourceMappingURL=trss-card.stories.js.map
