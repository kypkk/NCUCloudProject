import React from "react";
import { render, screen } from "@testing-library/react";
import userevent from "@testing-library/user-event";
import axios from "axios";
import Customform from "../CustomForm";

jest.mock("axios")

describe("CustomForm test", () => {
    /**
     * 這個 test case 主要是測試遇見合法輸入及合法 keyword 的時候
     * 會正確輸出由使用者的 keyword 所產生出來的短網址
     * 
     * 此 test case 的 keyword 為 純數字
     */
    test("CustomForm 合法網址輸入及 keyword 合法輸入: keyword 為純數字", async () => {
        // Arrange
        let url = "";
        const seturlMock = jest.fn((urlToBeSet) => {
            url = urlToBeSet;
        });

        const keyword = '9959595';

        axios.post = jest.fn().mockReturnValue(Promise.resolve({ "data": { "URL": `/BKD/${keyword}`, "ERR": "none" } }));
        const { rerender } = render(<Customform url={url} seturl={seturlMock} />);
        const button = screen.getByRole("button");
        const inputUrl = screen.getAllByRole("textbox")[0];
        const inputKeyword = screen.getAllByRole('textbox')[1];

        // Act
        await userevent.type(inputUrl, "https://www.google.com.tw/maps");
        await userevent.type(inputKeyword, keyword);
        await userevent.click(button);

        // Assert
        expect(url).toEqual(`http://localhost:3000/BKD/${keyword}`);
        rerender(<Customform url={url} seturl={seturlMock} />);

        expect(screen.getByText(`http://localhost:3000/BKD/${keyword}`)).toBeInTheDocument();
    });

    /**
     * 這個 test case 主要是測試遇見合法輸入及合法 keyword 的時候
     * 會正確輸出由使用者的 keyword 所產生出來的短網址
     * 
     * 此 test case 的 keyword 為 純英文
     */
    test("CustomForm 合法網址輸入及 keyword 合法輸入: keyword 為純英文", async () => {
        // Arrange
        let url = "";
        const seturlMock = jest.fn((urlToBeSet) => {
            url = urlToBeSet;
        });

        const keyword = 'what_am_i';

        axios.post = jest.fn().mockReturnValue(Promise.resolve({ "data": { "URL": `/BKD/${keyword}`, "ERR": "none" } }));
        const { rerender } = render(<Customform url={url} seturl={seturlMock} />);
        const button = screen.getByRole("button");
        const inputUrl = screen.getAllByRole("textbox")[0];
        const inputKeyword = screen.getAllByRole('textbox')[1];

        // Act
        await userevent.type(inputUrl, "https://www.google.com.tw/maps");
        await userevent.type(inputKeyword, keyword);
        await userevent.click(button);

        // Assert
        expect(url).toEqual(`http://localhost:3000/BKD/${keyword}`);
        rerender(<Customform url={url} seturl={seturlMock} />);

        expect(screen.getByText(`http://localhost:3000/BKD/${keyword}`)).toBeInTheDocument();
    });

    /**
     * 這個 test case 主要是測試遇見合法輸入及合法 keyword 的時候
     * 會正確輸出由使用者的 keyword 所產生出來的短網址
     * 
     * 此 test case 的 keyword 為 數字、英文混合
     */
    test("CustomForm 合法網址輸入及 keyword 合法輸入: keyword 為數字、英文混合", async () => {
        // Arrange
        let url = "";
        const seturlMock = jest.fn((urlToBeSet) => {
            url = urlToBeSet;
        });

        const keyword = 'watashiha886desu';

        axios.post = jest.fn().mockReturnValue(Promise.resolve({ "data": { "URL": `/BKD/${keyword}`, "ERR": "none" } }));
        const { rerender } = render(<Customform url={url} seturl={seturlMock} />);
        const button = screen.getByRole("button");
        const inputUrl = screen.getAllByRole("textbox")[0];
        const inputKeyword = screen.getAllByRole('textbox')[1];

        // Act
        await userevent.type(inputUrl, "https://www.google.com.tw/maps");
        await userevent.type(inputKeyword, keyword);
        await userevent.click(button);

        // Assert
        expect(url).toEqual(`http://localhost:3000/BKD/${keyword}`);
        rerender(<Customform url={url} seturl={seturlMock} />);

        expect(screen.getByText(`http://localhost:3000/BKD/${keyword}`)).toBeInTheDocument();
    });

    /**
     * 這個 test case 主要是測試遇見合法輸入及合法 keyword 的時候
     *  但 keyword 已經存在於資料庫中
     * 會輸出此關鍵字已被使用
     * 
     */
    test("CustomForm 合法網址輸入及 keyword 合法輸入，但 keyword 已存在", async () => {
        // Arrange
        let url = "";
        const seturlMock = jest.fn((urlToBeSet) => {
            url = urlToBeSet;
        });

        const keyword = 'asdf';

        axios.post = jest.fn().mockReturnValue(Promise.resolve({ "data": { "URL":"", "ERR": "這個關鍵字已被使用，請換一個關鍵字" } }));
        const { rerender } = render(<Customform url={url} seturl={seturlMock} />);
        const button = screen.getByRole("button");
        const inputUrl = screen.getAllByRole("textbox")[0];
        const inputKeyword = screen.getAllByRole('textbox')[1];

        // Act
        await userevent.type(inputUrl, "https://www.google.com.tw/maps");
        await userevent.type(inputKeyword, keyword);
        await userevent.click(button);

        // Assert
        expect(url).toEqual("這個關鍵字已被使用，請換一個關鍵字");
        rerender(<Customform url={url} seturl={seturlMock} />);

        expect(screen.getByText("這個關鍵字已被使用，請換一個關鍵字")).toBeInTheDocument();
    });


    /**
     * 這個 test case 主要是測試遇見非法輸入的時候
     * 應會輸出"輸入不能為空，且必須是合法網址"
     * 
     * 此 test case 為網址是空輸入
     * 
     */
    test("CustomForm 非法網址輸入: 空輸入", async () => {
        // Arrange
        let url = "";
        const seturlMock = jest.fn((urlToBeSet) => {
            url = urlToBeSet;
        });

        const keyword = 'asdf';

        axios.post = jest.fn().mockReturnValue(Promise.resolve({ "data": { "URL":"", "ERR": "基本上不應該被用到" } }));
        const { rerender } = render(<Customform url={url} seturl={seturlMock} />);
        const button = screen.getByRole("button");
        const inputUrl = screen.getAllByRole("textbox")[0];
        const inputKeyword = screen.getAllByRole('textbox')[1];

        // Act
        // await userevent.type(inputUrl, "https://www.google.com.tw/maps");
        await userevent.type(inputKeyword, keyword);
        await userevent.click(button);

        // Assert
        expect(url).toEqual("輸入不能為空，且必須是合法網址");
        rerender(<Customform url={url} seturl={seturlMock} />);

        expect(screen.getByText("輸入不能為空，且必須是合法網址")).toBeInTheDocument();
    });


    /**
     * 這個 test case 主要是測試遇見非法輸入的時候
     * 應會輸出"輸入不能為空，且必須是合法網址"
     * 
     * 此 test case 為非正確網址輸入
     * 
     */
    test("CustomForm 非法網址輸入: 非正確網址輸入", async () => {
        // Arrange
        let url = "";
        const seturlMock = jest.fn((urlToBeSet) => {
            url = urlToBeSet;
        });

        const keyword = 'asdf';

        axios.post = jest.fn().mockReturnValue(Promise.resolve({ "data": { "URL":"", "ERR": "基本上不應該被用到" } }));
        const { rerender } = render(<Customform url={url} seturl={seturlMock} />);
        const button = screen.getByRole("button");
        const inputUrl = screen.getAllByRole("textbox")[0];
        const inputKeyword = screen.getAllByRole('textbox')[1];

        // Act
        await userevent.type(inputUrl, "chigauURL");
        await userevent.type(inputKeyword, keyword);
        await userevent.click(button);

        // Assert
        expect(url).toEqual("輸入不能為空，且必須是合法網址");
        rerender(<Customform url={url} seturl={seturlMock} />);

        expect(screen.getByText("輸入不能為空，且必須是合法網址")).toBeInTheDocument();
    });


    /**
     * 這個 test case 主要是測試遇見非法輸入的時候
     * 應會輸出"輸入不能為空，且必須是合法網址"
     * 
     * 此 test case 為正確網址輸入但 keyword 為空輸入
     * 
     */
    test("CustomForm 合法網址輸入但 keyword 為空輸入", async () => {
        // Arrange
        let url = "";
        const seturlMock = jest.fn((urlToBeSet) => {
            url = urlToBeSet;
        });

        const keyword = 'asdf';

        axios.post = jest.fn().mockReturnValue(Promise.resolve({ "data": { "URL":"", "ERR": "基本上不應該被用到" } }));
        const { rerender } = render(<Customform url={url} seturl={seturlMock} />);
        const button = screen.getByRole("button");
        const inputUrl = screen.getAllByRole("textbox")[0];
        const inputKeyword = screen.getAllByRole('textbox')[1];

        // Act
        await userevent.type(inputUrl, "https://www.google.com.tw/maps");
        // await userevent.type(inputKeyword, keyword);
        await userevent.click(button);

        // Assert
        expect(url).toEqual("輸入不能為空，且必須是合法網址");
        rerender(<Customform url={url} seturl={seturlMock} />);

        expect(screen.getByText("輸入不能為空，且必須是合法網址")).toBeInTheDocument();
    });
});