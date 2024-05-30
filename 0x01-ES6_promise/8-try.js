export default function divideFunction(numerator, denominator) {
  try {
    return int (numerator / denominator);
  } catch {
    throw Error('cannot divide by 0');
  }
}
