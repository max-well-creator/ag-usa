import React from "react";
import styles from "./LowerInputs.module.scss";

const LowerInputs = () => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<p className={styles.date}>2018 AG-USA FarmProgress – January color</p>
				<p className={styles.author}>By Paul Schneider Jr., AG-USA</p>
				<h1>Lower Inputs, Increase Yields</h1>
			</header>

			<section className={styles.section}>
				<p>
					Good land management starts with basics: cover crops return nutrients
					and organic matter to the soil, leaving litter keeps the soil covered
					and conserves moisture, and minimal tillage preserves microbial
					structure and prevents carbon loss.
				</p>
				<p>
					Lowering inputs while increasing yields involves improving fertilizer
					utilization so that farmers only use what the plant truly needs.
					Mycorr Plus (now known as MycorrPlus) forms an aerobic net in the soil
					to hold nutrients until the plant needs them, saving money on
					fertilizer.
				</p>
			</section>

			<section className={styles.section}>
				<h2>A Better Nematode & Pesticide Solution</h2>
				<p>
					In healthy soils, beneficial nematodes can outcompete harmful ones. In
					contrast, nematicides kill both, leaving fewer beneficial organisms.
					Mycorr Plus helps restore soil life by devouring toxins, flushing
					excess salts, balancing nutrients, and highly structuring the soil. It
					also minimizes pesticide damage by restoring beneficial microbes.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Reducing Weed Pressure</h2>
				<p>
					Weeds are a reflection of underlying soil problems. When soil issues
					such as compaction, imbalanced pH, and low calcium are corrected with
					Mycorr Plus, weeds that thrive in such conditions diminish.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Lower Inputs by Healing the Soil</h2>
				<p>
					The proven strategy for lowering inputs and increasing yields is
					simply to conquer nature by cooperating with it. Mycorr Plus creates
					an aerobic net that latches onto nutrients, heals the soil so that
					beneficial nematodes and microbes can thrive, and quickly restores
					life in the soil.
				</p>
				<p>
					This approach works even without excellent conservation methods,
					though it becomes even more effective when combined with cover crops
					and minimal or no-tillage practices.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Keys to Best Use</h2>
				<p>Mycorr Plus works best when given time to transform the soil:</p>
				<ul>
					<li>
						<strong>Be patient:</strong> Soil transformation takes
						time—broadcast 2 quarts in the fall or early spring, then use a
						quart as a pop-up.
					</li>
					<li>
						<strong>Consistent Application:</strong> One customer in northern
						Florida applied it in March, noticed no difference initially, but by
						July and November significant improvement was observed.
					</li>
					<li>
						<strong>Improved Root Structure:</strong> Treated fields show larger
						root systems with better rhizomes and a 15% yield increase, as seen
						in comparative tests.
					</li>
				</ul>
			</section>
		</div>
	);
};

export default LowerInputs;
