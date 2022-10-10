import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main className="grow px-4 md:px-16 lg:px-[6rem] xl:px-0 xl:w-[1024px] xl:mx-auto xxl:w-[1240px] xxxl:w-[1440px]">{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
