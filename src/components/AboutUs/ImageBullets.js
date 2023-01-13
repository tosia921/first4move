import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Images
// import Image from '../images/imageex.png';

// Icons
import Check from '../../images/checkBlue.svg';
import Blob from '../../images/blobs/BlobBackground.svg';
import Subtract from '../../images/blobs/SubtractOrange.svg';

const ImageBullets = () => {
	return (
		<div className="page-padding flex flex-col-reverse md:flex-row mb-12 md:mb-2 relative md:my-[20px]">
			<div className="hidden lg:block absolute -top-[100px] lg:-right-[6rem] xl:-right-[calc((100vw-1040px)/2)] xxl:-right-[calc((100vw-1260px)/2)] -z-10 w-[17.5%]  ">
				<Blob className="w-full h-auto" />
			</div>
			<div className="image-wrapper--blue image-border-radius-br w-100 md:w-1/2">
				<StaticImage src="../../images/image2.png" alt="Renovated Bathroom" layout="fullWidth" aspectRatio={1 / 1} />
			</div>
			<div className="font-Baloo font-bold text-2xl md:w-1/2 md:flex md:flex-col md:mt-20 md:pl-[10%]">
				<h3 className="text-3xl lg:text-4xl">
					We are <span className="text-blue">Proud</span> <br /> of our work
				</h3>
				<div className="orange-line"></div>
				<ul className="font-medium text-base md:text-lg">
					<li className="mb-4">
						<div className="flex items-start">
							<div className="w-[30px]">
								<Check className="w-full h-full" />
							</div>
							<p className="mt-[2px] md:mt-0 ml-2 w-[calc(100%-30px)]">We have high quality standards</p>
						</div>
					</li>
					<li className="mb-4">
						<div className="flex items-start">
							<div className="w-[30px]">
								<Check className="w-full h-full" />
							</div>
							<p className="mt-[2px] md:mt-0 ml-2 w-[calc(100%-30px)]">We have 10 years of experience</p>
						</div>
					</li>
					<li className="mb-4">
						<div className="flex items-start">
							<div className="w-[30px]">
								<Check className="w-full h-full" />
							</div>
							<p className="mt-[2px] md:mt-0 ml-2 w-[calc(100%-30px)]">Public Liability Insurance for up to 1 milion pounds</p>
						</div>
					</li>
					<li className="mb-4">
						<div className="flex items-start">
							<div className="w-[30px]">
								<Check className="w-full h-full" />
							</div>
							<p className="mt-[2px] md:mt-0 ml-2 w-[calc(100%-30px)]">We use only high quality and tested materials</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ImageBullets;
