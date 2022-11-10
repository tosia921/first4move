import React from 'react';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import TextImage from '../components/AboutUs/TextImage';
import ImageBullets from '../components/AboutUs/ImageBullets';

const about = () => {
	return (
		<Layout>
			<PageHero page="about" label="About Us" />
			<TextImage />
			<div className="page-padding my-10 md:my-[100px] ">
				<h2 className="text-4xl md:text-5xl font-Baloo font-bold max-w-[90%]">We are professional, trusthworthy and reliable business that focuses on quality and customer satisfaction.</h2>
			</div>
			<ImageBullets />
		</Layout>
	);
};

export default about;

export const Head = () => (
	<>
		<title>About us</title>
		<meta name="description" content="fill when " />
	</>
);
