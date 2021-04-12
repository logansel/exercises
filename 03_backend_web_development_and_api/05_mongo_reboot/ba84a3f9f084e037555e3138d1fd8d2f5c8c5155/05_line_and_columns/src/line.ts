function line(numberOfStars: number): string {
  let str = "";

  for(let i =1; i<= numberOfStars; i++){
   str += "*"
  }
  return str
}

export { line }