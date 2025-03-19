import Image from "next/image";
import React from "react";
import styles from "./Home-Header.module.scss";

export default function HomeHeader() {
	return (
		<div className={styles.header_container}>
			<div className={styles.company}>
				<h1>Welcome to AG-USA</h1>
				<p>2 Chron. 7:14 I will heal their land.</p>
			</div>
		</div>
	);
}
