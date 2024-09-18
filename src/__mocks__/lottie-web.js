// src/__mocks__/lottie-web.js
export default {
    loadAnimation: jest.fn().mockReturnValue({
      stop: jest.fn(),
      play: jest.fn(),
    }),
  };
  
  