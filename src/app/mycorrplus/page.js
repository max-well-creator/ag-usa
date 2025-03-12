import Head from "next/head";

import MainContent from "../../components/MainContent";

export default function MycorrPlusPage() {
	return (
		<>
			<Head>
				<title>MyCorrPlus</title>
				<meta
					content="mycorrplus, soil conditioner, carbon sequestration, soil structure"
					name="keywords"
				/>
				<meta
					content="MycorrPlus is a bio stimulant that may greatly increase carbon sequestration and soil structure."
					name="description"
				/>
			</Head>
			<main>
				<MainContent />
			</main>
		</>
	);
}
