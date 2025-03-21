import Head from "next/head";

import About from "../../components/About/About";

export default function AboutPage() {
	return (
		<>
			<Head>
				<title>About</title>
				<meta
					content="about us, gropal balance, ag-usa, keep your moisture"
					name="keywords"
				/>
				<meta content="About us, GroPal Balance, AG-USA" name="description" />
			</Head>
			<main>
				<About />
			</main>
		</>
	);
}
