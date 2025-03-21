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
				<p>
					Soil tests from two fields in southern Georgia/northern Florida show
					that MycorrPlus neutralizes pH and balances nutrients within 5
					months—achieving full balance in 2 years—while base saturation
					improves with calcium at 75–80%, even if trace minerals go undetected.
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
