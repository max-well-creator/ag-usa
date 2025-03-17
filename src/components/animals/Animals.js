import Link from "next/link";
import React from "react";
import styles from "./Animals.module.scss";

const OceanTraceForAnimalWater = () => {
	return (
		<div className={styles.container}>
			{/* Header / Logo */}
			<header className={styles.header}>
				<img
					src="/images/ocean-trace-logo.png"
					alt="Ocean Trace Logo"
					className={styles.logo}
				/>
				<h1>Ocean Trace</h1>
				<h2>Sea Minerals for Animal Drinking Water</h2>
			</header>

			{/* Introduction */}
			<section className={styles.section}>
				<p>
					Enhance your animals’ drinking water with our simple three‑step AG-USA
					water treatment program:
				</p>
				<ol>
					<li>Filter the water (if needed).</li>
					<li>Add Ocean Trace.</li>
					<li>
						Run the water through a NAT Water Structuring Machine to boost its
						energy.
					</li>
				</ol>
				<p>
					Although previously listed as organic for animal water, demand was
					low. Rest assured, Ocean Trace is organic in nature.
				</p>
			</section>

			{/* Why It Matters */}
			<section className={styles.section}>
				<h3>Why Good Drinking Water Matters</h3>
				<p>
					Just as we filter our water to remove chemicals, our animals deserve
					clean, nutrient‑rich water. AG‑USA’s advanced technology now improves
					water quality for livestock.
				</p>
			</section>

			{/* Our Program */}
			<section className={styles.section}>
				<h3>Our Water Treatment Program</h3>
				<p>Our easy process:</p>
				<ol>
					<li>
						<strong>Filter:</strong> Install the filter before adding Ocean
						Trace.
					</li>
					<li>
						<strong>Inject/Add:</strong> Add Ocean Trace manually or with an
						injector.
					</li>
					<li>
						<strong>Structure:</strong> Process the water with a NAT Water
						Structuring Machine.
					</li>
				</ol>
			</section>

			{/* What Is Ocean Trace? */}
			<section className={styles.section}>
				<h3>What Is Ocean Trace?</h3>
				<p>
					We evaporate 100 gallons of ocean water down to 1 gallon. Most sodium
					chloride is removed, leaving a dense sea mineral solution that
					naturally contains all 76 minerals.
				</p>
			</section>

			{/* Recommended Amounts */}
			<section className={styles.section}>
				<h3>Recommended Amounts</h3>
				<p>
					For animals: Inject 1 part Ocean Trace into 3,000 parts water. Or, if
					adding manually, use:
				</p>
				<ul>
					<li>0.8 oz (12 cc) per 1,000 lbs daily</li>
					<li>2 tsp per 400 lbs daily</li>
					<li>2 cc per 80 lbs daily</li>
				</ul>
				<p>Maintain at least a 1,000:1 water-to-Ocean Trace ratio.</p>
			</section>

			<section className={styles.section}>
				<h3>For Fowls</h3>
				<p>
					In a 32,000‑bird chicken house consuming about 45,000 gallons in a
					40‑day grow-out, about 15 gallons of Ocean Trace are needed (roughly
					3/8 oz per 1,000 lbs of birds daily). This applies to chickens, geese,
					ducks, turkeys, and other fowl.
				</p>
			</section>

			{/* Water Structuring Machine */}
			<section className={styles.section}>
				<h3>Water Structuring</h3>
				<p>
					A NAT Water Structuring Machine creates a unified energy field in the
					water by drawing in biophotons—resulting in highly structured,
					energy‑rich water.
				</p>
				<p className={styles.link}>
					<Link href="/nat-water-structuring-machines">
						Explore NAT Machines
					</Link>
				</p>
			</section>

			{/* Call to Action */}
			<section className={styles.cta}>
				<h2>Ready to Improve Your Animal Water?</h2>
				<p className={styles.ctaLink}>
					<Link href="/purchase-ocean-trace">Purchase Ocean Trace</Link>
				</p>
				<p className={styles.ctaLink}>
					<Link href="/contact">Contact Us for More Information</Link>
				</p>
			</section>
		</div>
	);
};

export default OceanTraceForAnimalWater;
