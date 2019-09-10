"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const experimental_utils_1 = require("@typescript-eslint/experimental-utils");
const no_unused_vars_1 = __importDefault(require("eslint/lib/rules/no-unused-vars"));
console.log('!!!!', no_unused_vars_1.default);
const util_1 = require("./util");
module.exports = util_1.createRule({
    name: 'no-unused-vars',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow unused variables',
            category: 'Variables',
            recommended: 'warn',
        },
        schema: no_unused_vars_1.default.meta.schema,
        messages: no_unused_vars_1.default.meta.messages,
    },
    defaultOptions: [],
    create(context) {
        const rules = no_unused_vars_1.default.create(context);
        /**
         * Mark heritage clause as used
         * @param node The node currently being traversed
         */
        function markHeritageAsUsed(node) {
            switch (node.type) {
                case experimental_utils_1.AST_NODE_TYPES.Identifier:
                    context.markVariableAsUsed(node.name);
                    break;
                case experimental_utils_1.AST_NODE_TYPES.MemberExpression:
                    markHeritageAsUsed(node.object);
                    break;
                case experimental_utils_1.AST_NODE_TYPES.CallExpression:
                    markHeritageAsUsed(node.callee);
                    break;
            }
        }
        return Object.assign({}, rules, {
            TSInterfaceHeritage(node) {
                if (node.expression) {
                    markHeritageAsUsed(node.expression);
                }
            },
        });
    },
});
