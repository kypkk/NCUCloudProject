import React from "react";
import { render,waitFor } from "@testing-library/react";
//import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import Bekaidei from "../Bekaidei";

jest.mock('axios');

describe('<Bekaidei />', () => {
  let replaceMock;

  // Setup mock for window.location.replace
  beforeEach(() => {
    replaceMock = jest.fn();
    delete window.location;
    window.location = { replace: replaceMock };
  });

  // Clean up after each test
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should redirect upon receiving URL', async () => {
    // Mocking axios response
    const testURL = 'https://test.com';
    axios.post.mockResolvedValue({ data: { URL: testURL } });

    render(<Bekaidei />);

    // Wait for axios to resolve and useEffect to execute
    await waitFor(() => {
      expect(replaceMock).toHaveBeenCalledWith(testURL);
    });
  });
});
