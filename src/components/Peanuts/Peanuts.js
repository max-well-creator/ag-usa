import Link from "next/link";
import React from "react";
import styles from "./Peanuts.module.scss";

const PeanutProgram = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Don't Conform; Transform!</h1>
			<h2 className={styles.subtitle}>
				Improve Your Soil & Boost Peanut Yields
			</h2>

			<section className={styles.section}>
				<p className={styles.text}>
					Traditional chemical programs for peanuts often harm your soil. Our
					AG-USA Peanut Program uses a biostimulant and foliar fertilizer to
					rejuvenate your soil—overcoming compaction, displacing harmful
					nematodes, and replacing costly fungicides.
				</p>
			</section>

			<section className={styles.section}>
				<h3 className={styles.sectionTitle}>Key Components</h3>
				<ol className={styles.orderedList}>
					<li>
						<strong>MycorrPlus-A:</strong>
						<ul className={styles.list}>
							<li>
								Mix with water and apply in the row (or broadcast in the fall)
								for superior nodulation.
							</li>
							<li>
								Stimulates carbon sequestration to build rich, structured soil
								and boost root growth.
							</li>
							<li>Cost: $80/gal by bucket, $71/gal by tote.</li>
						</ul>
					</li>
					<li>
						<strong>SupressPlus:</strong>
						<ul className={styles.list}>
							<li>
								Foliar fertilizer that replaces fungicides like Bravo and
								Headline.
							</li>
							<li>
								Suppresses fungal diseases via chloride while nourishing soil
								life.
							</li>
							<li>Cost: $40/gal by bucket, $38/gal by tote.</li>
						</ul>
					</li>
				</ol>
			</section>

			<section className={styles.section}>
				<h3 className={styles.sectionTitle}>Benefits</h3>
				<ul className={styles.list}>
					<li>Builds organic matter and improves CEC</li>
					<li>Reduces compaction and enhances moisture retention</li>
					<li>Boosts microbial activity for healthier roots</li>
					<li>Improves peanut nodulation and overall crop immunity</li>
					<li>Reduces chemical input costs</li>
					<li>Potential 10–20% yield increase and cost savings up to 20%</li>
				</ul>
			</section>

			<section className={styles.section}>
				<p className={styles.text}>
					Grow more peanuts on fewer inputs while naturally restoring your soil.
					Our program is available on a trial basis for 20 peanut farmers with
					discounted pricing on a minimum of 15 acres.
				</p>
			</section>
		</div>
	);
};

export default PeanutProgram;
