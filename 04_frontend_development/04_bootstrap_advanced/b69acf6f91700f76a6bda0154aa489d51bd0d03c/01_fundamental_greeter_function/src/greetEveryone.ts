type ParamRest = string[];

export function greetEveryone(...rest: ParamRest): void {
  rest.forEach((element) => {
    console.log("Welcome to", element);
  });
}
