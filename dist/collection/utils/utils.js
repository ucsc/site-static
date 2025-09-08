export function friendly_date(date) {
  let dateObj = new Date(Date.parse(date));
  return dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}
//# sourceMappingURL=utils.js.map
