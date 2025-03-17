import Link from "next/link";
import React from "react";
import styles from "./Silage.module.scss";

const SilaTecSilageConditioner = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Sila‑Tec Silage Conditioner</h1>
			<h2 className={styles.subtitle}>For a Sweet, Highly Palatable Silage</h2>

			<section className={styles.section}>
				<h3>How It Works</h3>
				<p>
					Sila‑Tec feeds L‑form lactic acid–producing bacteria that rapidly
					ferment silage with a sweet, non‑toxic fatty acid. This acid partially
					digests the silage, making nutrients more available—so much so that
					cattle lick the bunk clean!
				</p>
				<p>
					It also acts as a prebiotic in the rumen, quickly converting to
					propionic acid for smooth digestion. The fermentation process turns
					trapped oxygen into a non‑volatile gas, keeping silage cool and
					reducing shrinkage. Silage is feedable within 24 hours.
				</p>
			</section>

			<section className={styles.section}>
				<h3>Advantages</h3>
				<ul>
					<li>
						<strong>Enhanced Palatability:</strong> Enables high-moisture silage
						with more sugars.
					</li>
					<li>
						<strong>Cooler Silage:</strong> Reduces spoilage and pack shrinkage.
					</li>
					<li>
						<strong>Prevents Off-Odors:</strong> Produces a naturally sweet
						fermentation, not ammonia or alcohol.
					</li>
					<li>
						<strong>Extended Shelf-Life:</strong> Remains feedable on hot days.
					</li>
					<li>
						<strong>Nitrate Conversion:</strong> Converts nitrates into protein,
						reducing poisoning risk.
					</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h3>Using Treated Silage in Rations</h3>
				<ul>
					<li>Lower feed costs</li>
					<li>Higher energy, protein, and mineral availability</li>
					<li>Improved compatibility in ruminant diets</li>
					<li>
						Enables earlier crop removal in double-cropping systems with fewer
						pest issues
					</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h3>How to Make Better Silage</h3>
				<ul>
					<li>Avoid cutting in the rain or when overly wet.</li>
					<li>
						Cut at the optimal maturity to prevent over-drying or frost damage.
					</li>
					<li>Pack the chopped crop immediately for best compaction.</li>
					<li>
						Keep chopper knives sharp and adjust for the recommended forage
						length (up to 5/8").
					</li>
					<li>
						Dilute and evenly apply Sila‑Tec using a spray rig or sprinkler.
					</li>
				</ul>
				<p className={styles.note}>
					Note: Adequate moisture is crucial; fermentation won’t work if the
					feed is too dry.
				</p>
			</section>

			<section className={styles.section}>
				<h3>Sila‑Tec Application Rates</h3>
				<ul>
					<li>65–78% moisture: 1 pint per ton</li>
					<li>78–80% moisture: 1.5 pints per ton</li>
					<li>Below 65% moisture: 2 pints per ton</li>
				</ul>
				<p>
					Use a boom applicator for truckloads or mount the applicator on your
					chopper for direct cutting.
				</p>
			</section>

			<section className={styles.sectionCenter}>
				<Link href="/purchase-sila-tec" className={styles.link}>
					Click here to buy Sila‑Tec or HayMax
				</Link>
				<Link href="/contact" className={styles.link}>
					Contact us for more details
				</Link>
			</section>
		</div>
	);
};

export default SilaTecSilageConditioner;
