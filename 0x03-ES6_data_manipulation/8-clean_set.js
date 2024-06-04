export default function cleanSet(set, startString) {
  const strs = [];

  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  set.forEach((str) => {
    const match = str.match(new RegExp(`^${startString}(\\w+)$`));
    if (match) {
      strs.push(match[1]);
    }
  });

  return strs.join('-');
}
