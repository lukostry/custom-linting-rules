import { Linter, Rule } from 'eslint';

import rule = require('../../src/no-optional-properties');
import { RuleTester } from '../RuleTester';

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {},
  },
  parser: '@typescript-eslint/parser',
});

const validCode = 'interface Labelled { label: string; }'
const inValidCode = 'interface Labelled { label?: string; }'

ruleTester.run('no-optional-properties', rule, {
  valid: [validCode],
  invalid: [{
    code: inValidCode,
    errors: [
      {
        messageId: 'unexpectedOptionalProperty',
        line: 1,
        column: 22,
      },
    ],
  }]
});

describe('no-optional-properties rule', () => {
  it('should fix properly', () => {
    const linter = new Linter();
    linter.defineRule('no-optional-properties', (rule as unknown) as Rule.RuleModule);
    const result = linter.verifyAndFix(
      inValidCode,
      {
        rules: {
          'no-optional-properties': 'warn',
        },
        parser: require.resolve('@typescript-eslint/parser'),
        parserOptions: {
          ecmaVersion: 6,
          sourceType: 'module',
          ecmaFeatures: {},
        },
      },
      {
        fix: true,
      },
    );
    console.log('@@@', result)
    expect(result.output)
      .toBe(validCode);
  });
});
