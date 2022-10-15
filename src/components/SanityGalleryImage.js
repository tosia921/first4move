import React from 'react';
import Image from 'gatsby-plugin-sanity-image';

const SanityGalleryImage = ({ photo, imageProps }) => {
	const { width, height, image } = photo;
	const { onClick } = imageProps;

	console.log(onClick);

	return (
		<div className="mb-2 md:mb-4 cursor-pointer" style={{ minWidth: '50px', minHeight: '50x' }} onClick={onClick}>
			<Image {...image} width={width} height={height} style={{ cursor: 'pointer', width: '100%', height: '100%', objectFit: 'cover' }} />
		</div>
	);
};

export default SanityGalleryImage;
