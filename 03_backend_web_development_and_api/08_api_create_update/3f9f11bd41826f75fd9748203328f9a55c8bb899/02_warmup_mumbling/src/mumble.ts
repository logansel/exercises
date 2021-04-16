const mumble = (sentence: string): string => {
  const lowercaseSeparate = sentence.toLowerCase().split("");
  const duplicate = lowercaseSeparate.map((element, index) => {
    return element.repeat(index + 1);
  });
  return duplicate.join("-");
};
export { mumble };
