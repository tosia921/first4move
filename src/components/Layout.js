import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main className="grow px-4 md:px-8">{children}</main>
			<footer>footer</footer>
		</div>
	);
};

export default Layout;
