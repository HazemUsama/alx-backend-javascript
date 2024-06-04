export default function cleanSet(set, startString) {
  const strs = [];

  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  set.forEach((str) => {
    if (typeof str === 'string' && str.startsWith(startString)) {
      const subStr = str.substring(startString.length);

      if (subStr && subStr !== str) {
        strs.push(subStr);
      }
    }
  });

  return strs.join('-');
}
