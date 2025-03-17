import React from "react";
import Link from "next/link";
import styles from "./PlantFood.module.scss";

const MoreAvailablePlantFood = () => {
	return (
		<div className={styles.container}>
			<h1>More Available Plant Food: Free Up Nutrients</h1>

			<section className={styles.section}>
				<h2>You Can Have it All!</h2>
				<ul>
					<li>Higher nutrient uptake &amp; CEC</li>
					<li>Boosted plant energy &amp; root growth</li>
					<li>Improved drought tolerance</li>
					<li>Better nitrogen retention</li>
					<li>Accelerated germination</li>
					<li>Flushed toxins and salts</li>
					<li>Increased organic matter</li>
					<li>Enhanced plant immunity</li>
				</ul>
				<p>
					MycorrPlus‑A/O (formerly GroPal Balance) are highly concentrated
					organic fertilizers that deliver these benefits.
				</p>
			</section>

			<section className={styles.section}>
				<h2>How It Works</h2>
				<p>
					Instead of feeding the plant NPK directly, MycorrPlus supplies
					microorganisms that convert tied‑up nutrients into available food. It
					encourages plants to secrete sugars (carbon) via their roots, which
					naturally bind soil particles, reduce compaction, and build humus.
					Beneficial bacteria also convert nitrogen into available forms while
					flushing toxins and salts from the root zone.
				</p>
				<p className={styles.link}>
					<Link href="/lab-test-results">
						Click here to view lab tests on nutrient release.
					</Link>
				</p>
			</section>

			<section className={styles.section}>
				<h2>Why MycorrPlus Is Great</h2>
				<ul>
					<li>One annual soil application is usually enough</li>
					<li>Balances the soil for better next-year crops</li>
					<li>Enhances nutrient density in crops and forage</li>
					<li>Promotes healthier livestock</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>What’s Inside</h2>
				<p>Our balanced formula contains:</p>
				<ul>
					<li>GroPal (sea mineral concentrate)</li>
					<li>Humic &amp; fulvic acids</li>
					<li>Fish and kelp extracts</li>
					<li>Molasses</li>
					<li>70+ strains of aerobic bacteria</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>3 Key Functions</h2>
				<ol>
					<li>
						<strong>Essential Nutrients:</strong> Supplies trace minerals from
						ocean water.
					</li>
					<li>
						<strong>Stimulates Microbes:</strong> Boosts beneficial bacteria and
						mycorrhizal fungi.
					</li>
					<li>
						<strong>Energizes the Plant:</strong> Promotes carbon sequestration
						to feed soil life.
					</li>
				</ol>
			</section>

			<section className={styles.cta}>
				<p>
					<Link href="/contact" className={styles.ctaLink}>
						Call 1-888-588-3139 to speak with a consultant
					</Link>
				</p>
				<p>
					<Link href="/contact" className={styles.ctaLink}>
						Email us at info@ag-usa.net
					</Link>
				</p>
				<p>
					<Link href="/purchase-mycorrplus" className={styles.ctaLink}>
						Purchase MycorrPlus now!
					</Link>
				</p>
			</section>

			<section className={styles.section}>
				<h2>Get Inspired</h2>
				<p>
					<Link href="/dr-christine-jones-interview">
						Read Dr. Christine Jones’ article on building more carbon in our
						soils
					</Link>
				</p>
			</section>
		</div>
	);
};

export default MoreAvailablePlantFood;
