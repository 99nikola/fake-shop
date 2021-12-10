import "../styles/globals.css"
import type { AppProps } from "next/app"
import Navbar from "../components/layouts/Navbar"
import { wrapper } from "../store";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<Navbar>
			<Component {...pageProps} />
		</Navbar>
	);
}

export default wrapper.withRedux(MyApp);
