/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['out/', 'src/__tests__/__mocks', 'src/__tests__/data', "src/__tests__/soql/data", "src/__tests__/soql/utils.ts"],
  modulePathIgnorePatterns: ['<rootDir>/out/__tests__/__mocks__/']
};