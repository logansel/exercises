import  {helloSailor} from "./index";

test("if helloSailor use console", ()=> {
  expect.assertions(1);

  const spy = jest.spyOn(console, "log")
  helloSailor("John")
  expect(spy).toHaveBeenCalled()
  helloSailor("")
  expect(spy).toHaveBeenCalledWith("Howdy Sailor! Good day to you!")
})
