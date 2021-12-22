import type { GetStaticProps, NextPage } from "next";
import { HomeBreadcrumb } from "../breadcrumb";
import Breadcrumb from "../components/molecules/Breadcrumb";
import ChangeLang from "../components/molecules/ChangeLang";

interface HomeProps {
	header: string
}

const Home: NextPage<HomeProps> = (props) => {

	return (
	<>
		<Breadcrumb 
			items={HomeBreadcrumb}
			/>

		<h1>{props.header}</h1>
		<ChangeLang locale="english">English</ChangeLang>
		<ChangeLang locale="srpski">Srpski</ChangeLang>
	</>
	);
}

export const getStaticProps: GetStaticProps = (context) => {

	const header = context.locale === "srpski"
		? "Lažna Prodavnica"
		: "Fake Store";

	return ({
		props: {
			header
		}
	});
}

export default Home;