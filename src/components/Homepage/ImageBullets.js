import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Images
// import Image from '../images/imageex.png';

// Icons
import Check from '../../images/check.svg';
import Blob from '../../images/blobs/BlobBackground.svg';
import Subtract from '../../images/blobs/Subtract.svg';

const ImageBullets = () => {
	return (
		<div className="page-padding md:flex mb-12 relative md:my-[75px]">
			<div className="hidden lg:block absolute -top-[100px] lg:-right-[0rem] xl:-right-[calc((100vw-1040px)/2)] xxl:-right-[calc((100vw-1260px)/2)] -z-10 w-[17.5%] ">
				<Blob className="w-full h-auto" />
			</div>
			<div className="grid w-full py-6 md:w-1/2 relative">
				<div
					className="relative bg-orange justify-self-end self-end w-[90%] h-[90%] rounded-bl-3xl"
					style={{
						gridArea: '1/1',
					}}
				></div>
				<div className="absolute top-[20%] -right-[27px] hidden lg:block">
					<Subtract />
				</div>
				<StaticImage
					src="../../images/image2.png"
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
							<p className="mt-[2px] md:mt-0 ml-2 w-[calc(100%-30px)]">We use only high quality and tested materials We use only high quality and tested materials</p>
						</div>
					</li>
					<li className="mb-4">
						<div className="flex items-start">
							<div className="w-[30px]">
								<Check className="w-full h-full" />
							</div>
							<p className="mt-[2px] md:mt-0 ml-2 w-[calc(100%-30px)]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ImageBullets;
