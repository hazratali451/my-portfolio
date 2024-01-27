/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeft, ArrowRight, StarGroup } from "./Icon";
const ClientsFeedback = () => {
	const ref = React.useRef(null);

	const goNext = () => {
		ref.current.swiper.slideNext();
	};
	const goPrev = () => {
		ref.current.swiper.slidePrev();
	};
	return (
		<>
			<section className="clients-section">
				<img
					src={"/img/noisy-shape2.png"}
					className="noisy-shape-2"
					alt=""
				/>
				<div className="container">
					<div className="section-title">
						<h3 className="title">My Clients Feedback</h3>
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
								<div className="review-item">
									<StarGroup />
									<blockquote>
										I have never seen a platform that is completely
										free, where creatives are given this much power to
										not just only show their work, but also network,
										get hired for doing what they enjoy and love.
										Tabulio is simply the BEST!!
									</blockquote>
									<div className="client">
										<div className="img">
											<Image
												src="/img/client.png"
												width={72}
												height={72}
												alt="Eze Michael"
											/>
										</div>
										<div className="info">
											<h5 className="name">Eze Michael</h5>
											<span className="position">
												Creative Director
											</span>
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					<div className="d-flex align-items-center gap-3 justify-content-center pt-4 mt-lg-3">
						<button
							className="bg-transparent no-gutter border-0"
							type="button"
							onClick={() => goPrev()}
						>
							<ArrowLeft id="1" />
						</button>
						<button
							className="bg-transparent no-gutter border-0"
							type="button"
							onClick={() => goNext()}
						>
							<ArrowRight id="1" />
						</button>
					</div>
				</div>
			</section>
		</>
	);
};
const data = ["", "", "", "", "", "", ""];
export default ClientsFeedback;
