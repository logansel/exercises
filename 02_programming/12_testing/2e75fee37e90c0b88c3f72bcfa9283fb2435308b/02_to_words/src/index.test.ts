import { toWords } from "./index";

test("when i call .split, return an", () => {
  expect(toWords("je suis un chat")).toMatchObject([ 'je', 'suis', 'un', 'chat' ]);
});

