import React from 'react';
import Button from '../components/Button';

const ContactForm = () => {
	return (
		<form className="w-full" action="https://formsubmit.co/tomaszposiadala@gmail.com" method="POST">
			<div className="md:flex">
				<div>
					<div className="flex flex-wrap -mx-3 mb-6">
						<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
							<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="FirstName">
								First Name
							</label>
							<input
								className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
								id="grid-first-name"
								type="text"
								placeholder="Enter your Name..."
								name="FirstName"
							/>
							<p className="text-red-500 text-xs italic">Please fill out this field.</p>
						</div>
						<div className="w-full md:w-1/2 px-3">
							<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="LastName">
								Last Name
							</label>
							<input
								className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-last-name"
								type="text"
								placeholder="Enter your Last Name..."
								name="LastName"
							/>
						</div>
					</div>
					<div className="flex flex-wrap -mx-3 mb-6">
						<div className="w-full px-3">
							<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="Email">
								E-mail
							</label>
							<input
								className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="email"
								type="email"
								name="Email"
							/>
							<p className="text-gray-600 text-xs italic">Some tips - as long as needed</p>
						</div>
					</div>
					<div className="flex flex-wrap -mx-3 mb-6">
						<div className="w-full px-3">
							<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="Phone">
								Phone Number
							</label>
							<input
								className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="phone"
								type="text"
								name="Phone"
							/>
							<p className="text-gray-600 text-xs italic">Some tips - as long as needed</p>
						</div>
					</div>
				</div>
				<div className="flex w-full flex-wrap mb-6 md:ml-5">
					<div className="w-full ">
						<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="Message">
							Message
						</label>
						<textarea
							className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-72 md:h-full resize-none"
							id="message"
							name="Message"
						></textarea>
					</div>
				</div>
			</div>
			<input type="hidden" name="_next" value="https://first4move.netlify.app/email-success-page" />
			<input type="hidden" name="_subject" value="New email form submission from First4Move.co.uk"></input>
			<input type="text" name="_honey" style={{ display: 'none' }}></input>
			<input type="hidden" name="_template" value="table"></input>
			<div className="mt-5 md:mt-0">
				<button
					type="submit"
					className="inline-flex text-white font-Inter font-semibold shadow-md hover:shadow-2xl hover:-translate-y-[2px] transition-all bg-orange border-0 py-3 px-7 focus:outline-none hover:bg-blue-600 rounded-xl text-md cursor-pointer"
				>
					SEND
				</button>
			</div>
		</form>
	);
};

export default ContactForm;
