import React from "react";
import styles from "./HugeRootStructures.module.scss";

const HugeRootStructures = () => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<p className={styles.date}>2018 January</p>
				<p className={styles.author}>By Paul Schneider Jr., AG-USA</p>
				<h1>Huge Root Structures: A Great Place to Begin</h1>
			</header>

			<section className={styles.section}>
				<p>
					I recently sent out a letter to our GroPal Balance customers, inviting
					them to share their results with us. Most customers mentioned that GPB
					plants have a larger root structure and that the soil is much looser
					and more highly structured.
				</p>
			</section>

			<section className={styles.testimonial}>
				<h2>Phil from Ohio on His Corn</h2>
				<blockquote>
					“I treated 8 rows, left 8 untreated and repeated this pattern across
					the field. I applied the product as I cultivated the first time by
					spraying an 8” band over the row and rolling dirt to cover it. When
					you sent the letter, I went out and flagged the plots but didn’t see
					anything that jumped out at me. I pulled 4 ears out of one treated
					plot that weighed 46.7 oz. total, and 4 ears from an adjoining
					untreated plot that weighed 40.8 oz.—a difference of 5.9 oz. At 25,000
					plants, that equals a 20.57 bushel increase, which is a $66.85 benefit
					from a $10 application. I also pulled 4 ears from another adjoining
					treated plot, which equaled a 14.86 bushel increase. The treated plots
					had much bigger, more symmetrical brace roots, whereas many plants in
					the untreated plots had no brace roots. Two farmers who visited with
					me confirmed that the treated plots had fewer weeds.”
				</blockquote>
				<p>
					Below is a picture that Phil sent of his corn roots. GroPal Balance
					really does help to create huge root mass! Why not give it a try?
				</p>
			</section>
		</div>
	);
};

export default HugeRootStructures;
