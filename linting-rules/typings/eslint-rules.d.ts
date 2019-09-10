declare module 'eslint/lib/rules/no-unused-vars' {
  import { TSESLint, TSESTree } from '@typescript-eslint/experimental-utils';

  const rule: TSESLint.RuleModule<
    never,
    (
      | 'all'
      | 'local'
      | {
        vars?: 'all' | 'local';
        varsIgnorePattern?: string;
        args?: 'all' | 'after-used' | 'none';
        ignoreRestSiblings?: boolean;
        argsIgnorePattern?: string;
        caughtErrors?: 'all' | 'none';
        caughtErrorsIgnorePattern?: string;
      })[],
    {
      ArrowFunctionExpression(node: TSESTree.ArrowFunctionExpression): void;
    }
  >;
  export = rule;
}
