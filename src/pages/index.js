import * as React from 'react';
import Hero from '../components/Homepage/Hero';
import Services from '../components/Homepage/Services';

const IndexPage = () => {
	return (
		<>
			<Hero />
			<Services />
		</>
	);
};

export default IndexPage;

export const Head = () => <title>First4Move</title>;
