import React from "react";
import Link from "next/link";
import styles from "./Results.module.scss";
import SoilTestAfter1 from "../../../public/images/labs/SoilTestAfterField1.webp";
import SoilTestAfter2 from "../../../public/images/labs/SoilTestAfterField2.webp";
import SoilTestBefore1 from "../../../public/images/labs/SoilTestBeforeField1.webp";
import SoilTestBefore2 from "../../../public/images/labs/SoilTestBeforeField2.webp";
import Image from "next/image";

const MycorrPlusSoilLabs = () => {
	return (
		<div className={styles.container}>
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

			<section className={styles.soilResults}>
				<h3>Field 1</h3>
				<div className={styles.imageContainer}>
					<div className={styles.card}>
						<h4>Before</h4>
						<Image src={SoilTestBefore1} alt={SoilTestBefore1} />
					</div>
					<div className={styles.card}>
						<h4>After</h4>
						<Image src={SoilTestAfter1} alt={SoilTestAfter1} />
					</div>
				</div>
			</section>
			<section className={styles.soilResults}>
				<h3>Field 2</h3>
				<div className={styles.imageContainer}>
					<div className={styles.card}>
						<h4>Before</h4>
						<Image src={SoilTestBefore2} alt={SoilTestBefore1} />
					</div>
					<div className={styles.card}>
						<h4>After</h4>
						<Image src={SoilTestAfter2} alt={SoilTestAfter2} />
					</div>
				</div>
			</section>
		</div>
	);
};

export default MycorrPlusSoilLabs;
