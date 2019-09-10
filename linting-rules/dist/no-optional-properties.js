"use strict";
const util_1 = require("./util");
module.exports = util_1.createRule({
    name: 'no-optional-properties',
    meta: {
        fixable: 'code',
        type: 'problem',
        docs: {
            description: 'Disallow optional properties',
            category: 'Best Practices',
            recommended: 'warn',
        },
        schema: [],
        messages: {
            unexpectedOptionalProperty: 'Unexpected optional property.',
        },
    },
    defaultOptions: [],
    create(context) {
        return {
            TSPropertySignature(node) {
                if (node.optional) {
                    context.report({
                        node: node,
                        messageId: 'unexpectedOptionalProperty',
                        fix(fixer) {
                            const sourceCode = context.getSourceCode();
                            const tokenToRemove = sourceCode.getTokenAfter(node.key);
                            return fixer.remove(tokenToRemove);
                        }
                    });
                }
            },
        };
    },
});
