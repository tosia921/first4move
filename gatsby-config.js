module.exports = {
	siteMetadata: {
		title: `first4move`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		// {
		// 	resolve: 'gatsby-source-sanity',
		// 	options: {
		// 		projectId: '123123',
		// 		dataset: '12er12r',
		// 	},
		// },
		'gatsby-plugin-postcss',
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sitemap',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /images/,
				},
			},
		},
	],
};
