import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {
	return (
		<section className="page-padding">
			<div>
				<div className="w-full my-12 mb-4 flex flex-col justify-center items-center ">
					<h2 className="text-3xl text-center md:text-4xl font-Baloo mb-3 font-bold">See what other say about us...</h2>
					<p className="small-text-grey md:max-w-[70%]">Our main advertising is done by "word of mouth" so we make sure to please every single customer.</p>
					<div className="orange-line"></div>
				</div>
			</div>
			<div className="w-full overflow-hidden mb-14">
				<Swiper
					// install Swiper modules
					modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
					spaceBetween={0}
					navigation
					autoplay={{
						delay: 3500,
						disableOnInteraction: true,
					}}
					breakpoints={{
						640: {
							slidesPerView: 1,
							spaceBetween: 0,
						},

						768: {
							slidesPerView: 2,
							spaceBetween: 0,
						},
						1300: {
							slidesPerView: 3,
							spaceBetween: 0,
						},
					}}
					pagination={{ clickable: true }}
					onSwiper={(swiper) => console.log(swiper)}
					onSlideChange={() => console.log('slide change')}
				>
					<SwiperSlide>
						<div className="h-[450px] pb-16">
							<div className="mx-5 sm:mx-20 md:mx-14  xxl:mx-16 p-6 bg-orange text-base h-full flex flex-col justify-between font-Baloo text-white rounded-bl-3xl cursor-grab active:cursor-grabbing">
								123Renovator recently renovated our bathroom and we couldn't be happier with the result. They were able to come up with creative solutions to make the most of our space, while also staying true to our vision. Working with them was a pleasure, as they are incredibly organized and pay attention to detail. We highly recommend them for any renovation project!
								<p className="text-right text-xl font-bold">Clifton Jarrett</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="h-[450px] pb-16">
							<div className="mx-5 sm:mx-20 md:mx-14  xxl:mx-16 p-6 bg-orange text-base h-full flex flex-col justify-between font-Baloo text-white rounded-bl-3xl cursor-grab active:cursor-grabbing">
								I recently hired 123 Renovator Edinburgh to build a deck for my house and I am so glad I did. He was able to provide options that fit my budget and he stayed true to his timeline. The finished product looks great! WOuld definitly hire again!
								<p className="text-right text-xl font-bold">Norene Granville</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="h-[450px] pb-16">
							<div className="mx-5 sm:mx-20 md:mx-14  xxl:mx-16 p-6 bg-orange text-base h-full flex flex-col justify-between font-Baloo text-white rounded-bl-3xl cursor-grab active:cursor-grabbing">
								Lukasz was a perfect pick when it came to renovating our stairs. We had a vision of what we wanted and he worked tirelessly to make sure the job was done right. We couldn't be happier with the finished result. Highly recommend him for any renovations you have in mind!
								<p className="text-right text-xl font-bold">Ada Davison</p>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
};

export default Testimonials;
