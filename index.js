// Replaces variables of the form $VARIABLE or ${VARIABLE} with the content of `process.env.VARIABLE`
module.exports = function envsubst(stringContent) {
	const regex = /\$(?:(\w+)|{(\w+)})/g;

	const variables = regex.exec(stringContent);

	return stringContent.replace(regex, (original, g1, g2) => {
		const variable = g1 || g2;

		return process.env.hasOwnProperty(variable)
			? process.env[variable]
			: original;
	});
};
