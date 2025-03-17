import Link from "next/link";
import React from "react";
import styles from "./FoodPlots.module.scss";

const EnhancingFoodPlots = () => {
	return (
		<div className={styles.container}>
			<h1>Don't Conform; Transform!</h1>
			<h2>Enhance Your Food Plots with MycorrPlus™</h2>
			<p>
				Create food plots that attract deer and boost livestock health with
				nutrient‑dense, drought‑tolerant forage.
			</p>

			<section className={styles.section}>
				<h3>Revitalize Soil Life</h3>
				<p>
					MycorrPlus™ (A &amp; O) infuses the soil with 70+ aerobic bacteria,
					establishes deep mycorrhizal networks, and attracts earthworms to
					naturally displace harmful pathogens.
				</p>
			</section>

			<section className={styles.section}>
				<h3>Customer Feedback</h3>
				<ul className={styles.list}>
					<li>
						<strong>Calves:</strong> Faster growth and uniform births.
					</li>
					<li>
						<strong>Cattle:</strong> Prefer treated pasture.
					</li>
					<li>
						<strong>Deer:</strong> Favor nutrient‑dense, MycorrPlus‑treated
						fields.
					</li>
				</ul>
				<p>
					Experts estimate that 97% of soil nutrients are locked up. MycorrPlus
					unlocks these nutrients and boosts plant density for healthier
					animals.
				</p>
			</section>

			<section className={styles.section}>
				<h3>How It Works</h3>
				<ol className={styles.orderedList}>
					<li>
						<strong>Structure:</strong> Microbes create air pockets that reduce
						compaction and improve water infiltration.
					</li>
					<li>
						<strong>Balance:</strong> Enhances nutrient availability and pH
						balance, often eliminating the need for lime.
					</li>
					<li>
						<strong>Mycorrhizae Support:</strong> Promotes deep root growth by
						supplying sugars to fungi.
					</li>
					<li>
						<strong>Carbon Sequestration:</strong> Builds organic matter,
						forming rich, sponge-like topsoil.
					</li>
					<li>
						<strong>Salt Remediation:</strong> Flushes salts from the root zone.
					</li>
				</ol>
				<p>Healthy soil means healthier plants and livestock.</p>
			</section>

			<section className={styles.ctaSection}>
				<p>
					<Link href="/testimonials">Read customer testimonials</Link>
				</p>
				<p>
					<Link href="/videos">Watch our videos</Link>
				</p>
				<p>
					<Link href="/purchase-mycorrplus">
						<strong>Purchase MycorrPlus™ now!</strong>
					</Link>
				</p>
			</section>
		</div>
	);
};

export default EnhancingFoodPlots;
