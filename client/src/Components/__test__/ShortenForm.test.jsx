import React from "react";
import { render, screen } from "@testing-library/react";
import userevent from "@testing-library/user-event";
import axios from "axios";
import Shortenform from "../ShortenForm";

jest.mock("axios")

describe("ShortenForm Test", () => {
  
  test("ShortenForm 合法網址輸入", async () => {
    let url = "";
    const seturlMock = jest.fn((urlToBeSet) => {
      url = urlToBeSet;
    });
    axios.post = jest.fn().mockReturnValue(Promise.resolve({"data": {"URL": "/BKD/CkI3I"}}));
    const { rerender } = render(<Shortenform url={url} seturl={seturlMock} />);
    const button = screen.getByRole("button");
    const input = screen.getByRole("textbox");

    await userevent.type(input, "https://www.google.com.tw/maps")

    await userevent.click(button);
    // expect(seturlMock).toHaveBeenCalledWith("http://localhost:3000/BKD/CkI3I");
    expect(url).toEqual("http://localhost:3000/BKD/CkI3I");
    rerender(<Shortenform url={url} seturl={seturlMock} />);

    expect(screen.getByText("http://localhost:3000/BKD/CkI3I")).toBeInTheDocument();
    // screen.debug();
  });

  test("ShortenForm 非合法網址輸入: 空輸入", async () => {
    let url = "";
    const seturlMock = jest.fn((urlToBeSet) => {
      url = urlToBeSet;
    });
    // axios.post = jest.fn().mockReturnValue(Promise.resolve("/BKD/CkI3I"));
    const { rerender } = render(<Shortenform url={url} seturl={seturlMock} />);
    const button = screen.getByRole("button");
    const input = screen.getByRole("textbox");

    // await userevent.type(input, "https://www.youtube.com/")

    await userevent.click(button);
    expect(seturlMock).toHaveBeenCalledWith("輸入不能為空，且必須是合法網址");
    rerender(<Shortenform url={url} seturl={seturlMock} />);

    expect(screen.getByText("輸入不能為空，且必須是合法網址")).toBeInTheDocument();
    // screen.debug();
  });
  
  test("ShortenForm 非合法網址輸入: 錯誤輸入", async () => {
    let url = "";
    const seturlMock = jest.fn((urlToBeSet) => {
      url = urlToBeSet;
    });
    const { rerender } = render(<Shortenform url={url} seturl={seturlMock} />);
    const button = screen.getByRole("button");
    const input = screen.getByRole("textbox");

    await userevent.type(input, "asdf");

    await userevent.click(button);
    expect(seturlMock).toHaveBeenCalledWith("輸入不能為空，且必須是合法網址");
    rerender(<Shortenform url={url} seturl={seturlMock} />);

    expect(screen.getByText("輸入不能為空，且必須是合法網址")).toBeInTheDocument();
    // screen.debug();
  });
});