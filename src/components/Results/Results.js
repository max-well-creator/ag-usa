import React from "react";
import Link from "next/link";
import styles from "./Results.module.scss";
import SoilTestAfter1 from "../../../public/images/labs/SoilTestAfterField1.webp";
import SoilTestAfter2 from "../../../public/images/labs/SoilTestAfterField2.webp";
import SoilTestBefore1 from "../../../public/images/labs/SoilTestBeforeField1.webp";
import SoilTestBefore2 from "../../../public/images/labs/SoilTestBeforeField2.webp";
import Image from "next/image";
import ImageColumns from "../Shared/ImageColumns/ImageColumns";

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
			<ImageColumns
				firstImg={SoilTestBefore1}
				secondImg={SoilTestAfter1}
				imagesTitle="Field 1"
				firstImgHeading="Before"
				secondImgHeading="After"
			/>
			<ImageColumns
				firstImg={SoilTestBefore2}
				secondImg={SoilTestAfter2}
				imagesTitle="Field 2"
				firstImgHeading="Before"
				secondImgHeading="After"
			/>
		</div>
	);
};

export default MycorrPlusSoilLabs;
