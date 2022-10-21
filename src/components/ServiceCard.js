import React from 'react';

import Tiling from '../images/icons-services/tiling.svg';
import Plastering from '../images/icons-services/plastering.svg';
import Painting from '../images/icons-services/painting.svg';
import Maitanance from '../images/icons-services/maitanance.svg';
import Kitchen from '../images/icons-services/kitchen.svg';
import Bathroom from '../images/icons-services/bathroom.svg';
import Flooring from '../images/icons-services/florring.svg';

const ServiceCard = ({ title, copy, icon }) => {
	return (
		<div className="group w-full h-[300px] max-w-[275px] md:h-[350px] mb-3 border-card rounded-br-3xl p-2 md:p-5 flex flex-col hover:bg-orange cursor-pointer">
			<div className="h-[40%] flex items-start">
				{icon === 'bathroom' && (
					<div className="h-[80%] md:h-[60%] md:mt-4 ">
						<Bathroom className="h-full group-hover:stroke-white" />
					</div>
				)}
				{icon === 'kitchen' && (
					<div className="h-[100%] -ml-[6px]">
						<Kitchen className="h-full group-hover:stroke-white" />
					</div>
				)}
				{icon === 'tiling' && (
					<div className="h-[80%] mt-1">
						<Tiling className="h-full group-hover:fill-white" />
					</div>
				)}
				{icon === 'plastering' && (
					<div className="h-20 -ml-5">
						<Plastering className="h-full group-hover:fill-white" />
					</div>
				)}
				{icon === 'painting' && (
					<div className="h-20 mt-6">
						<Painting className="h-full group-hover:stroke-white" />
					</div>
				)}
				{icon === 'maitanance' && (
					<div className="h-20 mt-6">
						<Maitanance className="h-full group-hover:stroke-white" />
					</div>
				)}
				{icon === 'flooring' && (
					<div className="h-[85%] mt-2">
						<Flooring className="h-full group-hover:stroke-white" />
					</div>
				)}
			</div>
			<div className="h-[60%] ">
				<h3 className="text-xl font-bold font-Baloo mb-2 group-hover:text-white">{title}</h3>
				<p className="font-Baloo text-sm md:text-base text-dark leading-5 group-hover:text-white">{copy}</p>
			</div>
		</div>
	);
};

export default ServiceCard;
