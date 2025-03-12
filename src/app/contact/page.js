import Head from "next/head";

import MainContent from "../../components/MainContent";

export default function Contact() {
	return (
		<>
			<Head>
				<title>Contact</title>
				<meta
					content="contact, ag-usa, products, organic, fertilizer, soil conditioner"
					name="keywords"
				/>
				<meta
					content="Contact AG-USA to find out more about GroPal Balance, our agricultural fertilizer and soil conditioner."
					name="description"
				/>
			</Head>
			<main>
				<MainContent />
			</main>
		</>
	);
}
