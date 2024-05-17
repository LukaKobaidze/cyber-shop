export default function objectOmit(obj: Record<string, any>, omit: string) {
  const { [omit]: deleted, ...newObj } = obj;

  return newObj;
}
