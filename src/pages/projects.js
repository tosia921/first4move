import React from 'react';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import SingleProject from '../components/Projects/SingleProject';
import BreakSection from '../components/BreakSection';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

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
			<div className="page-padding ">
				<p className="font-Baloo text-base">Click to jump to selected project:</p>
				<div className="mt-4 last:mr-0 flex flex-wrap">
					<AnchorLink className="text-dark mb-2 py-2 px-4 text-base md:text-lg font-Baloo mr-2 bg-orange" to="/projects#project1" title="Modern Kitchen" />
					<AnchorLink className="mb-2 py-2 px-4 text-base md:text-lg font-Baloo mr-2 bg-blue text-white" to="/projects#project2" title="Modern Bathroom" />
					<AnchorLink className="text-dark mb-2 py-2 px-4 text-base md:text-lg font-Baloo mr-2 bg-orange" to="/projects#project3" title="Stunning Bathroom" />
					<AnchorLink className="mb-2 py-2 px-4 text-base md:text-lg font-Baloo mr-2 bg-blue text-white" to="/projects#project4" title="Bathroom with Shower" />
					<AnchorLink className="text-dark mb-2 py-2 px-4 text-base md:text-lg font-Baloo mr-2 bg-orange" to="/projects#project5" title="Heated Tiles Living room" />
					<AnchorLink className="mb-2 py-2 px-4 text-base md:text-lg font-Baloo mr-2 bg-blue text-white" to="/projects#project6" title="Garden Decking" />
					<AnchorLink className="text-dark mb-2 py-2 px-4 text-base md:text-lg font-Baloo mr-2 bg-orange" to="/projects#project7" title="Refurbished Stairs" />
					<AnchorLink className="mb-2 py-2 px-4 text-base md:text-lg font-Baloo mr-2 bg-blue text-white" to="/projects#project8" title="Shop Transformation" />
				</div>
			</div>
			<section className="page-padding">
				<SingleProject
					number="01."
					id="project1"
					projectName="kitchen"
					name="Modern Kitchen"
					text1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
					text2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
					bullets={['We have high quality standards', 'We have high quality standards', 'We have high quality standards', 'We have high quality standards']}
				/>
				<SingleProject
					number="02."
					id="project2"
					projectName="bathroom1"
					name="Modern Bathroom"
					text1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
					text2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
					bullets={['We have high quality standards', 'We have high quality standards', 'We have high quality standards', 'We have high quality standards']}
					secondary
				/>
				<SingleProject
					number="03."
					id="project3"
					projectName="bathroom2"
					name="Stunning Bathroom"
					text1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
					text2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
					bullets={['We have high quality standards', 'We have high quality standards', 'We have high quality standards', 'We have high quality standards']}
				/>

				<SingleProject
					number="04."
					id="project4"
					projectName="bathroom4"
					name="Bathroom with shower"
					text1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
					text2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
					bullets={['We have high quality standards', 'We have high quality standards', 'We have high quality standards', 'We have high quality standards']}
					secondary
				/>
				<SingleProject
					number="05."
					id="project5"
					projectName="tiles"
					name="Heated Tiles Living room"
					text1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
					text2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
					bullets={['We have high quality standards', 'We have high quality standards', 'We have high quality standards', 'We have high quality standards']}
				/>
				<SingleProject
					number="06."
					id="project6"
					projectName="decking"
					name="Garden Decking"
					text1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
					text2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
					bullets={['We have high quality standards', 'We have high quality standards', 'We have high quality standards', 'We have high quality standards']}
					secondary
				/>
				<SingleProject
					number="07."
					projectName="stairs"
					id="project7"
					name="Refurbished Stairs"
					text1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
					text2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
					bullets={['We have high quality standards', 'We have high quality standards', 'We have high quality standards', 'We have high quality standards']}
				/>
				<SingleProject
					number="08."
					id="project8"
					projectName="shop"
					name="Shop Transformation"
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
