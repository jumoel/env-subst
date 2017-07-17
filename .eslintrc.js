module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: ['eslint:recommended', 'prettier'],
	plugins: ['prettier'],
	rules: {
		'no-console': 0,
		'prettier/prettier': [
			'error',
			{
				useTabs: true,
				bracketSpacing: true,
				singleQuote: true,
				semi: true,
				trailingComma: 'es5',
			},
		],
	},
};
