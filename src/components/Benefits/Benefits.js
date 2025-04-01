import Link from "next/link";
import React from "react";
import styles from "./Benefits.module.scss";

const BenefitsOfMycorrPlus = () => {
	return (
		<div className={styles.container}>
			<h1>Benefits of MycorrPlus</h1>

			<section className={styles.section}>
				<h2>Keep Your Crops Growing When It’s Hot and Dry</h2>
				<p>
					Richard Fish experienced success—MycorrPlus acts like a center pivot
					for dryland farmers!
				</p>
				<blockquote className={styles.quote}>
					<p>
						"When the hot, dry July weather came and grass normally went
						dormant, the MycorrPlus grass just kept coming on."
					</p>
				</blockquote>
			</section>

			<div className={styles.twoColumn}>
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

			<section className={styles.section}>
				<h2>Freeing Tied-Up Nutrients</h2>
				<p>
					Properly functioning soil is flocculated—air, mostly nitrogen, flows
					in and helps release nutrients. MycorrPlus stimulates beneficial
					bacillus bacteria and mycorrhizal fungi to flush toxins and salts.
				</p>
				<p>
					Imagine an expanding aerobic membrane that holds carbon and vital
					nutrients.
				</p>
			</section>

			<h2>How to Evaluate MycorrPlus</h2>
			<div className={styles.twoColumn}>
				<section className={styles.section}>
					<h2>Visible Results</h2>
					<ul>
						<li>Fewer weeds</li>
						<li>Less standing water</li>
						<li>Reduced compaction</li>
						<li>Lower visible salts</li>
					</ul>
				</section>
				<section className={styles.section}>
					<h2>Soil Tests</h2>
					<ul>
						<li>Lower nematode counts</li>
						<li>Higher organic matter</li>
						<li>Increased CEC</li>
					</ul>
				</section>
				<section className={styles.section}>
					<h2>Vegetation Changes</h2>
					<ul>
						<li>Higher protein levels</li>
						<li>Improved RFV</li>
						<li>Increased yields</li>
						<li>Higher Brix readings</li>
					</ul>
				</section>

				<section className={styles.section}>
					<h2>Livestock Improvements</h2>
					<ul>
						<li>Stronger calves at birth</li>
						<li>Faster weight gain</li>
						<li>Increased milk production</li>
						<li>Better overall health</li>
					</ul>
				</section>
			</div>
		</div>
	);
};

export default BenefitsOfMycorrPlus;
