export default function cleanSet(set, startString) {
  const strs = [];

  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  set.forEach((str) => {
    let match = '';
    if (typeof str === 'string') {
      match = str.match(new RegExp(`^${startString}(\\w+)$`));
    }
    if (match && match[1] !== str) {
      strs.push(match[1]);
    }
  });

  return strs.join('-');
}
