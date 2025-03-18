import Head from "next/head";

import MainContent from "../components/MainContent";

export default function Home() {
	return (
		<>
			<Head>
				<title>Home</title>
				<meta
					name="description"
					content="Home page. MycorrPlus, the new name for GroPal Balance, may be beneficial for farm and garden, livestock and human use."
				/>
				<meta
					name="keywords"
					content="home, ocean trace, mycorrplus, gropal balance, farm and garden, livestock"
				/>
			</Head>
			<div>
				<MainContent />
			</div>
		</>
	);
}
