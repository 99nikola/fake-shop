import "../styles/globals.css"
import type { AppProps } from "next/app"
import Navbar from "../components/layouts/Navbar"
import { wrapper } from "../store";
import { useEffect } from "react";
import * as ga from "react-ga";
import { useRouter } from "next/router";
ga.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string);


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {

    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url: any) => {
            ga.pageview(url);
        }
        //When the component is mounted, subscribe to router changes
        //and log those page views
        router.events.on('routeChangeComplete', handleRouteChange)

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method
        return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events]);

	return (
		<Navbar>
			<Component {...pageProps} />
		</Navbar>
	);
}

export default wrapper.withRedux(MyApp);