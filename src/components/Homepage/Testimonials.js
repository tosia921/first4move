import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {
	return (
		<section>
			<div>
				<div className="w-full my-12 mb-4 flex flex-col justify-center items-center ">
					<h2 className="text-3xl md:text-4xl font-Baloo mb-3 font-bold">See what other say about us...</h2>
					<p className="small-text-grey md:max-w-[70%]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</p>
					<div className="orange-line"></div>
				</div>
			</div>
			<div className="w-full overflow-hidden h-[600px]">
				<Swiper
					// install Swiper modules
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					spaceBetween={200}
					slidesPerView={3}
					pagination={{ clickable: true }}
					onSwiper={(swiper) => console.log(swiper)}
					onSlideChange={() => console.log('slide change')}
				>
					<SwiperSlide>
						<div className="h-[300px] bg-orange"></div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="h-[300px] bg-orange"></div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="h-[300px] bg-orange"></div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="h-[300px] bg-orange"></div>
					</SwiperSlide>
					...
				</Swiper>
			</div>
		</section>
	);
};

export default Testimonials;
