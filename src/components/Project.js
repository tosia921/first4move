import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Project = () => {
	return (
		<div className="md:flex mb-12 relative">
			<div className="grid w-full py-6 md:w-1/2 relative">
				<div
					className="relative bg-orange justify-self-end self-end w-[90%] h-[90%] rounded-bl-3xl"
					style={{
						gridArea: '1/1',
					}}
				></div>

				<StaticImage
					src="../images/imageex.png"
					alt="Renovated Bathroom"
					layout="fullWidth"
					style={{
						gridArea: '1/1',
						height: '95%',
						width: '95%',
						borderBottomLeftRadius: '1.5rem',
						maxWidth: '700px',
					}}
					aspectRatio={1 / 1}
				/>
			</div>
			<div className="font-Baloo font-bold text-2xl md:w-1/2 md:flex md:flex-col md:mt-20 md:pl-[10%]">
				<h3 className="text-3xl lg:text-4xl">
					We are <span className="text-orange">Experts</span> in <br /> Renovations
				</h3>
				<div className="orange-line"></div>
				<ul className="font-medium text-base md:text-lg"></ul>
			</div>
		</div>
	);
};

export default Project;
