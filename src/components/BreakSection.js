import React from 'react';
import Button from './Button';

// SVG's
import BlobOne from '../images/blobs/blob1.svg';
import BlobTwo from '../images/blobs/BlobBackground2.svg';
import Circle from '../images/blobs/circleBackground2.svg';

const BreakSection = ({ title, text }) => {
	return (
		<div className="bg-orange py-6 md:py-10 font-Baloo text-white flex justify-center items-center flex-col relative overflow-hidden">
			<h2 className="pb-1 md:pb-2 text-xl md:text-3xl font-bold">{title}</h2>
			<p className="pb-4 md:pb-6 text-base md:text-lg">{text}</p>
			<Button text={'Contact Us'} to="/contact" color={'blue'} />
			<div className="hidden h-48 w-48 lg:block absolute -right-10 -bottom-4 rotate-45">
				<BlobTwo className="h-full w-full" />
			</div>
			<div className="hidden lg:block absolute bottom-2 left-[10%]">
				<BlobOne />
			</div>
			<div className="hidden lg:block absolute -top-[50%] left-0 h-52">
				<Circle style={{ width: '100%', height: '100%' }} />
			</div>
		</div>
	);
};

export default BreakSection;
