import Head from "next/head";

import MainContent from "../../components/MainContent";

export default function MyCorrPlusFunctionalityPage() {
	return (
		<>
			<Head>
				<title>How Mycorr Works</title>
				<meta
					content="mycorrplus, carbon sequestration, soil structure"
					name="keywords"
				/>
				<meta
					content="MycorrPlus works wonderfully by prompting the plant to sequester huge amounts of carbon into the soil."
					name="description"
				/>
			</Head>
			<main>
				<MainContent />
			</main>
		</>
	);
}
