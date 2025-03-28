import Link from "next/link";
import React from "react";
import styles from "./SuperFood.module.scss";

const TransformGrassSuperfood = () => {
	return (
		<div className={styles.container}>
			<h1>Transform Grass into Superfood</h1>

			<section className={styles.section}>
				<h2>No Sickness in the Ocean</h2>
				<p>
					Dr. Maynard Murray discovered that ocean creatures remain disease‑free
					thanks to a perfect mineral environment.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Land Plants & Sea Minerals</h2>
				<p>
					Fertilizing fields with sea minerals makes plants highly immune to
					disease—benefitting both crops and livestock.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Grass: The Ultimate Land Plant</h2>
				<p>
					Research shows grass is the only plant that utilizes all 76 ocean
					minerals—unlike tomatoes or corn.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Economical Sea Minerals</h2>
				<p>
					Introducing <strong>GroPal</strong>—an organic sea mineral concentrate
					with 99% of the sodium removed for a dense, low‑sodium solution.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Transforming the Soil</h2>
				<h3>Soil Balance</h3>
				<p>
					Soil Balance forms an aerobic membrane that locks in carbon and
					nutrients, boosting natural topsoil formation.
				</p>
				<h3>Accelerated Carbon Sequestration</h3>
				<p>
					It drives carbon sequestration up to 10 times faster than compost,
					creating nutrient‑rich, moisture‑retentive soil.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Introducing MycorrPlus</h2>
				<p>
					By combining GroPal and Soil Balance, MycorrPlus (formerly GroPal
					Balance) transforms your soil into a nutrient‑rich superfood.
				</p>
			</section>

			<section className={styles.section}>
				<h2>How It Works</h2>
				<p>
					MycorrPlus triggers plants to secrete sugars (liquid carbon) that feed
					beneficial microbes. These microbes convert bound nutrients into
					plant‑ available food.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Why MycorrPlus Stands Out</h2>
				<p>
					It builds topsoil quickly by stimulating beneficial bacteria and
					mycorrhizal fungi, unlocking hidden nutrients and boosting plant
					growth.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Benefits</h2>
				<ul>
					<li>Improved soil structure and moisture retention</li>
					<li>Enhanced nutrient availability and increased CEC</li>
					<li>Up to 25–30% yield increase in the first year</li>
					<li>Faster plant growth overall</li>
				</ul>
			</section>
		</div>
	);
};

export default TransformGrassSuperfood;
