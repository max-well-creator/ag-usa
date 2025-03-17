import Head from "next/head";

import FAQ from "../../components/FAQ/FAQ";

export default function FaqPage() {
	return (
		<>
			<Head>
				<title>Frequently Asked Questions</title>
				<meta
					content="faq, frequently asked questions, gropal balance, soil conditioner"
					name="keywords"
				/>
				<meta
					content="Frequently asked questions concerning GroPal Balance, and its ability to transform the soil."
					name="description"
				/>
			</Head>
			<main>
				<FAQ />
			</main>
		</>
	);
}
