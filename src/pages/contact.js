import React from 'react';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import Email from '../images/icons/contact-email.svg';
import Phone from '../images/icons/contact-phone.svg';
import Location from '../images/icons/contact-location.svg';
import ContactForm from '../components/ContactForm';

const contact = () => {
	return (
		<Layout>
			<PageHero label="Contact" page="contact" />
			<div className="page-padding">
				<div className="flex flex-col md:items-start">
					<h2 className="text-3xl  md:text-4xl font-Baloo mb-3 font-bold">Contact Details</h2>
					<div className="orange-line"></div>
				</div>
				<section className="flex flex-col md:flex-row">
					<div className="w-full flex flex-col md:w-[40%] md:h-[500px] py-2 md:py-10 justify-between">
						<div className="mb-4 flex">
							<span className="max-w-[70px] md:max-w-[150px]">
								<Email className="w-full h-auto" />
							</span>
							<div className="flex justify-center flex-col ml-3">
								<p className="">Email:</p>
								<p className="text-sm md:text-base font-semibold">123renovatoredinburgh@gmail.com </p>
							</div>
						</div>
						<div className="mb-4 flex">
							<span className="max-w-[70px] md:max-w-[150px]">
								<Phone className="w-full h-auto" />
							</span>
							<div className="flex justify-center flex-col ml-3">
								<p>Phone:</p>
								<p className="text-sm md:text-base font-semibold">0786 653 234</p>
							</div>
						</div>
						<div className="mb-4 flex">
							<span className="max-w-[70px] md:max-w-[150px]">
								<Location className="w-full h-auto" />
							</span>
							<div className="flex flex-col justify-center ml-3">
								<p className="">Address:</p>
								<p className="text-sm md:text-base font-semibold leading-tight">
									6 Example Street<br></br>Edinburgh, EH124W
								</p>
							</div>
						</div>
					</div>
					<div className="w-full md:w-[70%]">
						<div class="mapouter">
							<div class="gmap_canvas">
								<iframe
									className="w-full h-[500px]"
									src="https://maps.google.com/maps?q=Edinburgh&t=&z=11&ie=UTF8&iwloc=&output=embed"
									frameborder="0"
									scrolling="no"
									marginheight="0"
									marginwidth="0"
								></iframe>
								<a href="https://fmovies-online.net"></a>
							</div>
						</div>
					</div>
				</section>
				<div className="flex flex-col mt-10 md:items-start">
					<h2 className="text-3xl  md:text-4xl font-Baloo mb-3 font-bold">Drop Us a Message</h2>
					<div className="orange-line"></div>
				</div>
			</div>
			<section className="page-padding">
				<ContactForm />
			</section>
		</Layout>
	);
};

export default contact;

export const Head = () => (
	<>
		<title>Contact us</title>
		<meta name="description" content="First4move is based in Edinburgh, Scotland. " />
	</>
);
