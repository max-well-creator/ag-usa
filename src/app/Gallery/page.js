import Head from "next/head";

import Gallery from "../../components/Gallery/Gallery";

export default function PhotoGalleryPage() {
	return (
		<>
			<Head>
				<title>Photo Gallery</title>
				<title>GroPal Balance photo gallery</title>
				<meta
					content="GroPal Balance, photo gallery, customer testimonial"
					name="keywords"
				/>
				<meta
					content="GroPal Balance gallery of pictures, showing the response of soil and plants to this product"
					name="description"
				/>
			</Head>
			<main>
				<Gallery />
			</main>
		</>
	);
}
