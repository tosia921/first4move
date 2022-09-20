import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Spin as Hamburger } from 'hamburger-react';

//icons
import Logo from '../images/Logo.svg';
import FbIcon from '../images/icons/fb.svg';
import PhoneIcon from '../images/icons/phone-icon.svg';
import MailIcon from '../images/icons/mail-icon.svg';

const Header = () => {
	// const headerRef = useRef();

	const [isOpen, setOpen] = useState(false);
	const [isSticky, setSticky] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', handleSticky);
		return () => {
			window.removeEventListener('scroll', handleSticky);
		};
	});

	const handleSticky = () => {
		const scrollTop = window.scrollY;
		if (!isOpen) {
			scrollTop >= 150 ? setSticky(true) : setSticky(false);
		}
	};

	return (
		<header className={`sticky top-0 left-0 transition-all`}>
			<div className={`relative z-30 ${isSticky ? '-translate-y-10 md:-translate-y-14' : ''}`}>
				<div className="bg-orange h-10 md:h-14 flex justify-between items-center gap-3 md:gap-5 text-sm px-4 md:px-8 inter md:justify-end">
					<div className="flex items-center">
						<div className="mr-2 md:w-8 md:h-auto">
							<PhoneIcon />
						</div>

						<a href="tel:0738849293" className="inter text-white font-semibold text-base  md:text-lg">
							0738 849 293
						</a>
					</div>
					<div className="hidden md:flex items-center">
						<div className="mr-2 md:w-8 md:h-auto">
							<MailIcon />
						</div>
						<a
							href="mailto:123renovatoredinburgh@gmail.com"
							className="inter text-white font-semibold text-base md:text-lg"
						>
							123renovatoredinburgh@gmail.com
						</a>
					</div>
					<div className="md:w-8 md:h-auto">
						<FbIcon />
					</div>
				</div>
				<div className={`h-12 md:h-16 px-4 md:px-8 flex items-center justify-between shadow-sm bg-white`}>
					<div className="">
						<Logo />
					</div>
					<div className={`md:hidden -mr-2`}>
						<Hamburger toggled={isOpen} toggle={setOpen} className="" />
					</div>
					<nav className={`gap-4 hidden md:flex font-Baloo text-lg font-bold`}>
						<Link className="" to="/" activeClassName="text-orange">
							Home
						</Link>
						<Link to="/about" activeClassName="text-orange">
							About Us
						</Link>
						<Link to="/services" activeClassName="text-orange">
							Services
						</Link>
						<Link to="/gallery" activeClassName="text-orange">
							Gallery
						</Link>
						<Link to="/projects" activeClassName="text-orange">
							Projects
						</Link>
						<Link to="/contact" activeClassName="text-orange">
							Contact
						</Link>
					</nav>
				</div>
			</div>
			<nav
				className={`gap-4 flex transition-all font-Baloo absolute top-0 right-full h-screen w-screen bg-white flex-col text-4xl font-bold justify-center items-center ${
					isOpen ? 'right-0' : ''
				}  md:hidden`}
			>
				<Link className="" to="/" activeClassName="text-orange">
					Home
				</Link>
				<Link to="/about" activeClassName="text-orange">
					About Us
				</Link>
				<Link to="/services" activeClassName="text-orange">
					Services
				</Link>
				<Link to="/gallery" activeClassName="text-orange">
					Gallery
				</Link>
				<Link to="/projects" activeClassName="text-orange">
					Projects
				</Link>
				<Link to="/contact" activeClassName="text-orange">
					Contact
				</Link>
			</nav>
		</header>
	);
};

export default Header;
