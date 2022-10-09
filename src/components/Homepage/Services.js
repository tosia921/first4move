import React from 'react';

import ServiceCard from '../ServiceCard';
import Button from '../Button';

const Services = () => {
	return (
		<div className="w-full my-12 flex flex-col justify-center items-center md:my-[75px]">
			<h2 className="text-3xl md:text-4xl font-Baloo mb-3 font-bold">Our Services</h2>
			<p className="small-text-grey max-w-[70%]">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
			</p>
			<div className="orange-line"></div>
			<div className="columns-2 md:columns-4 my-2 md:my-6">
				<ServiceCard title="Kitchen" copy="Lorem Ipsum is simply dummy text of the printing and typesetting industry." icon="kitchen" />
				<ServiceCard title="Bathroom" copy="Lorem Ipsum is simply dummy text of the printing and typesetting industry." icon="bathroom" />

				<ServiceCard title="Flooring" copy="Lorem Ipsum is simply dummy text of the printing and typesetting industry." icon="flooring" />
				<ServiceCard title="Tiling" copy="Lorem Ipsum is simply dummy text of the printing and typesetting industry." icon="tiling" />
			</div>
			<Button text="See All Services" />
		</div>
	);
};

export default Services;
