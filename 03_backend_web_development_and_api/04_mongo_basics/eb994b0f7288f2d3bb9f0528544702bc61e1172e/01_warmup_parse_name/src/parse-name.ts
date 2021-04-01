type Person = {
  firstName: string;
  lastName: string;
}

export function parseName(name: string): Person {
  const arrayName = name.split(" ")
  return {
    firstName: arrayName[0],
    lastName: arrayName[1]
  };
}
