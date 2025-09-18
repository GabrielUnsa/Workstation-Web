// Setup específico para tests de controlador - sin MongoDB Memory Server
jest.setTimeout(30000);

// Mock console methods to avoid noise during tests
global.console = {
  ...console,
  log: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};

// Environment variables for tests
process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = 'test-secret';
process.env.MONGODB_URI = 'mongodb://test-uri';