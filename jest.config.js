
'use strict';

module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: './tests/.+\\.test\\.ts$',
  globals: {
    'ts-jest': {
      "tsConfig": "./linting-rules/tsconfig.json"
      // ts-jest configuration goes here
    }
  }
};
