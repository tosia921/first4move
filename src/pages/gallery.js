import React from 'react';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import Gallery from '../components/Gallery';
import { graphql } from 'gatsby';
import Image from 'gatsby-plugin-sanity-image';

const gallery = ({ data }) => {
	console.log(data);
	return (
		<Layout>
			<PageHero label="Gallery" page="gallery" />
			<section className="page-padding">
				<div className="flex flex-col items-center md:items-start">
					<h2 className="text-3xl  md:text-4xl font-Baloo mb-3 font-bold">Changing Quality Of Living</h2>
					<p className="small-text-grey md:text-left max-w-[90%] md:max-w-[70%]">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
					</p>
					<div className="orange-line"></div>
				</div>
				<div className="my-10">
					<Gallery data={data.allSanityGallery.edges[0].node.imagegallery} />
				</div>
			</section>
		</Layout>
	);
};

export default gallery;

export const query = graphql`
	query {
		allSanityGallery {
			edges {
				node {
					imagegallery {
						...ImageWithPreview
						asset {
							height
							width
							url
						}
					}
				}
			}
		}
	}
`;
