import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Button from '../Button';

const Projects = () => {
	return (
		<section className="page-padding md:mb-[75px] md:mt-[20px]">
			<div className="w-full mb-4 mt-t flex flex-col justify-center items-center ">
				<h2 className="text-3xl md:text-4xl font-Baloo mb-3 font-bold">Our Projects</h2>
				<p className="small-text-grey md:max-w-[70%]">See what difference it makes when you hire professionals!</p>
				<div className="orange-line"></div>
			</div>
			<div className="md:flex md:gap-14 ">
				<div className="md:flex mb-4 relative md:w-1/2">
					<div className="md:w-full">
						<h3 className="text-xl md:text-2xl text-center md:text-left font-Baloo text-orange font-bold mb-4">01. Modern Kitchens</h3>
						<p className="text-sm md:text-lg font-Baloo text-dark md:max-w-lg text-center md:text-left mb-2 md:mb-10">Transforming kitchens is one of our specialties. We've done small renovations and complete kitchen makeovers over the years. With our expert guidance, you can sleep well knowing your kitchen will look just the way you've imagined and last you for decades!</p>

						<div className="grid w-full py-6 relative">
							<div
								className="relative bg-orange justify-self-end self-start w-[90%] h-[75%] rounded-br-3xl"
								style={{
									gridArea: '1/1',
								}}
							></div>
							<div
								className="justify-self-start self-end rounded-br-3xl overflow-hidden"
								style={{
									gridArea: '1/1',
									height: '95%',
									width: '95%',

									maxWidth: '700px',
								}}
							>
								<StaticImage src="../../images/kitchen1.png" alt="Renovated Bathroom" layout="fullWidth" aspectRatio={1 / 1} />
							</div>
						</div>
					</div>
				</div>
				<div className=" mb-2 relative md:w-1/2">
					<div className="flex flex-col md:flex-col-reverse">
						<div className="md:flex md:justify-end">
							<div className="md:w-[90%]">
								<h3 className="text-xl md:text-2xl text-center md:text-left font-Baloo text-blue font-bold mb-4 md:mt-4">02. Amazing Bathrooms</h3>
								<p className="text-sm md:text-lg font-Baloo text-dark md:max-w-lg text-center md:text-left mb-2 md:mb-6">We pride ourselves in being able to showcase a number of Bathroom makeovers. It's never an easy job and in many cases requires stripping it down to the concrete, but the end results always show that it's worth it. Take a look at more of our projects, don't just take our word for it!</p>
							</div>
						</div>
						<div className="grid w-full py-6 relative">
							<div className="image-wrapper--blue image-border-radius-bl">
								<StaticImage src="../../images/bathroom1.png" alt="Renovated Bathroom" layout="fullWidth" aspectRatio={1 / 1} className="image-border-radius-bl" />
							</div>
						</div>
					</div>
					<div className="flex justify-center md:justify-start md:ml-[10%]">
						<Button color="orange" text="See All" to="/projects" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
