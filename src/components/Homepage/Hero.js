import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Button from '../Button';

// SVG's
import BlobOne from '../../images/blobs/blob1.svg';
import BlobTwo from '../../images/blobs/blob2.svg';
import Circle from '../../images/blobs/circleBackground.svg';
import Triangle from '../../images/blobs/triangle.svg';

const Hero = () => {
	return (
		<section className="page-padding mt-4 flex relative justify-center flex-col md:flex-row-reverse md:items-center md:columns-2 md:gap-2">
			<div className="grid w-full py-0 pb-1 md:pb-0 md:py-6">
				<div
					className="relative bg-orange justify-self-end self-end w-[90%] h-[90%] rounded-bl-3xl"
					style={{
						gridArea: '1/1',
					}}
				></div>
				<StaticImage
					src="../../images/HERO.png"
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
			<div className="w-full">
				<h1 className=" text-3xl md:text-2xl lg:text-4xl xxl:text-5xl font-extrabold mt-2 font-Baloo">
					Have a Peace of Mind <br></br> Knowing Your Project is <br></br> in Good Hands
					<span className="text-orange ml-1">.</span>
				</h1>
				<p className="text-sm lg:text-base sm:max-w-[80%] mb-6 mt-4 lg:mb-8 lg:mt-6 font-Baloo text-grey">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
				</p>
				<div className="flex mr-5">
					<Button text={'Services'} to="/services" mr />
					<Button text={'Contact Us'} to="/contact" color={'blue'} />
				</div>
			</div>
			<div className="hidden lg:block absolute -top-2 xl:top-[20px] left-[15%] -z-10">
				<BlobOne />
			</div>
			<div className="hidden lg:block absolute -bottom-2 xl:bottom-[15%] left-[40%] xl:left-[30%] -z-10">
				<BlobTwo />
			</div>
			<div className="hidden lg:block absolute bottom-0 lg:-left-[6rem] xl:-left-[calc((100vw-1024px)/2)] xxl:-left-[calc((100vw-1240px)/2)] xxxl:-left-[calc((100vw-1440px)/2)] -z-10 h-[20%] w-auto">
				<Circle style={{ width: '100%', height: '100%' }} />
			</div>
			<div className="hidden lg:block absolute top-[35%] xl:top-[25%] left-[40%] -z-10">
				<Triangle />
			</div>
		</section>
	);
};

export default Hero;
