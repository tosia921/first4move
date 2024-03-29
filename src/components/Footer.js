import React from 'react';
import { Link } from 'gatsby';
import FbIcon from '../images/icons/fb.svg';

const Footer = () => {
	return (
		<footer className="mt-10 mb-10 page-padding">
			<div className="h-[2px] mb-8 bg-grey "></div>
			<div className="flex flex-col gap-3 md:gap-6 md:flex-row">
				<div className="w-full pt-2 font-Baloo">
					<h5 className="font-bold text-lg pb-2">About Us</h5>
					<p className="pb-2 max-w-[95%] xl:max-w-[90%] xxl:max-w-[80%]">
					123 Renovator is a progressive Edinburgh-based company specializing in general home improvements for residential and commercial customers.
					</p>
					<a className="md:w-8 md:h-auto" href="https://www.facebook.com/123RenovatorEdinburgh" target="_blank" rel="noreferrer">
						<FbIcon />
					</a>
				</div>
				<div className="w-full pt-2 font-Baloo">
					<h5 className="font-bold text-lg pb-2">Our Services</h5>
					<p className="text-footer">Painting and Decorating</p>
					<p className="text-footer">Bathroom Renovation</p>
					<p className="text-footer">Kitchen Renovation</p>
					<p className="text-footer">Plastering</p>
					<p className="text-footer">Maitanance</p>
					<p className="text-footer">Flooring</p>
					<p className="text-footer">Tiling</p>
				</div>
				<div className="w-full pt-2 font-Baloo">
					<h5 className="font-bold text-lg pb-2">Contact Information</h5>
					<p className="text-footer">Edinburgh, EH17 8EU</p>

					<a href="tel:07809433290" className="text-footer ">
						<p>07809 433290</p>
					</a>
					<a href="mailto:123renovatoredinburgh@gmail.com" className="text-footer ">
						<p>123renovatoredinburgh@gmail.com</p>
					</a>
					<p className="text-footer mt-2">
						We mostly work around <strong>Edinburgh, East Lothian and West Lothian</strong>
					</p>
				</div>
				<div className="w-full pt-2 font-Baloo">
					<h5 className="font-bold text-lg pb-2">Usefull Links</h5>
					<Link className="text-footer block" to="/sitemap/sitemap-0.xml">
						Sitemap
					</Link>
					<Link className="text-footer block" to="/termsandconditions">
						Terms and Conditions
					</Link>
				</div>
			</div>
			<div className="w-full flex justify-center flex-col text-xs items-center mt-10">
				<p className="text-center">&copy; Copyright 2023 Lukasz Jaskiewicz www.123renovatoredinburgh.co.uk. All rights reserved.</p>
				<p className="text-center mt-2">
					Developed by{' '}
					<a className="font-bold" href="mailto:tomaszposiadala@gmail.com">
						Tomasz Posiadala
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
