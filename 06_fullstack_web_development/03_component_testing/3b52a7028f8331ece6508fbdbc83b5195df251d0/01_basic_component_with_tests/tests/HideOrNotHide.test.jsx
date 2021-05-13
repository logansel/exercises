import { openBrowser, goto, closeBrowser, text, click } from "taiko";
import "regenerator-runtime/runtime";

describe("Test page", () => {
  jest.setTimeout(20000);

  beforeAll(async () => {
    await openBrowser({ args: ["--window-size=1440,1000"], headless: false });
    await goto("http://localhost:8080");
  });

  afterAll(async () => {
    await closeBrowser();
  });

  // vérifier que lors du lancement de la page, le paragraphe "Ceci est mon texte" est présent
  test("Launch the browser, go to the app URL and search a text 'This is my text'", async () => {
    expect.assertions(1);

    await text("This is my text");
    expect(await text("This is my text").exists()).toBe(true);
  });

  // cliquez sur le bouton "Hide content"
  test("click on the 'Hide content' button", async () => {
    expect.assertions(1);

    await click("Hide content");
    expect(await text("Hide content").exists()).toBe(false);
  });

  // vérifier que le paragraphe n'est plus là
  test("check that the paragraph is no longer there", async () => {
    expect.assertions(1);

    expect(await text("This is my text").exists()).toBe(false);
  });

  // cliquez à nouveau sur le bouton
  test("click on the 'Reveal content' button", async () => {
    expect.assertions(1);

    await click("Reveal content");
    expect(await text("Reveal content").exists()).toBe(false);
  });

  // vérifier que le paragraphe est à nouveau là
  test("check that the paragraph is  there", async () => {
    expect.assertions(1);

    expect(await text("This is my text").exists()).toBe(true);
  });
});
