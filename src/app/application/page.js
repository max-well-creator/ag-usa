import Head from "next/head";

import MycorrPlusInstructions from "@/components/ApplicationInstructions/Instructions";

export default function ApplicationGuidePage() {
	return (
		<>
			<Head>
				<title>Application Guide</title>
				<meta
					content="application, guidelines, gropal balance, soil, keep your moisture"
					name="keywords"
				/>
				<meta
					content="Application guidelines for GroPal Balance. See your soil transformed right before your eyes!"
					name="description"
				/>
			</Head>
			<main>
				<MycorrPlusInstructions />
			</main>
		</>
	);
}
