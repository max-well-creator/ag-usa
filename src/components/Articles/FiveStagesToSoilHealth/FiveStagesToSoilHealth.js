import React from "react";
import styles from "./FiveStagesToSoilHealth.module.scss";

const FiveStagesToSoilHealth = () => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<p className={styles.date}>2018 February Ad-1</p>
				<p className={styles.author}>By Paul Schneider Jr., AG-USA</p>
				<h1>Five Stages to Soil Health</h1>
			</header>

			<section className={styles.intro}>
				<p>
					Just as the human body thrives when it has all the resources it needs,
					plants perform best when their soil is healthy. The following five
					stages describe the progression from a barely surviving plant to one
					that thrives with robust nutrient and microbial support.
				</p>
			</section>

			<section className={styles.stage}>
				<h2>Plant Health Level Zero</h2>
				<p>
					At Level Zero, plants are barely surviving. Most resources are used
					just to maintain basic structure, leaving little available to build a
					robust root system or support microbial partners.
				</p>
			</section>

			<section className={styles.stage}>
				<h2>Plant Health Level One</h2>
				<p>
					At Level One, mycorrhizal fungi begin to establish. They depend on the
					plant to sequester sugars and, in return, help unlock tied-up
					phosphorus in the soil. This stage boosts carbon sequestration and
					moisture retention, giving the plant a modest improvement in nutrient
					uptake and defense against pathogens.
				</p>
			</section>

			<section className={styles.stage}>
				<h2>Plant Health Level Two</h2>
				<p>
					As mycorrhizal networks grow, they share plant sugars with beneficial
					bacteria around the root zone. These bacteria aid in nitrogen fixation
					and weathering of minerals, while products like Mycorr Plus supply
					trace minerals that support protein synthesis. This synergy helps the
					plant build extra proteins on leaf surfaces, offering better
					protection against insects.
				</p>
			</section>

			<section className={styles.stage}>
				<h2>Plant Health Level Three</h2>
				<p>
					At Level Three, mycorrhizal fungi form a mucous sheath around their
					hyphae, allowing bacteria to digest amino acids into proteins. This
					process results in the production of fatty lipids that form a waxy,
					glossy layer on the leaves, which serves as a defense against airborne
					diseases and pests.
				</p>
			</section>

			<section className={styles.stage}>
				<h2>Plant Health Level Four</h2>
				<p>
					At Level Four, the fungi integrate into the plant’s root structure. As
					they decompose, they release complex proteins and lipids directly into
					the plant, enhancing its natural defense mechanisms. This stage
					results in significantly healthier, nutrient-dense plants with
					improved resistance to pests and diseases.
				</p>
			</section>

			<section className={styles.conclusion}>
				<p>
					Healthier, nutrient-dense plants yield better and contribute to
					increased production. Imagine the benefits for your operation when
					your soil reaches its full potential!
				</p>
			</section>
		</div>
	);
};

export default FiveStagesToSoilHealth;
