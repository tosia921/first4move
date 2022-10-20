import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main className="flex-1 flex flex-col justify-center">{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
