import React from "react";
import styles from "./SevenKeysForSoil.module.scss";

const SevenKeysForSoil = () => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<p className={styles.date}>2017 October</p>
				<p className={styles.author}>By Paul Schneider Jr., AG-USA</p>
				<h1>7 Keys for Developing Wonderful Soil</h1>
				<p className={styles.intro}>
					Maximizing carbon sequestration is the secret for developing highly
					structured soil full of organic matter. By cooperating with nature and
					putting these keys into practice, you can achieve exceptional soil
					health.
				</p>
			</header>

			<section className={styles.section}>
				<h2>Key 1: Create “Friendly” Soil</h2>
				<p className={styles.keyContent}>
					To foster a thriving Soil Food Web, create a friendly living
					environment by removing toxins, remediating salt issues, balancing
					nutrients and pH, and eliminating compaction.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Key 2: Keep Grass at a Good Length</h2>
				<p className={styles.keyContent}>
					Avoid cutting or grazing grass too low to ensure a deep, healthy root
					system. Techniques such as rotational and mob grazing help maintain
					optimal grass height, fostering a favorable environment for fungi,
					which are crucial for carbon sequestration and nutrient uptake.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Key 3: Diversify</h2>
				<p className={styles.keyContent}>
					Crop rotation and cover crops diversify the microbial community in the
					soil. Deep-rooted plants help transport liquid carbon and structure
					the soil more effectively.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Key 4: Avoid Chemical Applications</h2>
				<p className={styles.keyContent}>
					Herbicides, fungicides, and insecticides disrupt soil biology by
					killing beneficial microbes. Mycorr Plus can break down these
					chemicals, allowing healthy soil life to flourish.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Key 5: Limit Cultivation</h2>
				<p className={styles.keyContent}>
					Tillage disrupts soil life—especially fungi—and allows valuable carbon
					to escape. Minimizing tillage or using no-till practices preserves
					mycorrhizal networks and enhances carbon sequestration.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Key 6: Keep the Ground Covered</h2>
				<p className={styles.keyContent}>
					Bare soil loses moisture and breaks down aggregates. Cover crops
					conserve moisture, protect the soil from sun damage, and ensure a
					continuous food source for mycorrhizal fungi, which are essential for
					forming humus.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Key 7: Mycorr Plus (GPB)</h2>
				<p className={styles.keyContent}>
					Mycorr Plus takes carbon sequestration to a new level. It devours
					toxins, remediates salts, restores nutrient and pH balance, inoculates
					the soil with mycorrhizal fungi, nitrogen-fixing bacteria, and 70
					aerobic bacteria, and feeds these microbes to establish robust fungal
					networks. This key supports all the other six keys to create optimal
					soil conditions.
				</p>
			</section>
		</div>
	);
};

export default SevenKeysForSoil;
