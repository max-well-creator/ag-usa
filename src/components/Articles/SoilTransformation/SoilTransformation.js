import React from "react";
import styles from "./SoilTransformation.module.scss";

const SoilTransformation = () => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<p className={styles.info}>AG-USA – Nov. 2017</p>
				<p className={styles.author}>By Paul Schneider Jr., AG-USA</p>
				<h1>Soil Transformation: Signs That Change Has Begun</h1>
			</header>

			<section className={styles.intro}>
				<p>
					Transforming the soil is key to so many benefits – from increased
					yields to healthier, more nutritious plants. Mycorr Plus customers
					have reported the following signs that soil transformation is
					underway. Go out and see if your soil shows any of these changes!
				</p>
			</section>

			<section className={styles.signs}>
				<ol>
					<li>
						<strong>Improved Soil Test Results:</strong> Within a few months,
						soil tests show increased nutrients, improved trace mineral levels,
						better P, K, and calcium availability, and balanced base saturation.
					</li>
					<li>
						<strong>Structuring of the Soil:</strong> When the soil is drier,
						you’ll notice it’s more crumbly with visible air pockets (1/4” to
						3/8”) and easier probe insertion compared to clumpy, untreated soil.
					</li>
					<li>
						<strong>Extra Moisture:</strong> Highly structured soil absorbs and
						retains moisture, ensuring that water is stored until needed.
					</li>
					<li>
						<strong>More Nutritious Plants:</strong> Healthier, glossier leaves
						and better forage quality indicate improved nutrient density.
					</li>
					<li>
						<strong>Less Weed Pressure:</strong> Correcting soil imbalances
						reduces the weed populations that thrive in problematic soil
						conditions.
					</li>
					<li>
						<strong>Large Fungi Networks:</strong> Abundant, white fungal
						strands signal that carbon sequestration is active and supporting
						robust fungal growth.
					</li>
					<li>
						<strong>Large Root Structures:</strong> Reports of 5-pound rutabagas
						and larger overall root mass indicate enhanced nutrient uptake.
					</li>
					<li>
						<strong>Improved Root Structure:</strong> Beyond size, look for
						better rhizomes, increased hair roots, and improved nodulation on
						legumes.
					</li>
					<li>
						<strong>More Earthworms &amp; Dung Beetles:</strong> As soil health
						improves, these organisms thrive and further enrich the soil.
					</li>
					<li>
						<strong>Fire Ant Mounds Dying:</strong> Thriving fungi break down
						fire ant eggs, reducing ant mound populations.
					</li>
					<li>
						<strong>Less Insect Pressure:</strong> Healthy plants with robust
						microbial support tend to attract fewer sapping insects.
					</li>
					<li>
						<strong>pH Moving Toward Neutral:</strong> Soil tests will show pH
						improvements, which can reduce the need for lime applications.
					</li>
				</ol>
			</section>
		</div>
	);
};

export default SoilTransformation;
