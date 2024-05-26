export default function containsOnlyNumbers(str: string) {
  return /^\d+$/.test(str);
}
