import type { NextPage } from "next";
import { HomeBreadcrumb } from "../breadcrumb";
import Breadcrumb from "../components/molecules/Breadcrumb";

const Home: NextPage = () => {

	return (
	<>
		<h1>Home</h1>
		<Breadcrumb 
			items={HomeBreadcrumb}
		/>
	</>
	);
}

export default Home;