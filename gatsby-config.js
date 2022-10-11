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
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				defaults: {
					formats: [`auto`, `webp`],
					placeholder: `dominantColor`,
					quality: 50,
					breakpoints: [750, 1080, 1366, 1920],
					backgroundColor: `transparent`,
					tracedSVGOptions: {},
					blurredOptions: {},
					jpgOptions: {},
					pngOptions: {},
					webpOptions: {},
					avifOptions: {},
				},
			},
		},
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
