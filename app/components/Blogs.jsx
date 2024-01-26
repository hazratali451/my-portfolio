"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeft, ArrowRight, LinkArrow } from "./Icon";
const Blogs = () => {
	const ref = React.useRef(null);

	const goNext = () => {
		ref.current.swiper.slideNext();
	};
	const goPrev = () => {
		ref.current.swiper.slidePrev();
	};
	return (
		<>
			<section className="blog-section">
				<div className="container">
					<div className="section-title">
						<h3 className="title">My Blogs</h3>
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
								<div className="post-item">
									<Link href="" className="img">
										<Image
											src={"/img/blog.png"}
											width={500}
											height={500}
											alt="blog"
										/>
									</Link>
									<h5 className="title pt-3">
										<Link href="" className="d-block text-white">
											Exploring Trends and Innovations
										</Link>
									</h5>
									<p>
										During summer this yogurt is very good for your
										stomach also. Making Dhoi....
									</p>
									<Link
										href=""
										className="text-gradient text-underline"
									>
										<span>Learn More</span> <LinkArrow />
									</Link>
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
export default Blogs;
