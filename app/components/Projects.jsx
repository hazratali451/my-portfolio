"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ContactIcon, LinkArrow } from "./Icon";

const Projects = () => {
	const [filter, setFilter] = React.useState(null);
	const [filteredData, setFilteredData] = React.useState(portfolio);
	React.useEffect(() => {
		if (filter === "all") {
			setFilteredData(portfolio);
		} else {
			const newData = portfolio.filter((item) => item.type.includes(filter));
			setFilteredData(newData);
		}
	}, [filter]);
	return (
		<section className="projects-section">
			<div className="container">
				<div className="section-title mb-4">
					<h3 className="title">My Projects</h3>
					<Link href="" className="cmn-btn">
						<span>
							See All Works <ContactIcon />{" "}
						</span>
					</Link>
				</div>
				<div className="tab-menu">
					<button
						className={`${filter === "all" ? "active" : ""} no-gutter`}
						type="button"
						onClick={() => setFilter("all")}
					>
						All
					</button>
					<button
						className={`${
							filter === "frontend" ? "active" : ""
						} no-gutter`}
						type="button"
						onClick={() => setFilter("frontend")}
					>
						Frontend
					</button>
					<button
						className={`${
							filter === "full-stack" ? "active" : ""
						} no-gutter`}
						type="button"
						onClick={() => setFilter("full-stack")}
					>
						Full Stack
					</button>
				</div>
				<div className="row gy-5">
					{filteredData?.map((item, index) => (
						<div className="col-sm-6" key={item._id}>
							<div className="project-item">
								<div className="img">
									<Image
										src={item.img}
										width={800}
										height={800}
										alt="project"
									/>
								</div>
								<div className="content d-flex justify-content-between align-items-start gap-2">
									<div className="w-0 flex-grow-1">
										<h4 className="title">{item.title}</h4>
										<ul className="tags">
											{item.tags.map((tag, index) => (
												<li key={index}>{tag}</li>
											))}
										</ul>
									</div>
									<LinkArrow />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
const portfolio = [
	{
		img: "/img/portfolio.png",
		title: "Crypto Ecosystem Website Development",
		tags: ["Frontend", "Backend", "Full Stack"],
		type: "frontend",
		_id: "1",
	},

	{
		img: "/img/portfolio.png",
		title: "Crypto Ecosystem Website Development",
		tags: ["Frontend", "Backend", "Full Stack"],
		type: "full-stack",
		_id: "2",
	},
	{
		img: "/img/portfolio.png",
		title: "Crypto Ecosystem Website Development",
		tags: ["Frontend", "Backend", "Full Stack"],
		type: "frontend",
		_id: "3",
	},
	{
		img: "/img/portfolio.png",
		title: "Crypto Ecosystem Website Development",
		tags: ["Frontend", "Backend", "Full Stack"],
		type: "frontend",
		_id: "4",
	},
	{
		img: "/img/portfolio.png",
		title: "Crypto Ecosystem Website Development",
		tags: ["Frontend", "Backend", "Full Stack"],
		type: "full-stack",
		_id: "6",
	},
	{
		img: "/img/portfolio.png",
		title: "Crypto Ecosystem Website Development",
		tags: ["Frontend", "Backend", "Full Stack"],
		type: "full-stack",
		_id: "5",
	},
];
export default Projects;
