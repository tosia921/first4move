import React, { useEffect, useState } from 'react';
import SanityGalleryImage from './SanityGalleryImage';
import Image from 'gatsby-plugin-sanity-image';

import PhotoAlbum from 'react-photo-album';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const Gallery = ({ data }) => {
	const [index, setIndex] = useState(-1);

	const [images, setImages] = useState([]);

	useEffect(() => {
		if (data.length > 0) {
			data.forEach((element) => {
				images.push({ src: element.asset.url, height: element.asset.height, width: element.asset.width, image: element });
			});
			setImages(images);
		}
	}, [images, data]);

	useEffect(() => {
		console.log('index', index);
	}, [images]);

	return (
		<section className="page-padding">
			<PhotoAlbum layout="columns" photos={images} renderPhoto={SanityGalleryImage} onClick={(event, photo, index) => setIndex(index)} />
			<Lightbox
				open={index >= 0}
				index={index}
				close={() => setIndex(-1)}
				slides={images}
				plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
				render={{
					slide: (image, offset, rect) => {
						const width = Math.round(Math.min(rect.width, (rect.height / image.height) * image.width));
						const height = Math.round(Math.min(rect.height, (rect.width / image.width) * image.height));

						return (
							<div style={{ position: 'relative', width, height }}>
								<Image
									{...image.image}
									width={width}
									height={height}
									style={{
										width: '100%',
										height: '100%',
										objectFit: 'cover',
									}}
								/>
							</div>
						);
					},
				}}
			/>
		</section>
	);
};

export default Gallery;
