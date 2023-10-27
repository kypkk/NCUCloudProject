module.exports = {
  testMatch: [
    "<rootDir>/src/**/__test__/*.test.js",
    "<rootDir>/src/**/__test__/*.test.jsx",
  ],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/mocks/"],
  coveragePathIgnorePatterns: [
    "src/Images/",
    "(.*)index.js$",
    "src/Components/QRForm",
    "<rootDir>/node_modules/",
    "<rootDir>/mocks/",
  ],
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/mocks/fileMock.js",
    "\\.(css|less)$": "<rootDir>/mocks/fileMock.js",
  },
};
