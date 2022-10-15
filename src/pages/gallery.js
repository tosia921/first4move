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
			<div className="my-10">
				<Gallery data={data.allSanityGallery.edges[0].node.imagegallery} />
			</div>
			{/* <div className="my-10">
				{data.allSanityGallery.edges[0].node.imagegallery.map((image) => {
					console.log(image);
					return (
						<Image
							// pass asset, hotspot, and crop fields
							{...image}
							// tell Sanity how large to make the image (does not set any CSS)
							width={500}
							// style it how you want it
							style={{
								width: '100%',
								height: '100%',
								objectFit: 'cover',
							}}
						/>
					);
				})}
			</div> */}
			{/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
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
