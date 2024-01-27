import Image from "next/image";
import Link from "next/link";
import { Facebook, Github, Linkedin } from "./Icon";

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="footer-info">
					<Image
						width={60}
						height={60}
						src={"/img/hazrat.png"}
						alt="hazrat"
					/>
					<h5 className="name mt-3 mb-8">Hazrat Ali</h5>
					<div className="social-media">
						<Link href="">
							<Github />
						</Link>
						<Link href="">
							<Linkedin />
						</Link>
						<Link href="">
							<Facebook />
						</Link>
					</div>
					<ul className="link-list mt-4 mt-md-5">
						{links?.map((item, index) => (
							<li key={index}>
								<Link href={item?.path}>{item?.name}</Link>
							</li>
						))}
					</ul>
					<ul className="link-list mt-2 pt-1">
						{links2?.map((item, index) => (
							<li key={index}>
								<Link href={item?.path}>{item?.name}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="d-flex flex-wrap justify-content-evenly justify-content-md-between align-items-center pt-20 gap-2">
					<div>&copy; 2023HazratAli.All rights reserved</div>
					<ul className="link-list">
						<li>
							<Link href="#">Terms</Link>
						</li>
						<li>
							<Link href="#">Privacy</Link>
						</li>
						<li>
							<Link href="#">Cookies</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

const links = [
	{
		name: "Home",
		path: "/",
	},
	{
		name: "Portfolio",
		path: "#portfolio",
	},
	{
		name: "Works",
		path: "#works",
	},
	{
		name: "Contact",
		path: "#contact",
	},
];
const links2 = [
	{
		name: "My projects",
		path: "",
	},
	{
		name: "My skills & Tools",
		path: "",
	},
	{
		name: "Me at Youtube",
		path: "",
	},
	{
		name: "My Blog",
		path: "",
	},
];

export default Footer;
