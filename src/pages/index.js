import * as React from 'react';
import Hero from '../components/Homepage/Hero';
import Services from '../components/Homepage/Services';
import ImageBullets from '../components/ImageBullets';
import Projects from '../components/Homepage/Projects';
import Testimonials from '../components/Homepage/Testimonials';
import BreakSection from '../components/BreakSection';
import Layout from '../components/Layout';

const IndexPage = () => {
	return (
		<Layout>
			<Hero />
			<Services />
			<ImageBullets />
			<Projects />
			<Testimonials />
			<BreakSection />
		</Layout>
	);
};

export default IndexPage;

export const Head = () => <title>First4Move</title>;
