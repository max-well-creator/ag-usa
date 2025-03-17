import Link from "next/link";
import React from "react";
import styles from "./Benefits.module.scss";

const BenefitsOfMycorrPlus = () => {
	return (
		<div className={styles.container}>
			<h1>Benefits of MycorrPlus (formerly GroPal Balance)</h1>

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
				<p>
					<Link href="/video-transcription" className={styles.link}>
						View 4-min video transcription
					</Link>
				</p>
				<p>
					<Link href="/more-videos" className={styles.link}>
						Watch more MycorrPlus videos
					</Link>
				</p>
			</section>

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

			<section className={styles.centerSection}>
				<h2>Could One Product Help Keep Your Moisture? Yes!</h2>
			</section>

			<section className={styles.section}>
				<p>
					With Soil Balance, organic matter increases year‑after‑year, boosting
					cation exchange and nutrient availability.
				</p>
				<p>
					<Link href="/side-by-side-photos" className={styles.link}>
						View side-by-side photos
					</Link>
				</p>
			</section>

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

			<section className={styles.section}>
				<h2>How to Evaluate MycorrPlus</h2>
				<h3>Visible Results</h3>
				<ul>
					<li>Fewer weeds</li>
					<li>Less standing water</li>
					<li>Reduced compaction</li>
					<li>Lower visible salts</li>
				</ul>
				<h3>Soil Tests</h3>
				<ul>
					<li>Lower nematode counts</li>
					<li>Higher organic matter</li>
					<li>Increased CEC</li>
				</ul>
				<h3>Vegetation Changes</h3>
				<ul>
					<li>Higher protein levels</li>
					<li>Improved RFV</li>
					<li>Increased yields</li>
					<li>Higher Brix readings</li>
				</ul>
				<h3>Livestock Improvements</h3>
				<ul>
					<li>Stronger calves at birth</li>
					<li>Faster weight gain</li>
					<li>Increased milk production</li>
					<li>Better overall health</li>
				</ul>
			</section>

			<section className={styles.centerSection}>
				<p>
					<Link href="/contact" className={styles.link}>
						Contact us with your questions
					</Link>
				</p>
				<p>
					<Link
						href="/purchase-mycorrplus"
						className={`${styles.link} ${styles.boldLink}`}>
						Purchase MycorrPlus
					</Link>
				</p>
			</section>

			<section className={styles.section}>
				<h2>Get Inspired</h2>
				<p>Read this article and let it inspire you:</p>
				<p>
					<Link href="/dr-christine-jones-interview" className={styles.link}>
						Dr. Christine Jones’ article on building more carbon in our soils
					</Link>
				</p>
			</section>
		</div>
	);
};

export default BenefitsOfMycorrPlus;
