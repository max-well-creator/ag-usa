import React from "react";
import styles from "./GreatValue.module.scss";

const MycorrPlusROI = () => {
	return (
		<div className={styles.container}>
			<p className={styles.intro}>Let us tell you wh</p>
			<section className={styles.section}>
				<h2>Our Story</h2>
				<p>
					Founded in 1969 by Paul Schneider Sr. at Tech Ag, our family product
					evolved into MycorrPlus.
				</p>
			</section>
			<section className={styles.section}>
				<h2>Why Choose MycorrPlus?</h2>
				<ul className={styles.list}>
					<li>Higher yields & nutrient density</li>
					<li>Better carbon sequestration & soil structure</li>
					<li>Cost-effective soil building (32–64 oz/acre)</li>
				</ul>
				<p>Save money on inputs without compromising results.</p>
			</section>
		</div>
	);
};

export default MycorrPlusROI;
