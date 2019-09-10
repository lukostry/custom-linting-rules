## Project strucure

-   `linting-rules/` - Our custom written lint rules goes there, you find some utilities and typings copied directly from `typescript-eslint` project. Compiled rules goes into `/dist` folder
-  `src/` - Collection of TS files that we want to inspect

## Key project commands:

-   `yarn install` - Installs all the necessary packages
-   `yarn build` - Compiles linting rules written in TS to JS
-   `yarn lint` - Lints all files in `src/` folder
-   `yarn verify` - Builds rules and runs linter
-   `yarn test` - Runs unit tests

We will be writting linting rules in TypeScript, so compilation step is needed before we could run actual linting. Run `yarn build` in order to build rules and `yarn lint` to run linter. `yarn verify` will combine both of these commands.

## Exercises

You can consider each exercise as a completed when `yarn verify` shows errors in the corresponding files in `src/` folder and associated unit tests are passing.
If you are using VSCode you should see

1. Let's forbid (just for fun) the usage of optional properties within interface and type declaration. Edit `no-optional-properties.ts` file in the `linting-rules` folder.

2. Let's add a fixer! Edit `no-optional-properties.ts`, so that this linter rule will turn all optional properties into required ones

