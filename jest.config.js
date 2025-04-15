module.exports = {
    transformIgnorePatterns: [
      "/node_modules/(?!(@testing-library)/)"
    ],
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
    },
    testEnvironment: "jsdom"  
  };
  