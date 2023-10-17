import React from "react";
import { render } from "@testing-library/react";
import Shortenform from "../ShortenForm";

describe("ShortenForm Test", () => {
  test("ShortenForm", () => {
    const { shortenform } = render(<Shortenform />);
  });
});
