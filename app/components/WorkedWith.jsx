/* eslint-disable @next/next/no-img-element */
import Marquee from "react-fast-marquee";

const WorkedWith = () => {
	return (
		<section className="works-with-section">
			<div className="container">
				<div className="section-title">
					<h3 className="title">I Have Worked With Companies</h3>
				</div>
			</div>
			<Marquee>
				{data.map((item, index) => (
					<div className="worked-with" key={index}>
						<img src={item?.img} alt="worked-with" />
					</div>
				))}
			</Marquee>
		</section>
	);
};

const data = [
	{
		img: "/img/worked-with/1.png",
	},
	{
		img: "/img/worked-with/2.png",
	},
	{
		img: "/img/worked-with/3.png",
	},
	{
		img: "/img/worked-with/4.png",
	},
	{
		img: "/img/worked-with/8.png",
	},
	{
		img: "/img/worked-with/9.png",
	},
	{
		img: "/img/worked-with/10.png",
	},
	{
		img: "/img/worked-with/11.png",
	},
	{
		img: "/img/worked-with/1.png",
	},
	{
		img: "/img/worked-with/2.png",
	},
	{
		img: "/img/worked-with/3.png",
	},
	{
		img: "/img/worked-with/4.png",
	},
	{
		img: "/img/worked-with/8.png",
	},
	{
		img: "/img/worked-with/9.png",
	},
	{
		img: "/img/worked-with/10.png",
	},
	{
		img: "/img/worked-with/11.png",
	},
];
export default WorkedWith;
