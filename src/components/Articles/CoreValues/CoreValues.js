import React from "react";
import styles from "./CoreValues.module.scss";

const CoreValues = () => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<p className={styles.info}>AG-USA – May 2017</p>
				<h1>Core Values for Healthy Soil</h1>
			</header>

			<section className={styles.section}>
				<h2>Key Benefits</h2>
				<ul className={styles.bulletList}>
					<li>Fewer weeds – calcium and balanced pH are key.</li>
					<li>
						Balanced nutrients for consistent weight gains and milk production.
					</li>
					<li>Higher stocking rates.</li>
					<li>Better gains in the winter.</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>Benefits of a Good Soil Food Web</h2>
				<p>
					Balancing the Soil Food Web improves calcium and pH balance for better
					mineral uptake, resulting in faster, more dependable breed-back,
					tastier beef and milk, and greater customer loyalty. This balance
					minimizes variables and creates more consistent production.
				</p>
				<p>
					For dairy farmers, balanced soil improves nutrient uptake—preventing
					calcium deficiencies that can lead to Milk Fever.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Our Core Beliefs</h2>
				<p>
					At AG-USA, we believe that God created soil and plants to work
					together. Improving the soil and allowing it to feed the plant is far
					superior to applying synthetic NPK. When true balance is achieved,
					plants yield better, resist pests and diseases, become more nutrient
					dense, and thrive. We also believe sea minerals can enhance the health
					of plants, animals, and people.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Carbon Sequestration – The Secret</h2>
				<p>
					Plants produce sugars through photosynthesis and sequester them into
					the soil to feed beneficial microbes. These microbes unlock nutrients,
					structure the soil with air gaps, and help store moisture. One farmer
					saw his soil’s organic matter jump from 0.4% to 4.7% in just 8 years.
					Carbon sequestration is up to 10 times more effective than traditional
					methods at building organic matter.
				</p>
			</section>

			<section className={styles.section}>
				<h2>What Do You Believe?</h2>
				<p>
					If you believe that the best way to feed the plant is by building up
					the soil, if you’re excited about a thriving soil food web, and if
					you’re amazed by the power of mycorrhizal fungi, then Mycorr Plus is
					what you’ve been looking for!
				</p>
			</section>

			<section className={styles.section}>
				<h2>Why Mycorr Plus?</h2>
				<p>
					Mycorr Plus does more than traditional fertilizers or biologicals. It
					balances pH better than lime, digests and frees up trace minerals, and
					“switches on” carbon sequestration. For many farmers, no other
					fertilizer is needed—just an affordable $20–$40 per acre can transform
					your soil.
				</p>
			</section>
		</div>
	);
};

export default CoreValues;
