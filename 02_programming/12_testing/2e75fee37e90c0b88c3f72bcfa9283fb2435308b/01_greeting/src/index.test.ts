import { greet } from "./index";

test("if called greet return 'hello WORLD!'", () => {
  expect(greet()).toBe("Hello WORLD!");
  expect(greet("Francis")).toBe("Hello FRANCIS!");

})