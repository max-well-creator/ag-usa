import Link from "next/link";
import React from "react";
import styles from "./Gallery.module.scss";

const PhotoGallery = () => {
	return (
		<div className={styles.container}>
			<h1>Plants & Soils Treated with Soil Balance</h1>
			<p className={styles.subtitle}>
				(Soil Balance is the soil-building ingredient in MycorrPlus)
			</p>

			<section className={styles.section}>
				<h2>Untreated Field</h2>
				<ul className={styles.list}>
					<li>Tight, compacted soil</li>
					<li>Anaerobic activity</li>
					<li>No earthworms</li>
					<li>Poor plant growth</li>
				</ul>
				<div className={styles.imageWrapper}>
					{/* Replace src with actual image path */}
					<img
						src="/images/untreated-field.jpg"
						alt="Untreated Field - Compact Soil"
						className={styles.image}
					/>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Treated Field</h2>
				<ul className={styles.list}>
					<li>Flocculated, crumbly soil</li>
					<li>Aerobic activity</li>
					<li>Abundant earthworms</li>
					<li>Enhanced plant growth</li>
				</ul>
				<div className={styles.imageWrapper}>
					{/* Replace src with actual image path */}
					<img
						src="/images/treated-field.jpg"
						alt="Treated Field - Flocculated Soil"
						className={styles.image}
					/>
				</div>
			</section>

			<section className={styles.section}>
				<p>
					<strong>Key Differences:</strong> The treated field yields much more
					per acre. It received only Soil Balance, whereas the untreated field
					got extra nitrogen and phosphorus. Santa Anita Raceway even chose the
					treated field because the horses preferred it.
				</p>
				<p>
					Numerous earthworms were observed in the treated field within a month,
					while none were found in the untreated field.
				</p>
			</section>

			<section className={styles.sectionCenter}>
				<h2>Flocculated vs. Compacted Soil</h2>
				<p className={styles.emphasis}>
					Untreated on the left – Treated on the right
				</p>
				<p>Which soil do you prefer?</p>
			</section>

			<section className={styles.section}>
				<h2>How Soil Balance Works</h2>
				<p>
					Soil Balance combines fulvic acid, humates, fish, and essential
					nutrients with native aerobic bacteria and fungi. Molasses fuels these
					microbes as they rapidly multiply, break down toxins, free bound
					nutrients, and flocculate the soil—creating air spaces that allow
					water and oxygen to flow freely.
				</p>
			</section>

			<section className={styles.sectionCenter}>
				<h2>Learn More</h2>
				<ul className={styles.links}>
					<li>
						<Link href="/7-keys-for-activating-carbon-sequestration">
							<span>7 Keys for Activating Carbon Sequestration</span>
						</Link>
					</li>
					<li>
						<Link href="/benefits-of-using-mycorrplus">
							<span>Benefits of Using MycorrPlus</span>
						</Link>
					</li>
					<li>
						<Link href="/product-application">
							<span>Product Applications for Every Budget</span>
						</Link>
					</li>
					<li>
						<Link href="/purchase-mycorrplus">
							<span className={styles.boldLink}>Buy MycorrPlus now!</span>
						</Link>
					</li>
				</ul>
			</section>
		</div>
	);
};

export default PhotoGallery;
