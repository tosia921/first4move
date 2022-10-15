import './images';

export default {
	name: 'gallery',
	type: 'document',
	title: 'Gallery',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'imagegallery',
			title: 'Image Gallery',
			type: 'images',
		},
	],
	preview: {
		select: {
			title: 'title',
		},
	},
};
