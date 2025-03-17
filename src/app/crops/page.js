import Head from "next/head";
import CropApplicationGuidelines from "../../components/CropApplication/CropApplication";

export default function CropsPage() {
	return (
		<>
			<Head>
				<title>Crops</title>
				<meta
					content="crops, applications, gropal balance, ag-usa, row crops, hay"
					name="keywords"
				/>
				<meta
					content="Crops applications. Applying GroPal Balance to pasture and hay, row crops, gardens and trees."
					name="description"
				/>
			</Head>
			<main>
				<CropApplicationGuidelines />
			</main>
		</>
	);
}
