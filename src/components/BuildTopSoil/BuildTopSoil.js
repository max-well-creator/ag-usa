import Link from "next/link";
import React from "react";
import styles from "./BuildTopSoil.module.scss";

const FastestTopsoilMethod = () => {
	return (
		<div className={styles.container}>
			<h1>The Fastest Method for Building Topsoil</h1>

			<section className={styles.section}>
				<h2>Why Other Methods Fall Short</h2>
				<ul>
					<li>Compost and organic matter provide short-term gains only.</li>
					<li>Rock weathering releases nutrients but doesn’t build soil.</li>
					<li>
						Natural fertilizers like fish and kelp are costly and less
						effective.
					</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>Carbon Sequestration: Nature’s Fast Lane</h2>
				<p>
					The fastest way to build topsoil is by harnessing carbon from plant
					roots. Plants use photosynthesis to produce sugars—85–90% of which
					come from the air—that act as a glue to form stable, water-retentive
					soil rich in humus.
				</p>
			</section>

			<section className={styles.section}>
				<h2>How MycorrPlus Accelerates Soil Building</h2>
				<ul>
					<li>
						<strong>Stimulates Microbes:</strong> Boosts beneficial bacteria and
						mycorrhizal fungi.
					</li>
					<li>
						<strong>Supplies Nutrients:</strong> Delivers essential nutrients,
						including ocean trace minerals.
					</li>
					<li>
						<strong>Boosts Sugar Secretion:</strong> Encourages plants to
						secrete more sugars into the soil.
					</li>
					<li>
						<strong>Activation:</strong> Works best with at least 1.1" of
						moisture and temperatures above 45°F.
					</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>Benefits of Rapid Carbon Sequestration</h2>
				<ul>
					<li>Enhanced soil structure and water retention</li>
					<li>Improved nutrient availability and CEC</li>
					<li>Up to 25–30% yield increase in the first year</li>
					<li>Cost-effective: only 32–64 oz/acre needed</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>Chemical Fertilizers vs. Carbon Sequestration</h2>
				<p>
					When plants get nutrients too easily from chemicals, they secrete
					fewer sugars, reducing the microbial processes that build soil.
					Standard tests miss 97% of these microbially released nutrients.
				</p>
			</section>
		</div>
	);
};

export default FastestTopsoilMethod;
