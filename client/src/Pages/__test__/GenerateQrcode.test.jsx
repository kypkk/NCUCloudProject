import React from "react";
import { render } from "@testing-library/react";
import GenerateQrcode from "../GenerateQrcode";

describe("Custom component", () => {
  it("renders the component without errors", () => {
    // Create mock props for the component
    const url = "https://example.com";
    //const seturl = jest.fn(); // Create a mock function for seturl

    // Render the Shortenurl component with the mock props
    const { container } = render(<GenerateQrcode url={url} />);

    // Check if the component renders without errors
    expect(container).toBeDefined();
  });

  // Add more test cases as needed to test specific behavior of Custom
});
