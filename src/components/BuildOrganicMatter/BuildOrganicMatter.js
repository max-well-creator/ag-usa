import Link from "next/link";
import React from "react";
import styles from "./BuildOrganicMatter.module.scss";

const BuildOrganicMatter = () => {
	return (
		<div className={styles.container}>
			<h1>Increasing Soil Organic Matter – It’s All About Carbon!</h1>
			<p>
				Higher organic matter boosts Cation Exchange Capacity (CEC) for better
				yields and nutrient density.
			</p>
			<p>
				While cover crops, compost, and mulch offer short‑term gains, the real
				solution is to stimulate carbon flow—because organic matter is carbon.
			</p>

			<section className={styles.section}>
				<h2>Article Overview</h2>
				<p>
					Instead of directly feeding plants with NPK, stimulate microorganisms
					by encouraging plants to produce and secrete sugars into the soil.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Interview Highlight: SOS – Save Our Soils</h2>
				<p>
					Dr. Christine Jones explains that new topsoil forms rapidly from
					atmospheric ingredients—carbon, hydrogen, oxygen, and
					nitrogen—secreted by plant roots.
				</p>
				<blockquote className={styles.quote}>
					"People have confused the weathering of rock with topsoil formation."
				</blockquote>
			</section>

			<section className={styles.section}>
				<h2>How MycorrPlus Enhances Topsoil</h2>
				<p>
					MycorrPlus delivers essential nutrients (including ocean trace
					minerals) and stimulates beneficial microbes. This creates a cycle
					where plants secrete sugars that fuel microbes, thereby improving
					nutrient availability and soil structure.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Benefits of Carbon Sequestration</h2>
				<p>
					Carbon acts as a natural glue—binding soil particles, creating air
					spaces, and supporting nitrogen fixation. This results in stronger,
					healthier plant growth.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Transitioning from Chemical Fertilizers</h2>
				<p>
					Gradually reduce synthetic nitrogen while MycorrPlus builds a robust
					plant-microbial bridge. Foliar applications can further support this
					transition.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Maintaining Soil Aggregates</h2>
				<p>
					Keep soil covered and minimize tillage to protect beneficial microbes.
					Cover crops and companion plants preserve structure and improve
					moisture retention.
				</p>
			</section>

			<section className={styles.center}>
				<Link href="/purchase-mycorrplus" className={styles.link}>
					Purchase MycorrPlus
				</Link>
				<Link href="/carbon-benefits-article" className={styles.link}>
					Learn More About Carbon Benefits
				</Link>
				<Link href="/back" className={styles.link}>
					BACK
				</Link>
			</section>
		</div>
	);
};

export default BuildOrganicMatter;
