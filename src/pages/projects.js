import React from 'react';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import SingleProject from '../components/Projects/SingleProject';
import BreakSection from '../components/BreakSection';

const projects = () => {
	return (
		<Layout>
			<PageHero label="Projects" page="projects" />
			<section className="page-padding">
				<div className="flex flex-col md:items-start">
					<h2 className="text-3xl  md:text-4xl font-Baloo mb-3 font-bold">Projects we are the most proud of</h2>
					<p className="small-text-grey--left text-left md:text-left max-w-[90%] md:max-w-[70%]">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
					</p>
					<div className="orange-line"></div>
				</div>
			</section>
			<section className="page-padding">
				<SingleProject
					number="01."
					name="Modern Kitchen"
					text1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
					text2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
					bullets={['We have high quality standards', 'We have high quality standards', 'We have high quality standards', 'We have high quality standards']}
				/>
				<SingleProject
					number="02."
					name="Amazing Kitchen"
					text1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
					text2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
					bullets={['We have high quality standards', 'We have high quality standards', 'We have high quality standards', 'We have high quality standards']}
					secondary
				/>
			</section>
			<BreakSection title="No Project Is Too Small !" text="Contact Us For a Free Quote" />
		</Layout>
	);
};

export default projects;
