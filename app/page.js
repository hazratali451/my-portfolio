import Banner from "./components/Banner";
import Blogs from "./components/Blogs";
import ClientsFeedback from "./components/ClientsFeedback";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import WorkedWith from "./components/WorkedWith";
import YoutubeMe from "./components/YoutubeMe";

export default function Home() {
	return (
		<>
			<Banner />
			<Skills />
			<YoutubeMe />
			<Blogs />
			<ClientsFeedback />
			<WorkedWith />
			<Contact />
		</>
	);
}
