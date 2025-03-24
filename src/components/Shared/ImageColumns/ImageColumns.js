import React from "react";
import styles from "./ImageColumns.module.scss";
import Image from "next/image";

export default function ImageColumns({ firstImg, secondImg, imagesTitle }) {
	return (
		<section className={styles.soilResults}>
			<h3>{imagesTitle}</h3>
			<div className={styles.imageContainer}>
				<div className={styles.card}>
					<h4>Before</h4>
					<Image src={firstImg} alt={firstImg} />
				</div>
				<div className={styles.card}>
					<h4>After</h4>
					<Image src={secondImg} alt={secondImg} />
				</div>
			</div>
		</section>
	);
}
