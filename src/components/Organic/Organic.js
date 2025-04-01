import React from "react";
import styles from "./Organic.module.scss";
import Image from "next/image";
import O_Label from "../../../public/images/mycorrPlus/MycorrPlus-O-label.webp";
import certificate from "../../../public/images/mycorrPlus/certificate.jpg";
import OFLabel from "../../../public/images/mycorrPlus/OFlabel.webp";

const MycorrPlusOrganic = () => {
	return (
		<div className={styles.container}>
			<p className={styles.paragraph}>
				MycorrPlus-O and MycorrPlus-O-F are WSDA-registered for organic use and
				accepted by all major US certifiers. They have the same cost and
				application rates as MycorrPlus-A but are approved for organic
				applications.
			</p>
			<div className={styles.imageContainer}>
				<Image
					src={certificate}
					width={500}
					height={600}
					alt="MycorrPlus Certificate"
				/>
				<Image
					src={O_Label}
					width={500}
					height={500}
					alt="MycorrPlus O Label"
				/>
				<Image
					src={OFLabel}
					width={500}
					height={500}
					alt="MycorrPlus OF Label"
				/>
			</div>
			<p className={styles.paragraph}>
				Simply provide your certifier with our label and organic certificate.
				We’re happy to work with your certifier for a smooth approval process.
			</p>
		</div>
	);
};

export default MycorrPlusOrganic;
