import React from "react";
import Link from "next/link";
import styles from "./Results.module.scss";

const MycorrPlusSoilLabs = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Mycorr Plus™ (formerly GroPal Balance)</h1>

			<section className={styles.section}>
				<h2>Soil Lab Results</h2>
				<p>
					View before-and-after soil tests from two fields in southern
					Georgia/northern Florida.
				</p>
				<p>
					In just 5 months after applying MycorrPlus, soil pH is neutral and
					many nutrients are balanced. Full balance is achieved in about 2 years
					with annual quart applications.
				</p>
				<p>
					Note: Standard tests may not detect many trace minerals. Base
					Saturation improves as calcium reaches 75–80% while hydrogen
					decreases.
				</p>
			</section>

			<section className={styles.section}>
				<h3>Field 1</h3>
				<div className={styles.imageContainer}>
					<h4>Before</h4>
					<img
						src="/images/field1-before.jpg"
						alt="Field 1 - Before MycorrPlus"
					/>
				</div>
				<div className={styles.imageContainer}>
					<h4>After</h4>
					<img
						src="/images/field1-after.jpg"
						alt="Field 1 - After MycorrPlus"
					/>
				</div>
			</section>

			<section className={styles.section}>
				<h3>Field 2</h3>
				<div className={styles.imageContainer}>
					<h4>Before</h4>
					<img
						src="/images/field2-before.jpg"
						alt="Field 2 - Before MycorrPlus"
					/>
				</div>
				<div className={styles.imageContainer}>
					<h4>After</h4>
					<img
						src="/images/field2-after.jpg"
						alt="Field 2 - After MycorrPlus"
					/>
				</div>
			</section>

			<section className={styles.section}>
				<p>
					MycorrPlus is emerging as a breakthrough for pasture and crop
					production. Call us today for more information!
				</p>
				<h2>Learn More</h2>
				<ul className={styles.linkList}>
					<li>
						<Link href="/7-keys-for-activating-carbon-sequestration">
							7 Keys for Activating Carbon Sequestration
						</Link>
					</li>
					<li>
						<Link href="/benefits-of-using-mycorrplus">
							Benefits of Using MycorrPlus
						</Link>
					</li>
					<li>
						<Link href="/acresusa-interview">
							AcresUSA Interview with Dr. Christine Jones
						</Link>
					</li>
				</ul>
			</section>
		</div>
	);
};

export default MycorrPlusSoilLabs;
