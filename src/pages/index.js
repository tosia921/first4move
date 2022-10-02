import * as React from 'react';
import Hero from '../components/Homepage/Hero';
import Services from '../components/Homepage/Services';
import ImageBullets from '../components/ImageBullets';

const IndexPage = () => {
	return (
		<>
			<Hero />
			<Services />
			<ImageBullets />
		</>
	);
};

export default IndexPage;

export const Head = () => <title>First4Move</title>;
