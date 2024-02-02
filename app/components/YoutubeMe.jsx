"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeft, ArrowRight, VideoIcon } from "./Icon";
const YoutubeMe = () => {
	const ref = React.useRef(null);

	const goNext = () => {
		ref.current.swiper.slideNext();
	};
	const goPrev = () => {
		ref.current.swiper.slidePrev();
	};
	return (
		<>
			<section className="youtube-section">
				<div className="container">
					<div className="section-title">
						<h3 className="title">Me at Youtube</h3>
						<div>
							<Link href={""} className="btn--outline">
								<span>Explore More</span>
							</Link>
						</div>
					</div>

					<Swiper
						ref={ref}
						breakpoints={{
							0: {
								slidesPerView: 1.2,
								spaceBetween: 20,
							},
							500: {
								slidesPerView: 1.4,
								spaceBetween: 20,
							},
							768: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							1024: {
								slidesPerView: 3,
								spaceBetween: 32,
							},
						}}
					>
						{data.map((item, index) => (
							<SwiperSlide key={index}>
								<div className="youtube-item">
									<Link
										href={"https://youtube.com"}
										className="link"
										target="_blank"
									/>
									<div className="img">
										<div className="icon">
											<VideoIcon />
										</div>
										<Image
											src={"/img/youtube.png"}
											width={500}
											height={500}
											alt={"youtube"}
										/>
										<span className="duration">20:42</span>
									</div>
									<div className="youtube-content">
										<h5 className="title">
											Create Impactful Websites
										</h5>
										<ul className="info">
											<li>
												<span>10k views</span>
											</li>
											<li>
												<span>10 hours ago</span>
											</li>
										</ul>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					<div className="d-flex align-items-center gap-3 justify-content-center pt-4 mt-lg-3">
						<button
							className="bg-transparent no-gutter border-0 slider-arrow"
							type="button"
							onClick={() => goPrev()}
						>
							<ArrowLeft />
						</button>
						<button
							className="bg-transparent no-gutter border-0 slider-arrow"
							type="button"
							onClick={() => goNext()}
						>
							<ArrowRight />
						</button>
					</div>
				</div>
			</section>
		</>
	);
};
const data = ["", "", "", "", "", "", ""];
export default YoutubeMe;
