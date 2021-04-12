function column(numberOfLines: number, lineContent: string): string {
  let str = "";

  for (let i = 1; i <= numberOfLines; i++) {
    str += `${lineContent}\n`;
  }
  return str;
}

export { column }