import { rl } from "../interface";

function ask(question: string, reader = rl): Promise<string> {
  return new Promise((resolve, reject) => {
    reader.question("Enter something", (input: string) => {
      if (input !== "") {
        resolve("user input");
      } else {
        reject(new Error("Invalid input"));
      }
    });
  });
}

// Leave line below for tests to work properly
export default ask;
