export function rectangle(width: number, height: number): string {
  
  let str = "";
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++){
      str +="*"
    } str += "\n"
  }
  return str
}