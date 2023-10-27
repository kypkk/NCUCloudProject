// import {random} from "../createRandom";

/**
 * import error:
 * 
 * https://juejin.cn/post/6898738304754286605
 * https://stackoverflow.com/questions/61146112/error-while-loading-config-you-appear-to-be-using-a-native-ecmascript-module-c
 */

import random from "../createRandom.js";


describe("server unit test", () => {
    
    beforeEach(() => {
        jest.resetAllMocks();
    });
    
    /**
     * server test case 1:
     *      在呼叫 random function 後，
     *      random function 會產生由數字、英文大小寫總計長度為 5 的 string
     */
    test("應回傳由全數字所組成的 string: '11111'", () => {
        // Arrange
        const spyRandom = jest.spyOn(Math, "random").mockReturnValue(0);

        // Act
        const result = random();

        // Assert
        expect(result).toEqual('11111');
    });

    test("應回傳由全小寫字母所組成的 string: 'iiiii'", () => {
        // Arrange
        const spyRandom = jest.spyOn(Math, "random").mockReturnValue(0.3);

        // Act
        const result = random();

        // Assert
        expect(result).toEqual('iiiii');
    });

    test("應回傳由全大寫字母所組成的 string: 'HHHHH'", () => {
        // Arrange
        const spyRandom = jest.spyOn(Math, "random").mockReturnValue(0.6);

        // Act
        const result = random();

        // Assert
        expect(result).toEqual('HHHHH');
    });

    test("應回傳由全大寫字母所組成的 string: '2biD9'", () => {
        // Arrange
        const spyRandom = jest.spyOn(Math, "random").mockReturnValueOnce(0)         // number
                                                    .mockReturnValueOnce(0.2)
                                                    .mockReturnValueOnce(0.3)       // lowercase
                                                    .mockReturnValueOnce(0.9)
                                                    .mockReturnValueOnce(0.3)       // lowercase
                                                    .mockReturnValueOnce(0.3)
                                                    .mockReturnValueOnce(0.6)       // uppercase
                                                    .mockReturnValueOnce(0.48)
                                                    .mockReturnValueOnce(0)         // number
                                                    .mockReturnValueOnce(0.3)
                                                    .mockReturnValue(0.5);

        // Act
        const result = random();

        // Assert
        expect(spyRandom).toBeCalledTimes(10);
        expect(result).toEqual('2biD9');
    });
});