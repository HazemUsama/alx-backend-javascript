export default function cleanSet(set, startString) {
  const strs = [];

  if (startString === '') {
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
