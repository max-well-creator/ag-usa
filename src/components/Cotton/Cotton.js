import Link from "next/link";
import React from "react";
import styles from "./CottonYields.module.scss";

const CottonYields = () => {
	return (
		<div className={styles.container}>
			<h1>Increasing Cotton Yields</h1>
			<p className={styles.intro}>
				Achieve up to a 10–20% yield increase with one simple application!
			</p>

			<section className={styles.section}>
				<h2>Imagine the Possibilities</h2>
				<ul>
					<li>Better boll sets</li>
					<li>Larger root mass</li>
					<li>Less compaction</li>
					<li>Up to 20% more yield</li>
				</ul>
				<p className={styles.text}>
					For just $23.50/acre (applied in the row on the seed) plus an extra
					$20 for a foliar broadcast at bloom, you can experience these superior
					results.
				</p>
			</section>

			<section className={styles.section}>
				<h2>What Our Customers Report</h2>
				<ul>
					<li>10–20% yield increase</li>
					<li>Huge root structures improve nutrient uptake</li>
					<li>Enhanced mycorrhizal activity extends the root zone</li>
					<li>Reduced disease and insect attack</li>
					<li>Better moisture retention and drought tolerance</li>
					<li>Increased plant immunity and faster seed germination</li>
					<li>Toxins and salts effectively flushed from the soil</li>
					<li>Increased organic matter in the soil</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>Why Use MycorrPlus?</h2>
				<p>MycorrPlus is a highly concentrated organic bio-stimulant that:</p>
				<ul>
					<li>
						Stimulates beneficial bacteria and mycorrhizal fungi to structure
						the soil and reduce compaction.
					</li>
					<li>
						Enhances moisture retention and unlocks bound nutrients for improved
						uptake.
					</li>
					<li>
						Improves cation exchange capacity—benefitting next year's crops.
					</li>
					<li>
						Contains a balanced blend of GroPal (sea mineral concentrate), humic
						and fulvic acids, fish, kelp, and molasses.
					</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>2 Key Functions of MycorrPlus</h2>
				<ol>
					<li>
						<strong>Provides Essential Nutrients:</strong> Delivers trace
						minerals from ocean water directly to the plant.
					</li>
					<li>
						<strong>Energizes Carbon Sequestration:</strong> Stimulates plants
						to secrete sugars (liquid carbon) that feed beneficial microbes and
						free up nutrients.
					</li>
				</ol>
			</section>

			<section className={styles.cta}>
				<Link href="/contact" className={styles.link}>
					Call 1-888-588-3139, ext. 2 to speak with a consultant
				</Link>
				<Link href="/contact" className={styles.link}>
					Email us at info@ag-usa.net
				</Link>
				<Link
					href="/purchase-mycorrplus"
					className={`${styles.link} ${styles.bold}`}>
					Purchase MycorrPlus now!
				</Link>
				<Link href="/dr-christine-jones-interview" className={styles.link}>
					Read Dr. Christine Jones’ interview for more inspiration
				</Link>
			</section>
		</div>
	);
};

export default CottonYields;
