module.exports = {
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
    "\\.(png|jpg|jpeg|svg|gif)$": "<rootDir>/src/test/fileMock.js",
  },
  setupFilesAfterEnv: ["<rootDir>/src/test/setupTests.js"],
};