import "bootstrap/dist/css/bootstrap.min.css";
import { Inter, Inter_Tight, Manrope } from "next/font/google";
import Image from "next/image";
import "swiper/scss";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.scss";

const manrope = Manrope({ subsets: ["latin"] });
const inter_tight = Inter_Tight({ subsets: ["latin"] });
const inter = Inter({
	weight: ["400", "500", "600", "700", "800"],
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	title: "Hazrat Ali",
	description: "Hazrat Alis personal portfolio website",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={
					manrope.className + inter_tight.className + inter.className
				}
			>
				<Image
					src={"/img/noisy-shape1.png"}
					alt={"noisy"}
					className="right-top-image"
					width={703}
					height={962}
				/>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
