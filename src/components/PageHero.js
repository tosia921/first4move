import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const PageHero = ({ page, label }) => {
	return (
		<section className="mb-10 md:mb-20">
			<div className="hidden sm:block relative">
				<div className="absolute w-full h-full bg-black opacity-30 z-10 "></div>
				{page === 'about' && <StaticImage src="../images/pageHero/about-hero.png" alt="Renovated Bathroom" layout="fullWidth" />}
				{page === 'services' && <StaticImage src="../images/pageHero/services-hero.png" alt="Renovated Bathroom" layout="fullWidth" />}
				<h1 className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-4xl md:text-7xl text-white font-Baloo font-bold md:left-80 z-20">{label}</h1>
			</div>
			<div className="sm:hidden relative">
				<div className="absolute w-full h-full bg-black opacity-30 z-10 "></div>
				{page === 'about' && <StaticImage src="../images/pageMobile/about-hero.jpg" alt="Renovated Bathroom" layout="fullWidth" />}
				{page === 'services' && <StaticImage src="../images/pageMobile/services-hero.jpg" alt="Renovated Bathroom" layout="fullWidth" />}
				<h1 className="w-full text-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-5xl md:text-7xl text-white font-Baloo font-bold md:left-80 z-20">{label}</h1>
			</div>
		</section>
	);
};

export default PageHero;
