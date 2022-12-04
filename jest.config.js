/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@application/(.*)": "<rootDir>/src/application/$1",
    "^@domain/(.*)": "<rootDir>/src/domain/index",
    "^@adapters/(.*)": "<rootDir>/src/adapters/$1",
    "^@helpers/(.*)": "<rootDir>/src/helpers/$1",
    "^@infra/(.*)": "<rootDir>/src/infra/$1",
    "^@tests/(.*)": "<rootDir>/tests/$1",
  },
};
