import React from "react";
import styles from "./TraceMinerals.module.scss";

const TraceMinerals = () => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h1>Trace Minerals: Essential for All Life</h1>
				<p className={styles.info}>
					"You can trace every sickness, every disease, and every ailment to a
					mineral deficiency." - Dr. Linus Pauling
				</p>
			</header>

			<section className={styles.section}>
				<h2>Why Trace Minerals?</h2>
				<p>
					Trace minerals are essential for the human body. Although needed only
					in tiny amounts, they are crucial to our health—and to the health of
					all life. Over 5,000 clinical studies have linked trace mineral
					deficiencies to serious debilitating diseases.
				</p>
				<p>
					Dr. Linus Pauling, a two-time Nobel prize winner, urged us to
					recognize that "You can trace every sickness, every disease, and every
					ailment to a mineral deficiency."
				</p>
			</section>

			<section className={styles.section}>
				<h2>Did You Know?</h2>
				<ul>
					<li>
						35 million Americans suffer from arthritis due to a lack of zinc and
						other minerals.
					</li>
					<li>Only 1.5% of Americans are considered truly healthy.</li>
					<li>About 9 in 10 Americans suffer from constipation.</li>
					<li>
						Cancer is the number one cause of disease-related death in children.
					</li>
					<li>
						Poor diet is listed as one of the four key health behaviors linked
						to cancer, heart disease, and diabetes.
					</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>Where Have the Trace Minerals Gone?</h2>
				<p>
					Mineral deficiencies in our diet exist because our farmland and garden
					soils have become depleted of trace minerals. According to the USDA,
					North America has seen an average of 85% mineral depletion over the
					past 100 years—worse than any other country. At least 60 trace
					minerals, vital for health and well-being, have vanished from our
					soils due to over-plowing, erosion, and chemical use.
				</p>
				<p>
					A 1936 U.S. Senate investigation revealed that foods grown on millions
					of acres no longer contained enough minerals and were effectively
					starving us.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Dr. Murray Looked to the Sea</h2>
				<p>
					Dr. Maynard Murray, a biochemist and medical doctor, discovered that
					while land animals suffered from mineral deficiencies, ocean life did
					not. He concluded that the optimal proportions of trace minerals found
					in pure seawater are crucial for the growth and health of both land
					and sea life.
				</p>
				<p>
					His research showed that when land animals were fed crops fertilized
					with sea minerals, they became less susceptible to diseases like
					cancer.
				</p>
			</section>

			<section className={styles.section}>
				<h2>How to Replenish with Trace Minerals</h2>
				<p>
					Nature offers a solution in the form of sea vegetables—kelp, dulse,
					bladderwrack, and nori—which grow in an ideal mineral environment.
					These sea vegetables contain a full range of minerals, enzymes,
					vitamins, and phytonutrients.
				</p>
				<p>
					For those who find sea vegetables hard to incorporate into their diet,
					our company formulated <em>Ocean Treasure</em>, an all-natural
					supplement containing 9 varieties of sea vegetables in capsule form.
				</p>
				<p>
					In addition, we offer a concentrated form of trace minerals from the
					Australian ocean—our Ionic Sea Mineral Powder. Unlike colloidal
					minerals, these ionic minerals are easily absorbed, providing 106% of
					the U.S. RDA of magnesium and aiding in rehydration and colon
					regularity.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Returning Food to Its Powerhouse State</h2>
				<p>
					To restore the abundant trace minerals that once overflowed in our
					soils, we must return them to our food. Spreading or spraying a
					moderate application of unrefined sea minerals delivers a balanced
					blend of all 90 elements, jump starting biological life cycles and
					food webs in the soil.
				</p>
				<p>
					MycorrPlus has been designed to do just this—enriching the soil with a
					powerful blend of ocean trace minerals to boost the nutrient density
					of our food.
				</p>
			</section>
		</div>
	);
};

export default TraceMinerals;
