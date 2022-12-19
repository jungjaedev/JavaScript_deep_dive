// module.exports = {
// 	env: {
// 		browser: true,
// 		es6: true,
// 		node: true,
// 	},
// 	extends: [
// 		"eslint-config-prettier",
// 		"eslint:recommended",
// 	],
// 	overrides: [],
// 	parserOptions: {
// 		ecmaVersion: 6,
// 		sourceType: "module",
// 	},
// 	plugins: ["vue", "eslint-config-prettier"],
// 	rules: {
// 		"prettier/prettier": [
// 			"error",
// 			{
// 				semi: true,
// 				useTabs: true,
// 				tabWidth: 4,
// 				trailingComma: "all",
// 				printWidth: 80,
// 				bracketSpacing: true,
// 				arrowParens: "avoid",
// 			},
// 		],
// 	},
// };
module.exports = {
	"plugins": [
	  "prettier",
	],
	"extends": [
	  "eslint:recommended",
	  "plugin:react/recommended",
	  "prettier",
	],
	rules: {
		"prettier/prettier": [
			"error",
			{
				semi: true,
				// useTabs: true,
				tabWidth: 4,
				trailingComma: "all",
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: "avoid",
			},
		],
	}
  }
