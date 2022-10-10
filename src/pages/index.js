import * as React from 'react';
import Hero from '../components/Homepage/Hero';
import Services from '../components/Homepage/Services';
import ImageBullets from '../components/ImageBullets';
import Projects from '../components/Homepage/Projects';
import Testimonials from '../components/Homepage/Testimonials';
import BreakSection from '../components/BreakSection';

const IndexPage = () => {
	return (
		<>
			<Hero />
			<Services />
			<ImageBullets />
			<Projects />
			<Testimonials />
			<BreakSection />
		</>
	);
};

export default IndexPage;

export const Head = () => <title>First4Move</title>;
