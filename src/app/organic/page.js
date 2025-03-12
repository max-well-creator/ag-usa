import Head from "next/head";

import MainContent from "../../components/MainContent";
import MycorrPlusOrganic from "@/components/Organic/Organic";

export default function OrganicPage() {
	return (
		<>
			<Head>
				<title>Organic</title>
				<meta
					content="organic, gropal balance, soil conditioner"
					name="keywords"
				/>
				<meta
					content="Yes, organic use is a good fit for GroPal Balance. No harmful chemicals, rather it conditions the soil."
					name="description"
				/>
			</Head>
			<main>
				<MycorrPlusOrganic />
			</main>
		</>
	);
}
