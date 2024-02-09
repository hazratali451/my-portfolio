"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Collapse, Modal } from "react-bootstrap";
import { ArrowIcon, ContactIcon, LinkArrow, StarGroup } from "./Icon";

const Projects = () => {
	const [filter, setFilter] = React.useState("all");
	const [filteredData, setFilteredData] = React.useState(portfolio);
	const [show, setShow] = React.useState(false);
	const [active, setActive] = React.useState(null);

	React.useEffect(() => {
		if (filter === "all") {
			setFilteredData(portfolio);
		} else {
			const newData = portfolio.filter((item) => item.type.includes(filter));
			setFilteredData(newData);
		}
	}, [filter]);

	return (
		<>
			<div className="target-id" id="works" />
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
							<span>All</span>
						</button>
						<button
							className={`${
								filter === "frontend" ? "active" : ""
							} no-gutter`}
							type="button"
							onClick={() => setFilter("frontend")}
						>
							<span>Frontend</span>
						</button>
						<button
							className={`${
								filter === "full-stack" ? "active" : ""
							} no-gutter`}
							type="button"
							onClick={() => setFilter("full-stack")}
						>
							<span>Full Stack</span>
						</button>
					</div>
					<div className="row gy-5">
						{filteredData?.map((item, index) => (
							<div className="col-sm-6" key={item._id}>
								<div
									className="project-item"
									onClick={() => {
										setActive(item);
										setTimeout(() => {
											setShow(true);
										}, 0);
									}}
								>
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
				<Modal
					show={show}
					onHide={setShow}
					centered
					size="xl"
					className="__modal"
				>
					<Modal.Body>
						<Collapse in={active}>
							<div className="project-single">
								<div className="project-single-thumb">
									<Image
										src={active?.img}
										width={900}
										height={900}
										alt={active?.title}
									/>
								</div>
								<div className="project-single-content">
									<span className="badge">{active?.type}</span>
									<h2 className="title">{active?.title}</h2>
									<h6>Software Used</h6>
									<div className="technologies">
										{active?.tecnology?.map((item, index) => (
											<div key={index}>
												<Image
													src={item.img}
													width={36}
													height={36}
													alt={item.name}
												/>
											</div>
										))}
									</div>
									<Link href="" className="cmn-btn">
										<span>
											View Project <ContactIcon />
										</span>
									</Link>
									<div
										className="review-item mt-32"
										style={{ maxWidth: "419px" }}
									>
										<StarGroup />
										<blockquote>
											I have never seen a platform that is completely
											free, where creatives are given this much power
											to not just only show their work, but also
											network, get hired for doing what they enjoy
											and love. Tabulio is simply the BEST!!
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
									<div className="mt-4">
										<Link href="" className="text-gradient text-20">
											See All 51 Review <ArrowIcon />
										</Link>
									</div>
								</div>
							</div>
						</Collapse>
					</Modal.Body>
				</Modal>
			</section>
		</>
	);
};
const portfolio = [
	{
		img: "/img/portfolio.png",
		title: "Figma to Responsive React Website Development",
		tags: ["Frontend", "Backend", "Full Stack"],
		type: "frontend",
		_id: "1",
		tecnology: [
			{
				name: "React",
				img: "/img/skills/react.png",
			},
			{
				name: "Tailwind CSS",
				img: "/img/skills/tailwind.png",
			},
			{
				name: "Express JS",
				img: "/img/skills/express.png",
			},
		],
	},

	{
		img: "/img/portfolio.png",
		title: "Crypto Ecosystem Website Development",
		tags: ["Frontend", "Backend", "Full Stack"],
		type: "full-stack",
		_id: "2",
		tecnology: [
			{
				name: "React",
				img: "/img/skills/react.png",
			},
			{
				name: "Tailwind CSS",
				img: "/img/skills/tailwind.png",
			},
			{
				name: "Firebase",
				img: "/img/skills/firebase.png",
			},
		],
	},
	{
		img: "/img/portfolio.png",
		title: "Digital Agency Website Development",
		tags: ["Frontend", "Backend", "Full Stack"],
		type: "frontend",
		_id: "3",
		tecnology: [
			{
				name: "React",
				img: "/img/skills/react.png",
			},
			{
				name: "Bootstrap",
				img: "/img/skills/boostrap.png",
			},
			{
				name: "Mongo DB",
				img: "/img/skills/mongodb.png",
			},
		],
	},
	{
		img: "/img/portfolio.png",
		title: "Crypto Ecosystem Website Development",
		tags: ["Frontend", "Backend", "Full Stack"],
		type: "frontend",
		_id: "4",
		tecnology: [
			{
				name: "React",
				img: "/img/skills/react.png",
			},
			{
				name: "Bootstrap 5",
				img: "/img/skills/bootstrap.png",
			},
			{
				name: "Node JS",
				img: "/img/skills/nodejs.png",
			},
		],
	},
	{
		img: "/img/portfolio.png",
		title: "Crypto Ecosystem Website Development",
		tags: ["Frontend", "Backend", "Full Stack"],
		type: "full-stack",
		_id: "6",
		tecnology: [
			{
				name: "React",
				img: "/img/skills/react.png",
			},
			{
				name: "Tailwind CSS",
				img: "/img/skills/bootstrap.png",
			},
			{
				name: "Mui",
				img: "/img/skills/mui.png",
			},
		],
	},
	{
		img: "/img/portfolio.png",
		title: "Crypto Ecosystem Website Development",
		tags: ["Frontend", "Backend", "Full Stack"],
		type: "full-stack",
		_id: "5",
		tecnology: [
			{
				name: "React",
				img: "/img/skills/react.png",
			},
			{
				name: "Tailwind CSS",
				img: "/img/skills/tailwind.png",
			},
			{
				name: "CSS",
				img: "/img/skills/css.png",
			},
		],
	},
];
export default Projects;
