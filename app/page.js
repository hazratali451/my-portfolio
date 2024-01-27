import Banner from "./components/Banner";
import Blogs from "./components/Blogs";
import ClientsFeedback from "./components/ClientsFeedback";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import WorkedWith from "./components/WorkedWith";

export default function Home() {
	return (
		<>
			<Banner />
			<Skills />
			<Blogs />
			<ClientsFeedback />
			<WorkedWith />
			<Contact />
		</>
	);
}
