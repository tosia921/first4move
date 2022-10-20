import React from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';

const emailsuccess = () => {
	return (
		<Layout>
			<div className="flex justify-center items-center page-padding flex-col my-20 md:my-0">
				<p className="font-Baloo text-2xl font-semibold mb-1">Email sent successfully - thank you!</p>
				<p className="font-Baloo text-xl mb-4">We will contact you as soon as possible.</p>
				<Button text="Go back to Homepage" to="/" />
			</div>
		</Layout>
	);
};

export default emailsuccess;
