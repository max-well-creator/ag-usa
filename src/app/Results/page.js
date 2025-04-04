import Head from "next/head";

import MycorrPlusSoilLabs from "../../components/Results/Results";

export default function Results() {
	return (
		<>
			<Head>
				<title>Results</title>
				<meta content="soil labs, gropal balance, soil ph" name="keywords" />
				<meta
					content="Soil labs demonstrate the effectiveness of GroPal Balance at balancing nutrients in the field, including pH"
					name="description"
				/>
			</Head>
			<main>
				<MycorrPlusSoilLabs />
			</main>
		</>
	);
}
