module.exports = {
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testEnvironment: 'jsdom', // Ensure jsdom is properly set up
  setupFiles: ['./jest.config.js'], // Include the setup file
};


