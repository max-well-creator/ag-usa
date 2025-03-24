import Link from "next/link";
import React from "react";
import styles from "./Organic.module.scss";

const MycorrPlusOrganic = () => {
	return (
		<div className={styles.container}>
			<p className={styles.paragraph}>
				MycorrPlus-O and MycorrPlus-O-F are WSDA-registered for organic use and
				accepted by all major US certifiers. They have the same cost and
				application rates as MycorrPlus-A but are approved for organic
				applications.
			</p>
			<p className={styles.paragraph}>
				Simply provide your certifier with our label and organic certificate.
				We’re happy to work with your certifier for a smooth approval process.
			</p>
		</div>
	);
};

export default MycorrPlusOrganic;
