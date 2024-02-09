/* eslint-disable @next/next/no-img-element */

const Skills = () => {
	return (
		<>
			<div className="target-id" id="portfolio" />
			<section className="skills-section">
				<div className="container">
					<div className="section-title">
						<h3 className="title">My Skills & Tools</h3>
						<div className="txt1" style={{ maxWidth: "438px" }}>
							Highly skilled at progressive <br /> enhancement design
							systems & UI Engineering
						</div>
					</div>
					<div className="skills">
						{data.map((item, index) => (
							<div className="skill" key={index}>
								<img src={item.img} alt="skill" className="img1" />
								<img src={item.img2} alt="skill" className="img2" />
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

const data = [
	{
		img: "/img/skills/html.png",
		img2: "/img/skills/react.png",
	},
	{
		img: "/img/skills/bootstrap.png",
		img2: "/img/skills/tailwind.png",
	},
	{
		img: "/img/skills/firebase.png",
		img2: "/img/skills/css.png",
	},
	{
		img: "/img/skills/js.png",
		img2: "/img/skills/express.png",
	},
	{
		img: "/img/skills/mongodb.png",
		img2: "/img/skills/mui.png",
	},
	{
		img: "/img/skills/nodejs.png",
		img2: "/img/skills/next.png",
	},
	{
		img: "/img/skills/next-js.svg",
		img2: "/img/skills/nodejs.png",
	},
	{
		img: "/img/skills/react.png",
		img2: "/img/skills/html.png",
	},
	{
		img: "/img/skills/tailwind.png",
		img2: "/img/skills/bootstrap.png",
	},
	{
		img: "/img/skills/css.png",
		img2: "/img/skills/firebase.png",
	},
	{
		img: "/img/skills/express.png",
		img2: "/img/skills/js.png",
	},
	{
		img: "/img/skills/mui.png",
		img2: "/img/skills/mongodb.png",
	},
];
export default Skills;
