import React from 'react';
import BreakSection from '../components/BreakSection';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import ServiceCard from '../components/ServiceCard';

const services = () => {
	return (
		<Layout>
			<PageHero page="services" label="Services" />
			<div className="page-padding w-full my-12 flex flex-col justify-start items-start md:my-[75px]">
				<div className="flex flex-col items-center md:items-start">
					<h2 className="text-3xl  md:text-4xl font-Baloo mb-3 font-bold">Our Services</h2>
					<p className="small-text-grey md:text-left max-w-[90%] md:max-w-[70%]">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
					</p>
					<div className="orange-line"></div>
				</div>
				<div className="flex w-full gap-4 justify-center md:justify-start flex-wrap my-2 md:my-6 ">
					<ServiceCard title="Kitchen" copy="Lorem Ipsum is simply dummy text of the printing and typesetting industry." icon="kitchen" />
					<ServiceCard title="Bathroom" copy="Lorem Ipsum is simply dummy text of the printing and typesetting industry." icon="bathroom" />
					<ServiceCard title="Flooring" copy="Lorem Ipsum is simply dummy text of the printing and typesetting industry." icon="flooring" />
					<ServiceCard title="Tiling" copy="Lorem Ipsum is simply dummy text of the printing and typesetting industry." icon="tiling" />
					<ServiceCard title="Plastering" copy="Lorem Ipsum is simply dummy text of the printing and typesetting industry." icon="plastering" />
					<ServiceCard title="Painting and Decorating" copy="Lorem Ipsum is simply dummy text of the printing and typesetting industry." icon="painting" />
					<ServiceCard title="Maitanance" copy="Lorem Ipsum is simply dummy text of the printing and typesetting industry." icon="maitanance" />
				</div>
			</div>
			<BreakSection title="Looking For Something Else?" text="Contact Us To Discuss Your Project" />
		</Layout>
	);
};

export default services;

export const Head = () => (
	<>
		<title>Services</title>
		<meta name="description" content="We are experienced and quality focused renovation business based in Edinburgh, Scotland. Take a look at all the services we provide for our clients." />
	</>
);
