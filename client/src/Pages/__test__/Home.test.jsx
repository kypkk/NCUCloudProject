import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../Home";

describe("Home Page", () => {
  it("should render Home Page correctly", () => {
    const { getByText, getByAltText } = render(<Home />);

    // Check if the component renders your expected text content
    const titleElement = getByText("BEKADEI");
    const buttonText1 = getByText("縮短網址");
    const buttonText2 = getByText("QrCode");
    // Check if the component renders the image with the alt attribute
    const mainImage = screen.getAllByRole("img");

    expect(titleElement).toBeInTheDocument();
    expect(buttonText1).toBeInTheDocument();
    expect(buttonText2).toBeInTheDocument();
    expect(mainImage[0].alt).toContain("Image Medium");
    expect(mainImage[1].alt).toContain("Image Large");
  });
});
