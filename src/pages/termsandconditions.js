import React from 'react';
import Layout from '../components/Layout';

const termsandconditions = () => {
	return (
		<Layout>
			<section className="page-padding my-10">
				<div>
					<h1 className="font-Baloo text-3xl mb-4">Website usage terms and conditions</h1>
					<p className="mb-2">
						Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which
						together with our privacy policy govern [business name]’s relationship with you in relation to this website.
					</p>
					<p className="mb-2">
						If you disagree with any part of these terms and conditions, please do not use our website. The term ‘[business name]’ or ‘us’ or ‘we’ refers to the owner of the website whose
						registered office is [address].
					</p>
					<p className="mb-2">Our company registration number is [company registration number and place of registration]. The term ‘you’ refers to the user or viewer of our website.</p>
					<p className="mb-2">The use of this website is subject to the following terms of use:</p>
					<ul className="list-disc">
						<li className="my-2 ml-4 ">The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
						<li className="my-2 ml-4">
							This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, the following personal information may be stored by us for use by third
							parties: [insert list of information].
						</li>
						<li className="my-2 ml-4">
							Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials
							found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude
							liability for any such inaccuracies or errors to the fullest extent permitted by law.
						</li>
						<li className="my-2 ml-4">
							Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that
							any products, services or information available through this website meet your specific requirements.
						</li>
						<li className="my-2 ml-4">
							This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics.
							Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
						</li>
						<li className="my-2 ml-4">All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.</li>
						<li className="my-2 ml-4">Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.</li>
						<li className="my-2 ml-4">
							From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify
							that we endorse the website(s). We have no responsibility for the content of the linked website(s).
						</li>
						<li className="my-2 ml-4">
							Your use of this website and any dispute arising out of such use of the website is subject to the laws of England, Northern Ireland, Scotland and Wales.
						</li>
					</ul>
				</div>
			</section>
		</Layout>
	);
};

export default termsandconditions;

export const Head = () => (
	<>
		<title>Terms & Conditions</title>
		<meta
			name="description"
			content="Terms and Conditions page. We know that every renovation project is different, that's why we make it as easy as possible to contact us and get a quick quote of your project."
		/>
	</>
);
