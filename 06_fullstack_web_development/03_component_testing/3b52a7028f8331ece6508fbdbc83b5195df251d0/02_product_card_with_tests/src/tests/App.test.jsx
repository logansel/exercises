import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { App } from "../App";
import CardHeader from "../components/product-card/header";

describe("App component", () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(() => {
    cleanup();
  });

  test("renders at least a button", () => {
    expect.assertions(1);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
});

describe("CardHeader component", () => {
  beforeEach(() => {
    render(<CardHeader />);
  });

  afterEach(() => {
    cleanup();
  });

  it("should be able to find a paragrah", () => {
    const { getByTestId } = render(<CardHeader />);
    expect(getByTestId("dispoPP")).toHaveTextContent("The Legend Of Zelda: Breath of the Wild");
  });
});
