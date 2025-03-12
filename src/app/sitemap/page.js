import Head from "next/head";

import MainContent from "../../components/MainContent";

export default function Sitemap() {
	return (
		<>
			<Head>
				<title>Sitemap</title>
				<meta
					content="sitemap, ag-usa.net, gropal balance, highly structured soil"
					name="keywords"
				/>
				<meta
					content="Sitemap for AG-USA.net  Look into all the answers available for transforming your soil."
					name="description"
				/>
			</Head>
			<main>
				<MainContent />
			</main>
		</>
	);
}
