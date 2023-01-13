import React from 'react';

import ServiceCard from '../ServiceCard';
import Button from '../Button';

const Services = () => {
	return (
		<div className="page-padding w-full my-12 flex flex-col justify-center items-center md:my-[75px]">
			<h2 className="text-3xl md:text-4xl font-Baloo mb-3 font-bold">Our Services</h2>
			<p className="small-text-grey max-w-[90%] md:max-w-[70%]">
				We offer range of services to our customers, whether it's a full house makeover or just fixing a broken tile, we got you covered.
			</p>
			<div className="orange-line"></div>
			<div className="columns-2 md:columns-4 my-2 md:my-6">
				<ServiceCard title="Kitchen" copy="Whatever you need when it comes to Kitchen renovation, 123Renovator will help you realise your vision." icon="kitchen" />
				<ServiceCard title="Bathroom" copy="We offer a range of services so we able to create a Bathroom that works for you." icon="bathroom" />

				<ServiceCard title="Flooring" copy="Lorem Ipsum is simply dummy text of the printing and typesetting industry." icon="flooring" />
				<ServiceCard title="Tiling" copy='We offer fast and affordable Bathroom, Kitchen Tiling and more.' icon="tiling" />
			</div>
			<Button to="/services" text="See All Services" />
		</div>
	);
};

export default Services;
