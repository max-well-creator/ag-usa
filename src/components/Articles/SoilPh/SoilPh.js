import Link from "next/link";
import React from "react";
import styles from "./SoilPh.module.scss";

const NeutralizeSoilPH = () => {
	return (
		<div className={styles.container}>
			<h1>The Best Way to Neutralize Soil pH (Save on Lime!)</h1>
			<p>
				Soil pH measures hydrogen ions. Keeping pH balanced is essential for
				plant health.
			</p>

			<section className={styles.section}>
				<h2>1. Aglime Isn’t the Answer</h2>
				<ul>
					<li>Surface lime only affects topsoil.</li>
					<li>It’s expensive and slow (up to 3 years for full effect).</li>
					<li>Over-application may cause long-term issues.</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>2. Balance All Soil Minerals</h2>
				<p>
					pH naturally balances when all minerals are in harmony. Most soils
					already have ample calcium—it's the availability that matters.
				</p>
				<h3>Aerobic Bacteria Are the Answer</h3>
				<p>
					MycorrPlus provides 70 strains of aerobic bacteria and 4 strains of
					mycorrhizal fungi, which colonize the soil, create air pockets, and
					free up nutrients.
				</p>
				<h3>Deep Soil Balance</h3>
				<p>
					Unlike lime, microbial balancing works deep in the soil, harmonizing
					all minerals.
				</p>
			</section>

			<section className={styles.section}>
				<h2>3. Importance of Neutral pH</h2>
				<h3>High pH Issues</h3>
				<ul>
					<li>Nutrients like iron, zinc, and phosphorus become unavailable.</li>
					<li>Excess calcium can hinder magnesium and potassium uptake.</li>
				</ul>
				<h3>Low pH Issues</h3>
				<ul>
					<li>
						Acidic soils tie up essential nutrients and reduce microbial
						activity.
					</li>
					<li>
						Excess nitrogen can worsen acidity, increasing aluminum solubility
						and stunting roots.
					</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>Conclusion</h2>
				<p>
					Restoring mineral balance in the soil is far superior to relying on
					lime. For example, Elaine’s treated fields showed improved probe
					penetration and a balanced pH of 7.0—all achieved with MycorrPlus over
					a 2‑year period.
				</p>
			</section>
		</div>
	);
};

export default NeutralizeSoilPH;
