export const weakMap = new WeakMap();

export function queryAPI(endPoint) {
  if (weakMap.has(endPoint)) {
    const val = weakMap.get(endPoint) + 1;
    weakMap.set(endPoint, val);
    if (val >= 5) {
      throw new Error('Endpoint load is high');
    }
  } else {
    weakMap.set(endPoint, 1);
  }
}
