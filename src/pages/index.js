import * as React from 'react';
import Hero from '../components/Homepage/Hero';
import Services from '../components/Homepage/Services';
import ImageBullets from '../components/Homepage/ImageBullets';
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
			<BreakSection title="Do You Have Any Projects?" text="Contact Us For a Free Quote" />
		</Layout>
	);
};

export default IndexPage;

export const Head = () => <title>First4Move</title>;
