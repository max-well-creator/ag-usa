import Link from "next/link";
import React from "react";
import styles from "./Sequestion.module.scss";

const Sequestion = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Great Soil Is Your Solution</h1>
			<h2 className={styles.subtitle}>Reasons to Sequester More Carbon</h2>
			<p className={styles.byline}>By Dr. Mercola</p>

			<section className={styles.section}>
				<h3 className={styles.heading}>Story at-a-Glance</h3>
				<ul className={styles.list}>
					<li>
						<strong>Regenerating Soil:</strong> Plants thrive by partnering with
						soil microbes.
					</li>
					<li>
						Excessive synthetic fertilizers damage this natural relationship.
					</li>
					<li>
						No-till and cover crops help soils capture more greenhouse gases.
					</li>
					<li>Healthy soil is our planet’s “black gold” that gives life.</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h3 className={styles.heading}>Nature’s Symbiotic System</h3>
				<p>
					In nature, plants share a mutually beneficial relationship with
					microorganisms in their root zone. These microbes feed on plant
					exudates and return vital nutrients such as nitrogen, phosphorus, and
					potassium.
				</p>
				<p>
					When forced to rely on synthetic NPK, plants reduce their energy
					output for feeding microbes, resulting in nutrient-poor growth and
					diminished natural defenses.
				</p>
			</section>

			<section className={styles.section}>
				<h3 className={styles.heading}>
					Why Synthetic Fertilizers Harm the Planet
				</h3>
				<p>
					Although they boost growth in the short term, synthetic fertilizers
					disrupt the natural root–microbe exchange. Less than half is absorbed
					by plants; the rest pollutes water systems, causing algal blooms and
					dead zones.
				</p>
			</section>

			<section className={styles.section}>
				<h3 className={styles.heading}>Changing Practices in Soil Health</h3>
				<p>
					The USDA’s NRCS now promotes regenerative practices that build a
					thriving soil microbiome—allowing farmers to achieve high yields
					naturally while reducing chemical inputs.
				</p>
			</section>

			<section className={styles.section}>
				<h3 className={styles.heading}>Three Game-Changing Practices</h3>
				<ul className={styles.list}>
					<li>
						No-till cultivation preserves soil structure and beneficial
						microbes.
					</li>
					<li>
						Advanced nitrogen management minimizes waste by applying only what
						is needed.
					</li>
					<li>
						Cover crops conserve moisture, reduce irrigation needs, and enhance
						soil health.
					</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h3 className={styles.heading}>Economic Incentives</h3>
				<p>
					Regenerative practices can earn carbon credits through USDA programs
					like COMET-Farm, rewarding farmers for reducing their carbon
					footprint.
				</p>
			</section>

			<section className={styles.section}>
				<h3 className={styles.heading}>Regenerating Our Soil</h3>
				<p>
					Enhancing soil biology and carbon sequestration boosts fertility,
					reduces water usage, and increases yields—all while decreasing the
					need for chemicals.
				</p>
			</section>

			<section className={styles.section}>
				<h3 className={styles.heading}>Great Soil Means a Great Future</h3>
				<p>
					Healthy, carbon-rich soil naturally retains moisture and supports
					nutrient‑dense crops, reversing decades of chemical damage.
				</p>
			</section>

			<section className={styles.sectionCentered}>
				<Link href="https://www.drmercola.com" passHref>
					<span className={styles.link} role="link">
						View the article on Dr. Mercola's website
					</span>
				</Link>
			</section>

			<section className={styles.sectionCentered}>
				<p className={styles.finalNote}>
					<em>
						Great Soil Is Your Solution – because healthier soil means a
						healthier planet and a more prosperous future.
					</em>
				</p>
			</section>
		</div>
	);
};

export default Sequestion;
