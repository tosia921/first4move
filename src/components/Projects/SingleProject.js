import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import CheckOrange from '../../images/check.svg';
import CheckBlue from '../../images/checkBlue.svg';

const SingleProject = ({ number, name, text1, text2, bullets, secondary }) => {
	console.log(bullets);
	return (
		<article className="md:my-[75px] mb-10">
			<div className={`md:flex ${secondary ? 'md:flex-row-reverse' : ''} md:gap-14 flex-1`}>
				<div className="md:flex relative md:w-1/2 ">
					<div className="md:w-full flex1">
						<h3 className={`text-xl md:text-2xl  font-Baloo ${secondary ? 'text-blue' : 'text-orange'} font-bold mb-0 md:mb-4`}>
							<span className="text-2xl md:text-3xl mr-2">{number}</span>
							{name}
						</h3>
						<div className="flex flex-col-reverse md:flex-col mb-4 md:mb-0">
							<p className="text-sm md:text-lg font-Baloo text-grey md:max-w-lg  mb-2 md:mb-10">{text1}</p>
							{text2 && <p className="text-sm md:text-lg font-Baloo text-grey md:max-w-lg  mb-2 md:mb-10">{text2}</p>}

							<div className={`grid w-full py-6 md:py-0 md:pb-6 relative`}>
								<div
									className={`relative ${secondary ? 'bg-blue' : 'bg-orange'} justify-self-end self-start w-[90%] h-[75%] rounded-br-3xl`}
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
				</div>
				<div className=" mb-2 relative md:w-1/2">
					<div className="flex flex-col md:flex-col">
						<h3 className={`text-xl md:text-2xl order-1 md:order-2 font-Baloo mb-0 md:mb-4 ${secondary ? 'text-blue' : 'text-orange'} font-bold`}>What have we done?</h3>
						<div className="order-3 md:order-3">
							<div className="font-Baloo font-bold md:max-w-[90%] md:flex md:flex-col ">
								<ul className="font-medium text-base md:text-lg">
									{bullets.map((bullet) => (
										<li className="mb-4">
											<div className="flex items-start">
												<div className="w-[30px]">{secondary ? <CheckBlue className="w-full h-full" /> : <CheckOrange className="w-full h-full" />}</div>
												<p className="mt-[2px] md:mt-0 ml-2 w-[calc(100%-30px)]">{bullet}</p>
											</div>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="order-2 md:order-1">
							<div className="grid w-full py-6 md:py-0 md:pb-6 relative">
								<div
									className={`relative ${secondary ? 'bg-blue' : 'bg-orange'} justify-self-end self-end w-[90%] h-[75%] rounded-br-3xl`}
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
					</div>
				</div>
			</div>
		</article>
	);
};

export default SingleProject;
