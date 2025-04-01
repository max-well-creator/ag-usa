import Link from "next/link";
import React from "react";
import styles from "./Benefits.module.scss";

const BenefitsOfMycorrPlus = () => {
	return (
		<div className={styles.container}>
			<h1>Benefits of MycorrPlus</h1>

			<section className={styles.full}>
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

					<p>Weak soils cause issues</p>
					<p>Persistent weed problems</p>
					<p>Water runs off instead of soaking in</p>
					<p>Low production</p>
					<p>Poor animal health</p>
				</section>

				<section className={styles.section}>
					<h2>Results of Healthy Soil</h2>

					<p>Nutrients become readily available</p>
					<p>Increased organic matter</p>
					<p>More nutritious plants</p>
					<p>Higher yields</p>
					<p>Healthier, more productive pvestock</p>
				</section>
			</div>

			<section className={styles.full}>
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

					<p>Fewer weeds</p>
					<p>Less standing water</p>
					<p>Reduced compaction</p>
					<p>Lower visible salts</p>
				</section>
				<section className={styles.section}>
					<h2>Soil Tests</h2>

					<p>Lower Linematode counts</p>
					<p>Higher organic matter</p>
					<p>Increased CEC</p>
				</section>
				<section className={styles.section}>
					<h2>Vegetation Changes</h2>

					<p>Higher protein levels</p>
					<p>Improved RFV</p>
					<p>Increased yields</p>
					<p>Higher Brix readings</p>
				</section>

				<section className={styles.section}>
					<h2>Livestock Improvements</h2>

					<p>Stronger calves at birth</p>
					<p>Faster weight gain</p>
					<p>Increased milk production</p>
					<p>Better overall health</p>
				</section>
			</div>
		</div>
	);
};

export default BenefitsOfMycorrPlus;
