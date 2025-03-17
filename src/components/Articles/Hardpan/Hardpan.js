import React from "react";
import Link from "next/link";
import styles from "./Hardpan.module.scss";

const OvercomingHardpan = () => {
	return (
		<div className={styles.container}>
			<h1>Overcoming Hardpan: Free Up Tight Soils</h1>

			<section className={styles.section}>
				<h2>Problems Caused by Compaction</h2>
				<ul>
					<li>Poor water infiltration and drainage</li>
					<li>Reduced root penetration and lower yields</li>
					<li>Increased weed pressure</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>The Best Solution: Carbon Sequestration</h2>
				<p>
					Rather than plowing or aerating, activate carbon sequestration with
					MycorrPlus‑A/O. It stimulates beneficial bacteria to balance the soil
					and remove toxins, while plants secrete sugars that bind soil
					particles together, improving structure and moisture retention.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Balancing Soil Nutrients</h2>
				<p>
					MycorrPlus balances magnesium and calcium, boosting overall soil
					health and pH.
				</p>
				<p className={styles.link}>
					<Link href="/lab-reports">View lab reports on nutrient balance.</Link>
				</p>
			</section>

			<section className={styles.section}>
				<h2>Real-World Results</h2>
				<p>
					On a 1,000‑acre farm in Georgia, soil probe readings improved from
					2.5" after 3 weeks to 6" after 4 months following MycorrPlus‑A
					application—even during a hot, dry fall.
				</p>
			</section>

			<section className={styles.cta}>
				<h2>Ready to Transform Your Soil?</h2>
				<p>
					<Link href="/purchase-mycorrplus" className={styles.ctaLink}>
						Buy MycorrPlus now!
					</Link>
				</p>
			</section>
		</div>
	);
};

export default OvercomingHardpan;
