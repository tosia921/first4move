import photos from './photos';

export const slides = photos.map(({ src, key, width, height, images }) => ({
	src,
	key,
	width,
	height,
	srcSet: images?.map((image) => ({
		src: image.src,
		width: image.width,
		height: image.height,
	})),
}));
