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

export const Head = () => {
	const schemaMarkup = {
		'@context': 'https://schema.org',
		'@type': 'HomeAndConstructionBusiness',
		name: 'Lukasz Jaskiewicz',
		image: 'https://www.123renovatoredinburgh.co.uk/logo',
		'@id': '',
		url: 'https://www.123renovatoredinburgh.co.uk',
		telephone: '+447476776656',
		priceRange: '$$',
		address: {
			'@type': 'PostalAddress',
			streetAddress: '',
			addressLocality: 'Edinburgh',
			postalCode: '',
			addressCountry: 'GB',
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: 55.9,
			longitude: 3.1,
		},
		openingHoursSpecification: [
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
				opens: '09:00',
				closes: '17:00',
			},
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: 'Saturday',
				opens: '09:00',
				closes: '15:00',
			},
		],
	};

	return (
		<>
			<title>123 Renovator Edinburgh</title>
			<meta name="description" content="123 Renovator Edinburgh is a renovation business with many years of experience. We are located in Edinburgh, Scotland and operate within that region" />

			<script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
		</>
	);
};
