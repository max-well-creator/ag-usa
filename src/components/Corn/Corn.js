import Link from "next/link";
import React from "react";
import styles from "./Corn.module.scss";

const MycorrPlusForCorn = () => {
	return (
		<div className={styles.container}>
			<h1>MycorrPlus™ for Corn</h1>

			<section className={styles.section}>
				<h2>Application Benefits</h2>
				<ul>
					<li>10–20% yield increase</li>
					<li>Higher test weights and protein</li>
					<li>Larger root mass for better nutrient uptake</li>
					<li>
						Enhanced mycorrhizal networks (better P, moisture, and nutrients)
					</li>
					<li>Improved seed germination and fertilizer efficiency</li>
					<li>Reduced compaction and improved moisture retention</li>
					<li>Lower weed pressure and increased plant immunity</li>
					<li>Flushed salts and boosted organic matter (balanced pH)</li>
					<li>Greater Relative Feed Value and more earthworms</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>Entry Level Application</h2>
				<p>For a single application:</p>
				<ol>
					<li>
						Apply <strong>1 qt/acre</strong> in the row (on seed or banded).
					</li>
					<li>
						Alternatively, side-dress with 1–2 qt/acre (with/without 28%/32%
						nitrogen, reducing N to 80–90 lbs for 200-bushel corn).
					</li>
					<li>Or broadcast 1–2 qt/acre at or before planting.</li>
				</ol>
			</section>

			<section className={styles.section}>
				<h2>Secondary Applications</h2>
				<ul>
					<li>
						When using 28%/32% nitrogen, add 1 pint of MycorrPlus-A per quart
						and reduce N by 30%+.
					</li>
					<li>
						Apply 1 qt of MycorrPlus-A/O 5 weeks after planting, or use a foliar
						treatment at tassel.
					</li>
					<li>
						Additional applications in summer, fall, or winter prepare next
						year's crop.
					</li>
					<li>
						For anhydrous ammonia, wait 2+ weeks post-application, then apply 1
						qt.
					</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>Liquid Nitrogen Guidelines</h2>
				<p>
					MycorrPlus is compatible with 28%/32% nitrogen. Add MycorrPlus first,
					then water, then nitrogen. This binds nitrogen to the soil, reducing
					leaching and may cut N use by 30%.
				</p>
				<p>
					<strong>Note:</strong> Do not mix with phosphorus or potassium.
				</p>
			</section>

			<section className={styles.section}>
				<h2>For Organic/Biological Growers</h2>
				<p>Use MycorrPlus‑O as follows:</p>
				<ul>
					<li>
						Apply 1 qt/acre in the row (or banded); if not possible, broadcast
						1–2 qt/acre.
					</li>
					<li>
						For foliar applications, use 3 qt/acre of MycorrPlus‑O‑F (or 2
						qt/acre for non‑organic growers).
					</li>
					<li>
						Additional summer, fall, or winter applications further transform
						the soil.
					</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>Why Use MycorrPlus for Corn?</h2>
				<p>
					MycorrPlus stimulates beneficial aerobic bacteria and mycorrhizal
					fungi that:
				</p>
				<ul>
					<li>Reduce compaction and eliminate hardpan</li>
					<li>Enhance moisture retention and nutrient uptake</li>
					<li>Bind nitrogen to reduce leaching (cut N by 30–50%)</li>
					<li>
						Free up existing phosphorus and potassium, reducing fertilizer needs
					</li>
				</ul>
				<p>
					This leads to healthier, more productive corn with higher yields and
					nutrient density.
				</p>
			</section>

			<section className={styles.section}>
				<p>
					Apply MycorrPlus as early as possible for better corn production, and
					experience the transformation of your soil and yields.
				</p>
			</section>
		</div>
	);
};

export default MycorrPlusForCorn;
