import "../styles/globals.css"
import type { AppProps } from "next/app"
import Navbar from "../components/layouts/Navbar"

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<Navbar>
			<Component {...pageProps} />
		</Navbar>
	);
}

export default MyApp;
