export default function hyphenCaseToTitleCase(hyphenCase: string) {
  const words = hyphenCase.split("-");

  return words.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
}
