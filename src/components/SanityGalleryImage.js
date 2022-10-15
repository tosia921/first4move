import React from 'react';
import Image from 'gatsby-plugin-sanity-image';

const SanityGalleryImage = ({ photo, imageProps }) => {
	const { width, height, image } = photo;
	const { onClick } = imageProps;

	console.log(onClick);

	return (
		<div className="mb-2 md:mb-4 cursor-pointer" onClick={onClick}>
			<Image {...image} width={width} height={height} style={{ cursor: 'pointer' }} />
		</div>
	);
};

export default SanityGalleryImage;
