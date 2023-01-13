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
				<p className="text-base sm:max-w-[80%] mb-2 mt-2 lg:mb-4 lg:mt-4 font-Inter text-black leading-relaxed">
				123 Renovator is a progressive Edinburgh-based company specializing in general home improvements for residential and commercial customers.
				</p>
				<p className="text-base sm:max-w-[80%] mb-2 mt-2 lg:mb-4 lg:mt-4 font-Inter text-black leading-relaxed">
				We have grown our company by 'word of mouth' recommendations by delivering professional and highest standards service.
				</p>
				<p className="text-base sm:max-w-[80%] mb-2 mt-2 lg:mb-4 lg:mt-4 font-Inter text-black leading-relaxed">
					We have over 10 years of experience ranovating and delivering high quality services.
				</p>
			</div>
		</section>
	);
};

export default TextImage;
