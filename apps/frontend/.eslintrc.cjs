module.exports = {
	root: true,
	extends: ["custom", "plugin:astro/recommended"],
	overrides: [
		{
			files: ["*.astro"],
			parser: "astro-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
				extraFileExtensions: [".astro"],
			},
			rules: {
				"astro/no-conflict-set-directives": "error",
				"astro/no-unused-define-vars-in-style": "error",
			},
		},
	],
	rules: {
		"unicorn/text-encoding-identifier-case": "off",
	},
}
