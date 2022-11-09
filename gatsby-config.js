module.exports = {
	siteMetadata: {
		title: `123 Renovator Edinburgh`,
		siteUrl: `https://www.123renovatoredinburgh.co.uk/`,
	},
	plugins: [
		{
			resolve: 'gatsby-source-sanity',
			options: {
				projectId: '6jjq3mfp',
				dataset: 'production',
				token: process.env.SANITY_TOKEN,
				graphqlTag: 'default',
			},
		},
		{
			resolve: 'gatsby-plugin-sanity-image',
			options: {
				projectId: '6jjq3mfp',
				dataset: 'production',
				token: process.env.SANITY_TOKEN,
			},
		},
		{
			resolve: 'gatsby-plugin-anchor-links',
			options: {
				offset: -100,
			},
		},
		'gatsby-plugin-postcss',
		'gatsby-plugin-image',
		'gatsby-plugin-sitemap',
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://www.123renovatoredinburgh.co.uk',
				sitemap: 'https://www.123renovatoredinburgh.co.uk/sitemap/sitemap-0.xml',
				policy: [{ userAgent: '*', allow: '/' }],
			},
		},
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
