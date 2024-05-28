export default function hyphenCaseToTitleCase(hyphenCase: string) {
  const words = hyphenCase.split("-");

  return words
    .filter(word => word.length > 0)  // Filter out empty strings
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
