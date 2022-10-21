import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import CheckOrange from '../../images/check.svg';
import CheckBlue from '../../images/checkBlue.svg';

const SingleProject = ({ number, name, text1, text2, bullets, secondary, projectName, id }) => {
	return (
		<article id={id} className="md:my-[75px] mb-10">
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
									{projectName === 'kitchen' && (
										<StaticImage src="../../images/projects/project-kitchen/kitchen-after.png" alt="Renovated Kitchen" layout="fullWidth" aspectRatio={1 / 1} />
									)}
									{projectName === 'bathroom1' && (
										<StaticImage src="../../images/projects/project-lazienka-1/lazienka1-after.jpg" alt="Renovated Bathroom" layout="fullWidth" aspectRatio={1 / 1} />
									)}
									{projectName === 'bathroom2' && (
										<StaticImage src="../../images/projects/project-lazienka-2/laznienka2-after.jpg" alt="Renovated Bathroom" layout="fullWidth" aspectRatio={1 / 1} />
									)}
									{projectName === 'bathroom3' && (
										<StaticImage src="../../images/projects/project-lazienka-3/lazienka3-after.jpg" alt="Renovated Bathroom" layout="fullWidth" aspectRatio={1 / 1} />
									)}
									{projectName === 'bathroom4' && (
										<StaticImage src="../../images/projects/project-lazienka-4/lazienka4-after.jpg" alt="Renovated Bathroom" layout="fullWidth" aspectRatio={1 / 1} />
									)}
									{projectName === 'bathroom5' && (
										<StaticImage src="../../images/projects/projekt-lazienka-5/lazienka5-after.jpg" alt="Renovated Bathroom" layout="fullWidth" aspectRatio={1 / 1} />
									)}
									{projectName === 'tiles' && (
										<StaticImage src="../../images/projects/project-plytki/plytki-after.jpg" alt="Living room heated tiles" layout="fullWidth" aspectRatio={1 / 1} />
									)}
									{projectName === 'decking' && (
										<StaticImage src="../../images/projects/project-decking/decking-after.jpg" alt="Garden new decking" layout="fullWidth" aspectRatio={1 / 1} />
									)}
									{projectName === 'stairs' && <StaticImage src="../../images/projects/project-stairs/stairs-agter.jpg" alt="new stairs" layout="fullWidth" aspectRatio={1 / 1} />}
									{projectName === 'shop' && <StaticImage src="../../images/projects/projekt-lshop/shop-after.jpg" alt="Renovated shop" layout="fullWidth" aspectRatio={1 / 1} />}
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
									{projectName === 'kitchen' && (
										<StaticImage src="../../images/projects/project-kitchen/kitchen-beforter.jpeg" alt="Kitchen before Renovation" layout="fullWidth" aspectRatio={1 / 1} />
									)}
									{projectName === 'bathroom1' && (
										<StaticImage src="../../images/projects/project-lazienka-1/lazienka-1-before.jpg" alt="Kitchen before renovation" layout="fullWidth" aspectRatio={1 / 1} />
									)}
									{projectName === 'bathroom2' && (
										<StaticImage src="../../images/projects/project-lazienka-2/lazienka2-before.jpg" alt="bathroom before renovation" layout="fullWidth" aspectRatio={1 / 1} />
									)}
									{projectName === 'bathroom3' && (
										<StaticImage src="../../images/projects/project-lazienka-3/lazienka3-before.jpeg" alt="bathroom before renovation" layout="fullWidth" aspectRatio={1 / 1} />
									)}
									{projectName === 'bathroom4' && (
										<StaticImage src="../../images/projects/project-lazienka-4/lazienka4-before.jpg" alt="bathroom before renovation" layout="fullWidth" aspectRatio={1 / 1} />
									)}
									{projectName === 'bathroom5' && (
										<StaticImage src="../../images/projects/projekt-lazienka-5/lazienka5-before.jpg" alt="bathroom before renovation" layout="fullWidth" aspectRatio={1 / 1} />
									)}
									{projectName === 'tiles' && (
										<StaticImage src="../../images/projects/project-plytki/plytki-before.jpg" alt="living room before renovation" layout="fullWidth" aspectRatio={1 / 1} />
									)}
									{projectName === 'decking' && (
										<StaticImage src="../../images/projects/project-decking/decking-before.jpeg" alt="garden before installing decking" layout="fullWidth" aspectRatio={1 / 1} />
									)}
									{projectName === 'stairs' && (
										<StaticImage src="../../images/projects/project-stairs/stairrs-before.jpg" alt="stairs before renovation" layout="fullWidth" aspectRatio={1 / 1} />
									)}
									{projectName === 'shop' && (
										<StaticImage src="../../images/projects/projekt-lshop/shop-before.jpg" alt="shop before renovation" layout="fullWidth" aspectRatio={1 / 1} />
									)}
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
