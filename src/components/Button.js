import React from 'react';
import { Link } from 'gatsby';

const Button = ({ text, color, to, mr }) => {
	console.log(mr);
	return (
		<div
			className={`inline-flex text-white font-Inter font-semibold shadow-md hover:shadow-2xl hover:-translate-y-[2px] transition-all bg-orange border-0 py-3 px-7 focus:outline-none hover:bg-blue-600 rounded-xl text-md cursor-pointer ${
				color === 'blue' ? 'bg-blue' : ''
			} ${mr ? `mr-2` : ''}`}
		>
			<Link to={to}>{text}</Link>
		</div>
	);
};

export default Button;
