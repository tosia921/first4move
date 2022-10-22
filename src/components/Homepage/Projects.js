import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Button from '../Button';

const Projects = () => {
	return (
		<section className="page-padding md:mb-[75px] md:mt-[20px]">
			<div className="w-full mb-4 mt-t flex flex-col justify-center items-center ">
				<h2 className="text-3xl md:text-4xl font-Baloo mb-3 font-bold">Our Projects</h2>
				<p className="small-text-grey md:max-w-[70%]">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
				</p>
				<div className="orange-line"></div>
			</div>
			<div className="md:flex md:gap-14 ">
				<div className="md:flex mb-4 relative md:w-1/2">
					<div className="md:w-full">
						<h3 className="text-xl md:text-2xl text-center md:text-left font-Baloo text-orange font-bold mb-4">01. Modern Kitchen</h3>
						<p className="text-sm md:text-lg font-Baloo text-dark md:max-w-lg text-center md:text-left mb-2 md:mb-10">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
						</p>

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
								<h3 className="text-xl md:text-2xl text-center md:text-left font-Baloo text-blue font-bold mb-4 md:mt-4">02. Amazing Bathroom</h3>
								<p className="text-sm md:text-lg font-Baloo text-dark md:max-w-lg text-center md:text-left mb-2 md:mb-6">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
								</p>
							</div>
						</div>
						<div className="grid w-full py-6 relative">
							<div
								className="relative bg-blue justify-self-end self-end w-[90%] h-[75%] rounded-br-3xl"
								style={{
									gridArea: '1/1',
								}}
							></div>
							<div
								className="justify-self-start self-start rounded-br-3xl overflow-hidden"
								style={{
									gridArea: '1/1',
									height: '95%',
									width: '95%',
									maxWidth: '700px',
								}}
							>
								<StaticImage src="../../images/bathroom1.png" alt="Renovated Bathroom" layout="fullWidth" aspectRatio={1 / 1} />
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
