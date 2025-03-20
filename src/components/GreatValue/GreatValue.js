import Link from "next/link";
import React from "react";
import styles from "./GreatValue.module.scss";

const MycorrPlusROI = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>MycorrPlus – More Bang for Your Buck!</h1>
			<p className={styles.intro}>
				A $20 per acre application for $40 per acre results! Get more "bang for
				your fertilizer dollar" with MycorrPlus.
			</p>

			<section className={styles.section}>
				<h2>Our Story</h2>
				<p>
					My dad, Paul Schneider Sr., started Tech Ag in 1969, helping farmers
					boost yields and improve soil quality. Our family evolved a superior
					product line—and MycorrPlus stands out.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Why Choose MycorrPlus?</h2>
				<ul className={styles.list}>
					<li>Increased yields and nutrient density</li>
					<li>Improved carbon sequestration and soil structure</li>
					<li>Cost-effective soil building (only 32–64 oz/acre)</li>
				</ul>
				<p>
					Imagine spending twice as much on premium inputs and not getting these
					results!
				</p>
			</section>

			<section className={styles.section}>
				<h2>How It Works</h2>
				<p>
					Rather than relying solely on NPK, MycorrPlus stimulates plants to
					secrete large amounts of sugar (liquid carbon) through their roots.
					This feeds beneficial microbes that unlock tied-up nutrients and bind
					soil particles together to form rich, stable topsoil.
				</p>
			</section>
		</div>
	);
};

export default MycorrPlusROI;
