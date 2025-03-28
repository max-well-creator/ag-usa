import Link from "next/link";
import React from "react";
import styles from "./DroughtTolerance.module.scss";

const SoilStructureDroughtTolerance = () => {
	return (
		<div className={styles.container}>
			<h1>Soil Structure is the Key to Superior Drought Tolerance</h1>
			<p>
				What if you could grow more grass on half the water? Poor soil structure
				wastes water through run-off, while well-structured soil stores moisture
				in tiny air spaces and releases it when needed. Plus, it resists
				erosion.
			</p>

			<section className={styles.section}>
				<h2>The Power of Carbon Sequestration</h2>
				<p>
					The fastest way to improve soil structure is by boosting carbon
					sequestration. Plants use photosynthesis to produce sugars—mostly from
					the air—which are exuded by roots to feed soil microbes. These
					microbes bind soil particles, forming stable, nutrient-rich topsoil.
				</p>
				<p>
					MycorrPlus-A and O excel at this process, rapidly creating topsoil
					that holds more water—ideal for drought conditions.
				</p>
				<p className={styles.note}>
					Note: At least 1.1" of moisture is needed to kick-start the process.
				</p>
			</section>
		</div>
	);
};

export default SoilStructureDroughtTolerance;
