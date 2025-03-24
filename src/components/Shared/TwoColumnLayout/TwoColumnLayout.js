import React from "react";
import styles from "./TwoColumnLayout.module.scss";

export default function TwoColumnLayout() {
	return (
		<div className={styles.columns}>
			<section className={styles.section}>
				<h2>Challenges with Weak Soils</h2>
				<ul>
					<li>Weak soils cause issues</li>
					<li>Persistent weed problems</li>
					<li>Water runs off instead of soaking in</li>
					<li>Low production</li>
					<li>Poor animal health</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>Results of Healthy Soil</h2>
				<ul>
					<li>Nutrients become readily available</li>
					<li>Increased organic matter</li>
					<li>More nutritious plants</li>
					<li>Higher yields</li>
					<li>Healthier, more productive livestock</li>
				</ul>
			</section>
		</div>
	);
}
