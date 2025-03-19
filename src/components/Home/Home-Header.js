"use client";
import Image from "next/image";
import React from "react";
import styles from "./Home-Header.module.scss";
import { useRouter } from "next/navigation";

export default function HomeHeader() {
	const router = useRouter();
	return (
		<div className={styles.header_container}>
			<div className={styles.header}>
				<div className={styles.text}>
					<h1>Welcome to AG-USA</h1>
					<p>2 Chron. 7:14 - I will heal their land.</p>
				</div>
			</div>
			<div className={styles.hero}>
				<div className={styles.text}>
					<h1>Transform Your Soil with Mycorr Plus</h1>
					<p>Unlock the power of nature to boost your crop yields.</p>
					<button
						className={styles.ctaButton}
						onClick={() => router.push("/MycorrPlus")}>
						Learn More
					</button>
				</div>
			</div>
		</div>
	);
}
