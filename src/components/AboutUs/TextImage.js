import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const TextImage = () => {
	return (
		<section className="page-padding mt-4 flex relative justify-center flex-col-reverse md:flex-row-reverse md:items-start md:columns-2 md:gap-2">
			<div className="image-border-radius-bl image-wrapper--orange">
				<StaticImage src="../../images/about-image1.png" alt="Renovated Bathroom" layout="fullWidth" className="image-border-radius-bl" aspectRatio={1 / 1} />
			</div>
			<div className="w-full">
				<h1 className=" text-3xl md:text-2xl lg:text-4xl xxl:text-4xl font-extrabold mt-5 font-Baloo">Our Story</h1>
				<div className="orange-line"></div>
				<p className="text-base sm:max-w-[80%] mb-6 mt-4 lg:mb-8 lg:mt-6 font-Inter text-black leading-relaxed">
					It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
					more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
					editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the
					years, sometimes by accident, sometimes on purpose (injected humour and the like).
				</p>
				<p className="text-base sm:max-w-[80%] mb-6 mt-4 lg:mb-8 lg:mt-6 font-Inter text-black leading-relaxed">
					It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
				</p>
			</div>
		</section>
	);
};

export default TextImage;
