import React from "react";
import styles from "./SevenKeys.module.scss";

const SevenKeys = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				7 Keys for Activating the Carbon Sequestration Switch
			</h1>

			<section className={styles.section}>
				<h2 className={styles.keyTitle}>Key 1 – Balance the Soil</h2>
				<p>
					Create a thriving Soil Food Web by removing toxins, remediating salts,
					and balancing nutrients. MycorrPlus-A and O make it simple.
				</p>
			</section>

			<section className={styles.section}>
				<h2 className={styles.keyTitle}>Key 2 – Avoid Overgrazing</h2>
				<p>
					Prevent overgrazing to protect deep roots. Rotational grazing
					maintains a robust root system and promotes fungal dominance,
					essential for carbon sequestration.
				</p>
			</section>

			<section className={styles.section}>
				<h2 className={styles.keyTitle}>Key 3 – Diversify Crops</h2>
				<p>
					Use crop rotation and cover crops to boost microbial diversity and
					deepen roots, enhancing nutrient uptake and soil structure.
				</p>
			</section>

			<section className={styles.section}>
				<h2 className={styles.keyTitle}>Key 4 – Reduce Chemical Inputs</h2>
				<p>
					Minimize herbicides, fungicides, and insecticides that damage soil
					biology. MycorrPlus helps break down these chemicals while
					replenishing nutrients.
				</p>
			</section>

			<section className={styles.section}>
				<h2 className={styles.keyTitle}>Key 5 – Minimize Tillage</h2>
				<p>
					Limit tillage to protect beneficial mycorrhizal networks. No-till
					practices preserve the soil structure necessary for carbon
					sequestration.
				</p>
			</section>

			<section className={styles.section}>
				<h2 className={styles.keyTitle}>Key 6 – Keep Ground Covered</h2>
				<p>
					Maintain plant or mulch cover to conserve moisture, prevent erosion,
					and support microbial life.
				</p>
			</section>

			<section className={styles.section}>
				<h2 className={styles.keyTitle}>Key 7 – Use MycorrPlus</h2>
				<p>
					MycorrPlus-A and O are the secret to success—they detoxify the soil,
					balance pH and nutrients, boost beneficial microbes, and create
					extensive mycorrhizal networks.
				</p>
			</section>
		</div>
	);
};

export default SevenKeys;
