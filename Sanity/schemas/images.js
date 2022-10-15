export default {
	name: 'images',
	title: 'Images',
	type: 'array', // supports drag'n'drop of multiple files
	options: {
		layout: 'grid',
	},
	of: [
		{
			type: 'image',
			name: 'image',
			title: 'Image',
		},
	],
};
