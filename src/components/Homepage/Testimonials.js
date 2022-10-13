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
					<p className="small-text-grey md:max-w-[70%]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</p>
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
							<div className="mx-5 sm:mx-20 md:mx-14  xxl:mx-16 p-6 bg-orange text-lg h-full flex flex-col justify-between font-Baloo text-white rounded-bl-3xl cursor-grab active:cursor-grabbing">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow.
								<p className="text-right text-xl font-bold">Mark Smith</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="h-[450px] pb-16">
							<div className="mx-5 sm:mx-20 md:mx-14  xxl:mx-16 p-6 bg-orange text-lg h-full flex flex-col justify-between font-Baloo text-white rounded-bl-3xl cursor-grab active:cursor-grabbing">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow.
								<p className="text-right text-xl font-bold">Mark Smith</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="h-[450px] pb-16">
							<div className="mx-5 sm:mx-20 md:mx-14  xxl:mx-16 p-6 bg-orange text-lg h-full flex flex-col justify-between font-Baloo text-white rounded-bl-3xl cursor-grab active:cursor-grabbing">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow.
								<p className="text-right text-xl font-bold">Mark Smith</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="h-[450px] pb-16">
							<div className="mx-5 sm:mx-20 md:mx-14  xxl:mx-16 p-6 bg-orange text-lg h-full flex flex-col justify-between font-Baloo text-white rounded-bl-3xl cursor-grab active:cursor-grabbing">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow.
								<p className="text-right text-xl font-bold">Mark Smith</p>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
};

export default Testimonials;
