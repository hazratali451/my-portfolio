import Banner from "./components/Banner";
import Blogs from "./components/Blogs";
import ClientsFeedback from "./components/ClientsFeedback";
import Skills from "./components/Skills";

export default function Home() {
	return (
		<>
			<Banner />
			<Skills />
			<Blogs />
			<ClientsFeedback />
		</>
	);
}
